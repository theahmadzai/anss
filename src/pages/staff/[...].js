import { useIsAuthenticated, useMsal } from "@azure/msal-react";
// used under the hood with gatsby: https://www.gatsbyjs.com/docs/how-to/routing/client-only-routes-and-user-authentication/#handling-client-only-routes-with-gatsby
import { Router } from "@reach/router";
import { navigate } from "gatsby";
import React, { useEffect, useCallback } from "react";
import routes, { relativeRoutes, STAFF_BASE_PATH } from "../../utils/routes.js";
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

    if(!isAuthenticated && location.pathname !== routes.staff.login)
      navigate(routes.staff.login);
  }, [isAuthenticated, initialized, instance]);

  useEffect(() => {
    initializeMsal();
  }, [initializeMsal]);


  return (
    <Layout>
      <Spin spinning={!initialized}>
        <Router basepath={STAFF_BASE_PATH}>
          <Profile path={relativeRoutes.staff.profile} />
          <Login path={relativeRoutes.staff.login} />
          <Logout path={relativeRoutes.staff.logout} />
          <NotFoundPage default />
        </Router>
      </Spin>
    </Layout>
  );
}
