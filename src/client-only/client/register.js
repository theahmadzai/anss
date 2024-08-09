import { Button, Checkbox, Form, Input, Modal, Select, Spin } from "antd";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import Error from "../../components/error.js";
import Layout from "../../components/layout.js";
import ClientInfo from "../../components/client-info.js";
import PageHeader from "../../components/page-header.js";
import SEO from "../../components/seo.js";
import { useFaunaCollection } from "../../hooks/use-fauna.js";
import netlifyFunctions from '../../utils/netlify-functions-path.js';
import routes from "../../utils/routes.js";
const MemberInputs = React.lazy(() => import("../../components/member-inputs.js"));
const { Item: FormItem } = Form;
const { Option } = Select;


const ModalMode = { ADD: "add", EDIT: "edit" };

const sexFromBool = (sex) => typeof sex === 'string' ? sex :
  sex ? "female" : "male";

const serviceToCheckbox = service => {
  const { name, id, description } = service;
  return <FormItem
    key={id}
    initialValue={false}
    valuePropName="checked"

    label={name}
    tooltip={description}
    labelAlign="right"
    colon={false}
    labelCol={{ span: 7 }}
    wrapperCol={{
      span: 1,
      autoFocus: true,
      style: {
        alignItems: "center",
        justifyItems: "center",
        justifySelf: "center",
        justifyContent: "space-around",
      },
    }}
    htmlFor={name}
    name={["services", name]}
  >
    <Checkbox id={name} />
  </FormItem>;
};





/**
 * @typedef { {isMember: boolean | React.Dispatch<React.SetStateAction<[]>> } RegisterClientProps
 * @param {RegisterClientProps} props
 * isMember: represents if it a [sub]member (recursive call) of the main client form
 */
