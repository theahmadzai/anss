import { useIsAuthenticated, useMsal } from "@azure/msal-react";
// used under the hood with gatsby: https://www.gatsbyjs.com/docs/how-to/routing/client-only-routes-and-user-authentication/#handling-client-only-routes-with-gatsby
import { Router, Redirect } from "@reach/router";
import { navigate } from "gatsby";
import React, { useEffect } from "react";
import { BASE_STAFF_PATH, fullStaffPaths } from "../../client-only/staff/routes";
import Login from "../../client-only/staff/login";
import Logout from "../../client-only/staff/logout";
import Profile from "../../client-only/staff/profile";
import Layout from "../../components/layout";
import { isBrowser } from "../../utils/check-environment";
import NotFoundPage from "../../pages/404";


export default function App() {
  console.log(fullStaffPaths);

  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  useEffect(() => {
    if(isBrowser() && !isAuthenticated && location.pathname !== fullStaffPaths.login)
      navigate(fullStaffPaths.login);
  }, []);

  return (
    <Layout>
      <Router basepath={BASE_STAFF_PATH}>
        <Profile path="/" />
        <Login path="/login" />
        <Logout path="/logout" />
        <NotFoundPage default />
      </Router>
    </Layout>
  );
}
