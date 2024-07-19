import { useIsAuthenticated, useMsal } from "@azure/msal-react";
// used under the hood with gatsby: https://www.gatsbyjs.com/docs/how-to/routing/client-only-routes-and-user-authentication/#handling-client-only-routes-with-gatsby
import { Router } from "@reach/router";
import { navigate } from "gatsby";
import React, { useEffect, useCallback } from "react";
import { BASE_STAFF_PATH, fullStaffPaths } from "../../client-only/staff/routes";
import Login from "../../client-only/staff/login";
import Logout from "../../client-only/staff/logout";
import Profile from "../../client-only/staff/profile";
import Layout from "../../components/layout";
import { isBrowser } from "../../utils/check-environment";
import NotFoundPage from "../../pages/404";
import { Spin } from "antd";
import { BrowserAuthError, BrowserAuthErrorCodes } from "@azure/msal-browser";

export default function StaffSection() {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const [initialized, setInitialized] = React.useState(undefined);

  const initializeMsal = useCallback(async () => {
    if(!isBrowser())
      return;

    if(!initialized)
    {
      try
      {
        await instance.initialize();
        setInitialized(true);
      }
      catch(error)
      {
        if(error instanceof BrowserAuthError && error.errorCode === BrowserAuthErrorCodes.interactionInProgress)
          await instance.handleRedirectPromise();
        console.error(error);
        setInitialized(false);
      }
    }

    if(!isAuthenticated && location.pathname !== fullStaffPaths.login)
      navigate(fullStaffPaths.login);
  }, [isAuthenticated, initialized, instance]);

  useEffect(() => {
    initializeMsal();
  }, [initializeMsal]);


  return (
    <Layout>
      {
        !initialized ?
          <Spin /> :
          <Router basepath={BASE_STAFF_PATH}>
            <Profile path="/" />
            <Login path="/login" />
            <Logout path="/logout" />
            <NotFoundPage default />
          </Router>
      }
    </Layout>
  );
}
