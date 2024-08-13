import React, { useState } from 'react';
import fauna, { useFaunaCollection, useFaunaQuery } from '../../hooks/use-fauna';
import { Modal, Row, Space } from 'antd';
import ClientInfo from '../../components/client-info';
import dayjs from 'dayjs';
import netlifyFunctions, { faunaMethods } from '../../utils/netlify-functions-path';
import { StatusCodes } from 'http-status-codes';
import PageHeader from '../../components/page-header';

export default function ViewClients() {
    const clientGroups = useFaunaQuery('ClientGroup.all() { clients }');
    const legalStatuses = useFaunaCollection('LegalStatus');

    console.log(clientGroups);

    const deleteClient = async (clientId) => {
        Modal.confirm({
            title: 'Are you sure you want to delete this client?',
            onOk: async () => {
                const response = await fetch(netlifyFunctions.fauna, {
                    body: JSON.stringify({ method: faunaMethods.DELETE, data: { collection: 'Client', id: clientId } }),
                });

                if(response.status === StatusCodes.OK)
                    Modal.success({ title: 'Client deleted successfully', onClose: () => window.history.go() });
                else
                    Modal.error({ title: 'Failed to delete client' });
            }
        });
    };

    /** @type import("../../components/client-info").ClientInfoProps["onEdit"] */
    const editClient = () =>
        Modal.info({
            title: 'Not implemented',
            content: 'If you would like to edit a client at this time you will have to delete and recreate the client with the updated details.',
        });


    return (
        <>
            <PageHeader title="Clients" />
            {
                clientGroups?.map(group => (
                    <Space key={group.id} direction='vertical' size='large' align='center' style={{ width: '100%', border: '1px solid black', padding: '0.5rem', marginBottom: '1rem'  }}>
                        {group?.clients?.map(client => {
                            if(!client)
                                return null;
                            client.birthdate = dayjs(client.birthdate.dateString);
                            client.legalStatus = legalStatuses.find(status => status.id === client.legalStatus.id)?.name;
                            return <ClientInfo onDelete={() => deleteClient(client.id)} onEdit={editClient} key={client.id} client={client} />;
                        })}
                    </Space>
                ))
            }

        </>
    );
}