import { InteractionRequiredAuthError, InteractionType } from "@azure/msal-browser";
import { useIsAuthenticated, useMsal, useMsalAuthentication } from "@azure/msal-react";
import { useEffect, useState } from "react";

/**
 *
 * @param {import("@azure/msal-browser").SilentRequest} tokenRequest
 * @returns
 */
export function useMsalAccessToken(tokenRequest) {
    useMsalAuthentication(InteractionType.Popup, tokenRequest);
    const { instance } = useMsal();
    const isAuthenticated = useIsAuthenticated();
    const [accessToken, setAccessToken] = useState(null);


    useEffect(() => {
        acquireAccessToken(instance, tokenRequest).then(token => setAccessToken(token));
    }, [isAuthenticated, instance, tokenRequest]);

    return accessToken;
};


/**
 *
 * @param {import("@azure/msal-browser").IPublicClientApplication} instance
 * @param {import("@azure/msal-browser").SilentRequest} tokenRequest
 * @returns {Promise<string|null>}
 */
async function acquireAccessToken(instance, tokenRequest) {
    try
    {
        return instance.getActiveAccount() ?
            (await instance.acquireTokenSilent(tokenRequest)).accessToken :
            null;
    }
    catch(error)
    {
        console.warn(error);
    }
}