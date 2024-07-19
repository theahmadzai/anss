import { BrowserAuthError, InteractionStatus } from "@azure/msal-browser";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { navigate } from "gatsby";
import React from "react";
import { loginRequest } from "../../utils/auth-config";
import Error from "../../components/error";
import SEO from "../../components/seo";
import { fullStaffPaths } from "./routes";


export default function Login() {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const [initialized, setInitialized] = React.useState(undefined);

  async function login() {
    if(!isAuthenticated)
    {
      try
      {
        if(inProgress === InteractionStatus.None)
          await instance.loginRedirect(loginRequest);
        else //handle in progress interaction
          await instance.handleRedirectPromise();
      }
      catch(error)
      {
        if(error instanceof BrowserAuthError && initialized !== true)
        {
          await instance.initialize();
          setInitialized(true);
        }

        else
          console.error(error);
        return <Error />;
      }
    }

    const accounts = instance.getAllAccounts();

    // set the active account
    if(accounts.length === 0)
      return <Error />;
    else if(accounts.length === 1)
      instance.setActiveAccount(accounts[0]);

    else
    {
      //todo: display popup to select available account
      console.log("multiple accounts");
      console.log(accounts);
      return;
    }

    await navigate(fullStaffPaths.profile);
    return null;
  }

  login();
}

export const Head = () => <SEO title="login" pathname={fullStaffPaths.login} />;
