
import { Client, } from "@microsoft/microsoft-graph-client";
import { AuthCodeMSALBrowserAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/authCodeMsalBrowser";
import { InteractionType } from "@azure/msal-browser";

let client = undefined;

/**
 * ensures that the Microsoft Graph client is created
 * @param {import("@azure/msal-browser").PublicClientApplication} publicClientApplication - The public client application used for authentication.
 * @param {import("@azure/msal-browser").AccountInfo} account - The account to be used for authentication.
 * @returns {import("@microsoft/microsoft-graph-client").Client} - The Microsoft Graph client.
 */
function createClient(publicClientApplication, account) {
    if(!client)
    {
        const authProvider = new AuthCodeMSALBrowserAuthenticationProvider(publicClientApplication, {
            account,
            interactionType: InteractionType.Redirect,
            scopes: ['User.Read'],
        });

        client = Client.initWithMiddleware({ authProvider });
    }
    return client;
}

// #region user info

/**
 * A function to retrieve the user's info.
 * @async
 * @return {Promise<userInfo>} The user's info.
 * @see https://docs.microsoft.com/en-us/graph/api/user-get?view=graph-rest-1.0
 * @see https://docs.microsoft.com/en-us/graph/api/user-list?view=graph-rest-1.0
 */
async function getUserInfo() {
    const user = await client.api('/me').get();
    return user;
}

/**
 * A function to retrieve the user's photo (blob).
 * @async
 * @param {boolean} metaData - return the meta data of the photo
 * @return {Promise<Blob | photoMetaData>} The user's photo in blob format.
 */
async function getPhoto(metaData = false) {
    const photo = await client
        .api(`/me/photo/${metaData ? '$value' : null}`)
        .responseType('blob')
        .get();
    return photo;
}

// #endregion




// #region typedef helpers

/** @typedef { {"@odata.context": string, "@odata.mediaContentType": string "@odata.mediaEtag": string "@microsoft.graph.tips": string id: string height: number width: number}} photoMetaData */
/** @typedef { { "@odata.context": string businessPhones: Array<any>, displayName: string givenName: string jobTitle: string mail: string mobilePhone: any officeLocation: any preferredLanguage: any surname: string userPrincipalName: string id: string } } userInfo */
// #endregion

export default {
    createClient,
    getUserInfo,
    getPhoto
}