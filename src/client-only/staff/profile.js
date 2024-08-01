import { useMsal } from "@azure/msal-react";
import { Button, List } from "antd";
import { Link, navigate } from "gatsby";
import React, { useState } from "react";
import Error from "../../components/error";
import { fullStaffPaths } from "./routes";
import msGraph from '../../utils/ms-graph.js';

const { Group: ButtonGroup } = Button;
const { Item: ListItem } = List;

export default function Profile() {
  const { instance } = useMsal();
  const [accountInfo, setAccountInfo] = useState(null);
  const account = instance.getActiveAccount();

  if(account === null)
  {
    navigate(fullStaffPaths.login);
    return <Error>Please log in</Error>;
  }

  //todo: depends on pages to register and view clients (non-existent in this branch)
  const fullClientPaths = {
    register: '/client/register',
  };
  msGraph.createClient(instance, account);

  msGraph.getUserInfo().then((user) => {
    setAccountInfo(user);
  });

  return (
    <>
      <h1>{account.name}</h1>
      <h2>{account.username} - {accountInfo?.jobTitle || "No Job Title"}</h2>
      <List size="large" itemLayout="vertical">
        <ListItem about="add a new client to ANSS database"><Link to={fullClientPaths.register}>Register New Client</Link></ListItem>
        <ListItem><Link to={fullClientPaths.register}>View Clients</Link></ListItem >
        <ListItem><Link to={fullStaffPaths.logout}><>Logout</></Link></ListItem>
      </List >

      <ButtonGroup style={{ margin: 'auto', width: '100%' }}>
      </ButtonGroup>
    </>
  );
};
