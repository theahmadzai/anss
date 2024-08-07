import { Button, Col, Row, Space } from "antd";
import React from "react";

/**
 * @typedef { {member: Member, onDelete: (member: Member) => void, onEdit: (member: Member) => void } } MemberInfoProps
 * @param {MemberInfoProps} props
 * @returns {JSX.Element}
 */
export default function MemberInfo({ member, onDelete, onEdit }) {
    return (
        <Row>
            <Col span={24} style={{ marginBottom: 8 }}>
                <Space.Compact block>
                    <Button block>
                        <p>{member?.uci} - {member.firstName} {member.lastName} | <a href={`mailto:${member.email}`}>{member.email}</a> | <a href={`tel:${member.phone}`}>{member.phone}</a> | {member.sex ? "🚺female♀️" : "🚹male♂️"} | {member.birthdate.format("YYYY-MM-DD")} | {member.legalStatus}</p>
                    </Button>
                    <Button type="primary" onClick={() => onEdit(member)}>Edit</Button>
                    <Button type="primary" danger onClick={() => onDelete(member)}>Delete</Button>
                </Space.Compact>
            </Col>
        </Row>
    );
}