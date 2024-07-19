import { BrowserAuthError, BrowserAuthErrorCodes, InteractionStatus } from "@azure/msal-browser";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { navigate } from "gatsby";
import React, { useCallback, useEffect } from "react";
import { loginRequest } from "../../utils/auth-config";
import Error from "../../components/error";
import SEO from "../../components/seo";
import { fullStaffPaths } from "./routes";


export default function Login() {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const login = useCallback(async () => {
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
        if(error instanceof BrowserAuthError)
        {
          switch(error.errorCode)
          {
            case BrowserAuthErrorCodes.uninitializedPublicClientApplication:
              await instance.initialize();
              break;
            case BrowserAuthErrorCodes.interactionInProgress:
              await instance.handleRedirectPromise();
              break;
            default:
              console.error(error);
              break;
          }
        }
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
  },
    [isAuthenticated, instance, inProgress]);

  useEffect(() => {
    login();
  }, [login]);
}

export const Head = () => <SEO title="login" pathname={fullStaffPaths.login} />;