function RegisterForm() {
  const [form] = Form.useForm();
  const values = Form.useWatch([], form);
  const [memberForm] = Form.useForm();
  const legalStatuses = useFaunaCollection('LegalStatus');
  const services = useFaunaCollection('Service');
  const [submittable, setSubmittable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState(ModalMode.ADD);
  // member being edited
  const [editMember, setEditMember] = useState(undefined);

  const legalStatusOptions = useMemo(() => {
    if(legalStatuses)
      return legalStatuses.map(status => <Option key={status.id}>{status.name}</Option>);
    else
      return [<Option key="error"><Error key="error" /></Option>];
  }, [legalStatuses]);

  const serviceCheckboxes = useMemo(() => {
    if(services)
      return (services.map(serviceToCheckbox));
    else
      return ([<Error key="error" />]);
  }, [services]);

  const checkFormValidity = useCallback(() => {
    if(!form) return false;
    form.validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
    return submittable;
  }, [form, submittable]);

  useEffect(() => { checkFormValidity(); }, [checkFormValidity, values]);


  /**
   * @param {keyof typeof ModalMode} mode
   * @param {import("../../utils/types.ts").Client?} editMember member being edited
   * */
  function openMemberModal(mode, editMember = undefined) {
    if(mode !== ModalMode.EDIT && mode !== ModalMode.ADD)
      return;

    setModalMode(mode);
    setIsModalOpen(true);
    setEditMember(editMember);
  }

  function closeMemberModal() {
    setIsModalOpen(false);
    setModalMode(undefined);
  }

  async function submitNewMember(event) {
    event.preventDefault();
    try { await memberForm.validateFields(); } catch { return; }

    const member = memberForm.getFieldsValue();
    member.sex = sexFromBool(member.sex);
    if(modalMode === ModalMode.EDIT && editMember)
    {
      const index = members.findIndex(m => m === editMember);
      if(index === -1)
        return Modal.error({ title: "Edit failed", content: "Edit failed. Please try again." });
      setMembers([...members.slice(0, index), member, ...members.slice(index + 1)]);
      setEditMember(undefined);
    }
    else
    {
      setMembers([...members, member]);
    }
    closeMemberModal();
  }

  /**
   * Deletes a member.
   *{}
   * @param {import("../../utils/types.ts").Client} member - The member object to be deleted.
   * @returns {void}
   */
  function deleteMember(member) {
    setMembers(members.filter(m => m !== member));
  }

  const onFinish = async values => {
    if(!checkFormValidity() || !submittable)
      return;

    setLoading(true);
    // checkbox values are undefined (unchecked/falsy) or "" (checked/truthy)
    const { sex, services } = values;

    const selectedServices = [];
    for(const key in services)
      if(services[key] === true)
        selectedServices.push(key);

    for(const member of members)
      member.services = selectedServices;

    const client = { ...values, joinedDate: new Date(), sex: sexFromBool(sex), services: selectedServices };
    /** @type {RequestInit}*/
    const request = {
      mode: "same-origin",
      method: "POST",
      redirect: "follow",
      cache: "reload",
      keepalive: false,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Netlify": true,
      },

      body: JSON.stringify([client, ...members]),
    };
    const response = await fetch(netlifyFunctions["add-client"], request);

    if(response.ok)
      Modal.success({
        title: "Client Added",
        content: "Client added successfully.",
        onOk: () => { form.resetFields(); setMembers([]); },
      });
    else
      Modal.error({
        title: "Error",
        content: "Client could not be added. Please try again later.",
      });

    setLoading(false);
    return response.ok;
  };


  return (
    <>
      <Spin spinning={serviceCheckboxes.length === 0 || legalStatusOptions.length === 0 || loading} size="large" tip="Loading..." style={{ margin: "1rem 2rem", textAlign: "center", justifyContent: "center" }}>
        <Form
          form={form}
          onFinish={onFinish}
          disabled={serviceCheckboxes.length === 0}
          size="large"
          labelWrap
          requiredMark="customize"
          layout="inline"
          style={{ alignItems: "center", textTransform: "capitalize", margin: "1rem 2rem" }}
        >

          <fieldset style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
            <legend>Principal Applicant</legend>
            <MemberInputs legalStatusOptions={legalStatusOptions} />
          </fieldset>

          <fieldset style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
            <legend>Additional Members</legend>

            {members.map((member, index) => <ClientInfo key={index} client={member} onDelete={deleteMember} onEdit={member => openMemberModal(ModalMode.EDIT, member)} />)}


            <Button htmlType="button" onClick={() => openMemberModal(ModalMode.ADD)}>add member</Button>
          </fieldset>

          <fieldset style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
            <legend>available services</legend>
            {serviceCheckboxes}
            <FormItem
              label="Other"

              labelAlign="right"
              labelCol={{ span: 5 }}
              wrapperCol={{ flex: "none", autoFocus: true }}
              htmlFor="other"
              name="other"
            >
              <Input type="text" id="other" value={null} />
            </FormItem>
          </fieldset>

          <Button type="primary" htmlType="submit" disabled={!submittable}>Submit</Button>

        </Form>
      </Spin>

      <Modal
        title={modalMode === ModalMode.EDIT ? "Edit Member" : "Add Member"}
        open={isModalOpen}
        onOk={submitNewMember}
        onCancel={closeMemberModal}
        style={{ padding: "1rem" }}
        width={"55%"}
        okButtonProps={{ htmlType: "submit", form: "memberForm", }}
        destroyOnClose={true}
      >
        <Form
          form={memberForm}
          layout="horizontal"
          name="memberForm"
          clearOnDestroy
          labelWrap
          requiredMark="customize"
          style={{ width: "100%" }}
        >
          <MemberInputs legalStatusOptions={legalStatusOptions} />
        </Form>
      </Modal>
    </>
  );
}
export default function RegisterClient() {
  return (
    <>
      <PageHeader title="Add Client" />
      <RegisterForm />
    </>
  );
}
export const Head = () => <SEO title="register with ANSS" pathname={routes.client.register} />;