import { InteractionStatus } from "@azure/msal-browser";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { Spin } from "antd";
import { navigate } from "gatsby";
import React, { useCallback } from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";


export default function Logout() {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();


  const handleLogout = useCallback(async function() {
    if(inProgress === InteractionStatus.None && isAuthenticated) {
      /** @type{import("@azure/msal-browser").EndSessionRequest} */
      const logoutRequest = {
        account: instance.getActiveAccount(),
        postLogoutRedirectUri: "/",
      };
      await instance.logoutRedirect(logoutRequest);
    }

    await navigate("/");
    return null;
  }, [inProgress, instance, isAuthenticated]);

  handleLogout();


  return (
    <Layout>
      <Spin tip="Logging out..." />
    </Layout>
  );
}

export const Head = () => <SEO title="logout" pathname="/member/logout" />;
