import { BrowserAuthError, BrowserAuthErrorCodes, InteractionStatus, InteractionType } from "@azure/msal-browser";
import { useIsAuthenticated, useMsal, useMsalAuthentication } from "@azure/msal-react";
import { navigate } from "gatsby";
import React, { useCallback, useEffect } from "react";
import { loginRequest } from "../../utils/auth-config";
import Error from "../../components/error";
import SEO from "../../components/seo";
import routes from "../../utils/routes";


export default function Login() {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const auth = useMsalAuthentication();

  const setActiveAccount = useCallback(async function() {
    const accounts = instance.getAllAccounts();

    // set the active account
    if(accounts.length === 0)
      return <Error />;
    else if(accounts.length === 1)
      instance.setActiveAccount(accounts[0]);
    else
    {
      console.log("multiple accounts");
      console.log(accounts);
      //todo: display popup to select available account
      // TODO: set active account to chosen account
    }

    return await navigate(routes.staff.profile);
  }, [instance]);

  const login = useCallback(async () => {
    if(!isAuthenticated)
    {
      try
      {
        if(inProgress === InteractionStatus.None)
          await auth.login(InteractionType.Redirect, loginRequest);
        else //handle in progress interaction
          await instance.handleRedirectPromise();
        console.log(auth);
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
            case BrowserAuthErrorCodes.monitorWindowTimeout:
              // refresh the page
              window.location.reload();
              break;
            default:
              console.error(error);
              break;
          }
        }
      }
    }
    return setActiveAccount();
  }, [isAuthenticated, setActiveAccount, inProgress, auth, instance]);

  useEffect(() => { login(); }, [login]);
}

export const Head = () => <SEO title="login" pathname={routes.staff.login} />;
