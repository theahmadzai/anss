import { InteractionStatus } from "@azure/msal-browser";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { navigate } from "gatsby";
import React from "react";
import SEO from "../../components/seo";
import routes from "../../utils/routes";


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
}

export const Head = () => <SEO title="logout" pathname={routes.staff.logout} />;
