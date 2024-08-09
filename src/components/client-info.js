import { Button, Col, Row, Space } from "antd";
import React from "react";

/**
 * @typedef  Client
 * @typedef { {client: Client, onDelete: (client: import("../utils/types").Client) => void, onEdit: (client: import("../utils/types").Client) => void } } ClientInfoProps
 * @param {ClientInfoProps} props
 * @returns {JSX.Element}
 */
export default function clientInfo({ client, onDelete, onEdit }) {
    return (
        <Row style={{width: "100%"}}>
            <Col span={24} style={{ marginBottom: 8 }}>
                <Space.Compact block>
                    <Button block>
                        <p>
                            {client?.uci} - {client.firstName} {client.lastName} |
                            <a href={`mailto:${client.email}`}>{client.email}</a> |
                            <a href={`tel:${client.phone}`}>{client.phone}</a> |
                            {client.sex ? "🚺female♀️" : "🚹male♂️"} |
                            {client.birthdate.format("YYYY-MM-DD")} |
                            {client.legalStatus}
                        </p>
                    </Button>
                    <Button type="primary" onClick={() => onEdit(client)}>Edit</Button>
                    <Button type="primary" danger onClick={() => onDelete(client)}>Delete</Button>
                </Space.Compact>
            </Col>
        </Row>
    );
}