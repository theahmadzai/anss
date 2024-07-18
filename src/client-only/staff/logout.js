import { InteractionStatus } from "@azure/msal-browser";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { Spin } from "antd";
import { navigate } from "gatsby";
import React, { useCallback, useEffect } from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { isBrowser } from "../../utils/check-environment";
import { fullStaffPaths } from "./routes";


export default function Logout() {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();


  async function logout() {
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
  }

  logout();


  return (
    <Spin tip="Logging out..." />
  );
}

export const Head = () => <SEO title="logout" pathname={fullStaffPaths.logout} />;
