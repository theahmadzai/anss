import { useAccount, useMsal } from "@azure/msal-react";
import { Button, List } from "antd";
import { Link, navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import Error from "../../components/error";
import routes from "../../utils/routes";
import msGraph, { useMsGraphUserInfo } from '../../hooks/use-msgraph.js';
import { useMsalAccessToken } from "../../hooks/use-msal.js";
import { loginRequest } from "../../utils/auth-config.js";

const { Group: ButtonGroup } = Button;
const { Item: ListItem } = List;

export default function Profile() {
  const { instance } = useMsal();
  const account = instance.getActiveAccount();
  const user = useMsGraphUserInfo(useMsalAccessToken(loginRequest));
  if(account === null)
  {
    navigate(routes.staff.login);
    return <Error>Please log in</Error>;
  }

  //todo: depends on pages to register and view clients (non-existent in this branch)


  return (
    <>
      <h1>{account.name}</h1>
      <h2>{account.username} - {user?.jobTitle || "No Job Title"}</h2>
      <List size="large" itemLayout="vertical">
        <ListItem about="add a new client to ANSS database"><Link to={routes.client.register}>Register New Client</Link></ListItem>
        <ListItem><Link to={routes.client.view}>View Clients</Link></ListItem >
        <ListItem><Link to={routes.staff.logout}><>Logout</></Link></ListItem>
      </List >

      <ButtonGroup style={{ margin: 'auto', width: '100%' }}>
      </ButtonGroup>
    </>
  );
};
