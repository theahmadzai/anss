import { useMsal } from "@azure/msal-react";
import { Button } from "antd";
import { Link, navigate } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import Error from "../../components/error";

const { Group: ButtonGroup } = Button;

export default function Index() {
  const { instance } = useMsal();
  const account = instance.getActiveAccount();

  if(account === null) {
    navigate("/member/login");
    return <Error>Please log in</Error>;
  }


  return (
    <Layout>
      <h1>{account.name}</h1>
      <h2>{account.username}</h2>


      <ButtonGroup>
        <Link to="/member/logout"><Button>Logout</Button></Link>
      </ButtonGroup>
    </Layout>
  );
}
