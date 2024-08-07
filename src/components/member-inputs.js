import React from "react";
import dayjs from 'dayjs';
import { Form, Input, Select, DatePicker, Switch } from "antd";


/** @type import("antd").FormRule */
const requiredRule = {
    required: true,
};
/** @type import("antd").FormRule */
const nameRuleConfig = {
    ...requiredRule,
    pattern: /^\w+\b$/,
    min: 2,

    transform: value => value?.toString().trim(),
    // whitespace: true,
    type: "string",
};
/** @type import("antd").FormRule */
const phoneNumberRuleConfig = {
    ...requiredRule,
    type: "string",
    min: 9,
    transform(value) {
        return value?.toString().trim();
    },
    // when rendered
    pattern: /^\+?\d*(\s|-)?\(?\d{3}\)?-?\d{3}-?\d{4,}$/,
    message: "Please enter a valid phone number, nine (9) or more digits: +1234567890",
};


/** @type import("antd").FormRule */
const emailRuleConfig = {
    ...requiredRule,
    type: "string",
    transform(value) {
        return value?.toString().trim();
    },
    // when rendered
    pattern: /^([a-zA-Z0-9_\-.]+)(\+[a-zA-Z0-9_\-.]*)?@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
    message: "Please enter a valid email address: example@mail.com",
};

/**
 * @typedef { { legalStatusOptions: import("antd").SelectProps["options"], form: import("antd").FormInstance } } ClientFormProps
 * @param {ClientFormProps} props
 * @returns {JSX.Element}
 */
export default function MemberInputs({ legalStatusOptions }) {
    return (
        <>
            <Form.Item

                labelAlign="right"
                hasFeedback
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 9 }}
                required
                validateDebounce={1020}
                rules={[nameRuleConfig]}
                label="first name"
                name="firstName"
            >
                <Input type="text" />
            </Form.Item>

            <Form.Item

                labelAlign="right"
                hasFeedback
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 9 }}
                required
                validateDebounce={1020}

                rules={[nameRuleConfig]}
                label="last name"
                name="lastName"
            >
                <Input type="text" />
            </Form.Item>

            <Form.Item
                labelAlign="right"
                hasFeedback
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 9 }}
                required
                validateDebounce={1020}

                rules={[phoneNumberRuleConfig]}
                label="phone number"
                name="phone"
            >
                <Input type="tel" />
            </Form.Item>

            <Form.Item
                labelAlign="right"
                hasFeedback
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 9 }}
                required
                validateDebounce={1020}

                rules={[emailRuleConfig]}
                label="email"
                name="email"
            >
                <Input type="email" />
            </Form.Item>

            <Form.Item
                labelAlign="right"
                hasFeedback
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 9 }}
                required
                validateDebounce={1020}
                initialValue={false}

                rules={[{ ...requiredRule, type: "string", transform: bool => bool ? "female" : "male" }]}
                valuePropName="checked"
                label="sex"
                name="sex"
            >
                <Switch unCheckedChildren="male" defaultChecked checkedChildren="female" />
            </Form.Item>


            <Form.Item
                labelAlign="right"
                hasFeedback
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 9 }}
                required
                validateDebounce={1020}

                rules={[{ required: true, min: 4 }]}
                label="principal applicant UCI"
                name="uci"
            >
                <Input type="text" />
            </Form.Item>

            <Form.Item

                labelAlign="right"
                hasFeedback
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 9 }}
                required

                rules={[requiredRule]}
                label="Date Of Birth"
                name="birthdate"
            >
                <DatePicker style={{ width: '100%' }} picker="date" type="date" allowClear minDate={dayjs().subtract(123, 'years')} maxDate={dayjs(new Date())} />
            </Form.Item>

            <Form.Item
                labelAlign="right"
                hasFeedback
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 9 }}
                required
                validateDebounce={1020}


                rules={[requiredRule]}
                label="Legal Status"
                name="legalStatus"
            >
                <Select>
                    {legalStatusOptions}
                </Select>
            </Form.Item>


            <Form.Item
                labelAlign="right"
                hasFeedback
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 9 }}


                label="additional notes"
                name="notes"
            >
                <Input.TextArea rows={4} allowClear name="notes" />
            </Form.Item>
        </>
    );
}