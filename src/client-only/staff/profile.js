import { useMsal } from "@azure/msal-react";
import { Button } from "antd";
import { Link, navigate } from "gatsby";
import React from "react";
import Error from "../../components/error";
import { fullStaffPaths } from "./routes";

const { Group: ButtonGroup } = Button;

export default function Profile() {
  const { instance } = useMsal();
  const account = instance.getActiveAccount();

  if(account === null)
  {
    navigate(fullStaffPaths.login);
    return <Error>Please log in</Error>;
  }

  return (
    <>
      <h1>{account.name}</h1>
      <h2>{account.username}</h2>


      <ButtonGroup>
        <Link to={fullStaffPaths.logout}><Button>Logout</Button></Link>
      </ButtonGroup>
    </>
  );
}
