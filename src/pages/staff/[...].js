import { useMsalAuthentication } from "@azure/msal-react";
// used under the hood with gatsby: https://www.gatsbyjs.com/docs/how-to/routing/client-only-routes-and-user-authentication/#handling-client-only-routes-with-gatsby
import { InteractionType } from "@azure/msal-browser";
import { Router } from "@reach/router";
import { Spin } from "antd";
import React from "react";
import Login from "../../client-only/staff/login";
import Logout from "../../client-only/staff/logout";
import Profile from "../../client-only/staff/profile";
import Layout from "../../components/layout";
import { loginRequest } from "../../utils/auth-config.js";
import { relativeRoutes, STAFF_BASE_PATH } from "../../utils/routes.js";

export default function StaffSection() {
  const auth = useMsalAuthentication(InteractionType.Redirect, loginRequest);


  return (
    <Layout>
      <Spin spinning={!auth.result}>
        <Router basepath={STAFF_BASE_PATH}>
          <Profile path={relativeRoutes.staff.profile} />
          <Login path={relativeRoutes.staff.login} />
          <Logout path={relativeRoutes.staff.logout} />
        </Router>
      </Spin>
    </Layout>
  );
}
