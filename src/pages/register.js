import React, { useState, useEffect } from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { Button, Checkbox, DatePicker, Form, Input, FormRule, Switch, Select } from "antd";
import { Client, fql } from "fauna";
import PageHeader from "../components/page-header";

const { TextArea } = Input;
const { Item: FormItem } = Form;
const { Option } = Select;


export default function TestPage() {

  const [legalStatusOptions, setLegalStatusOptions] = useState([]);
  useEffect(() => {
    (async () => {
      setLegalStatusOptions(((
        await fetch("/.netlify/functions/fauna", { body: JSON.stringify({ collection: "LegalStatus" }) })
      ).json())
        .data.data.map(legalStatus => {
          return <Option key={legalStatus.id} value={legalStatus.name}>{legalStatus.name}</Option>;
        }));
    })();
  }, []);

  const [serviceCheckboxes, setServiceCheckboxes] = useState([]);
  useEffect(() => {
    async function fetchServices() {
      setServiceCheckboxes((await client.query(fql`Service.all()`)).data.data.map(service => {
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
      }));
    }

    fetchServices();
  }, []);


  const onFinish = async values => {
    // checkbox values are undefined or ""
    const {
      sex: sexBool,
      services,
    } = values;

    console.log("Received values of form: ", values);

    const sex = sexBool ? "female" : "male";
    const selectedServices = [];
    for (const key in services)
      if (services[key] === true)
        selectedServices.push(key);

    const client = { ...values, joinedDate: new Date(), sex, services: selectedServices };

    /** @type {RequestInit}*/
    const request = {
      body: JSON.stringify(client),
      mode: "same-origin",
      method: "POST",
      redirect: "follow",
      cache: "reload",
      keepalive: false,
    };
    const response = await fetch("/.netlify/functions/add-client", request);

    return response.ok ? true : false;


  };

  /** @type FormRule*/
  const nameRuleConfig = {
    pattern: /^\w+$/,
    min: 2,
    transform: value => value.toString().trim(),
    whiteSpace: false,
    required: true,
    type: "string",
  };
  /** @type FormRule*/
  const phoneNumberRuleConfig = {
    type: "string",
    min: 9,
    required: true,
    transform(value) {
      return value.toString().trim();
    },
    whitespace: false,
    pattern: /^\+?\d*(\s|-)?\(?\d{3}\)?-?\d{3}-?\d{4,}$/,
  };

  return (
    <Layout>
      <PageHeader title="Add Client" />
      <Form
        onFinish={onFinish}
        requiredMark="customize"
        layout="inline"
        style={{ alignItems: "center", textTransform: "capitalize", margin: "1rem 2rem" }}
      >
        <fieldset style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "space-around",
          justifyItems: "center",
        }}>
          <legend>principal applicant</legend>
          <FormItem

            labelAlign="right"
            hasFeedback
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
            required
            rules={[nameRuleConfig]}
            label="first name"
            name="firstName"
          >
            <Input type="text" />
          </FormItem>

          <FormItem

            labelAlign="right"
            hasFeedback
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
            required

            rules={[nameRuleConfig]}
            label="last name"
            name="lastName"
          >
            <Input type="text" />
          </FormItem>

          <FormItem
            labelAlign="right"
            hasFeedback
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
            required

            rules={[phoneNumberRuleConfig]}
            label="phone number"
            name="phone"
          >
            <Input type="tel" />
          </FormItem>

          <FormItem
            labelAlign="right"
            hasFeedback
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
            required

            rules={[]}
            label="email"
            name="email"
          >
            <Input type="email" />
          </FormItem>

          <FormItem
            labelAlign="right"
            hasFeedback
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
            required

            valuePropName="checked"
            label="sex"
            name="sex"
          >
            <Switch unCheckedChildren="male" checkedChildren="female" />
          </FormItem>


          <FormItem

            labelAlign="right"
            hasFeedback
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
            required


            label="principal applicant UCI"
            name="uci"
          >
            <Input type="number" />
          </FormItem>

          <FormItem

            labelAlign="right"
            hasFeedback
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
            required

            rule={{}}
            label="Date Of Birth"
            name="birthdate"
          >
            <DatePicker allowClear={false} format="yyyy-MM-dd" maxDate={new Date()} />
          </FormItem>

          <FormItem

            labelAlign="right"
            hasFeedback
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
            required

            rule={{}}
            label="Legal Status"
            name="legalStatus"
          >
            <Select>
              {legalStatusOptions}
            </Select>
          </FormItem>


          <FormItem

            labelAlign="right"
            hasFeedback
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}


            label="description of services needed"
            name="description"
          >
            <TextArea rows={4} allowClear name="description" size="middle" />
          </FormItem>
        </fieldset>

        <Button htmlType="button">add member</Button>

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

        <Button type="primary" htmlType="submit">Submit</Button>

      </Form>
    </Layout>
  );
}

export const Head = () => <SEO title="testing 12.3" pathname="/test" />;

