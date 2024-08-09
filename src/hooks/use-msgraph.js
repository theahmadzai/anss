// TODO: convert to react hook
import { Client, } from "@microsoft/microsoft-graph-client";
import { } from "@microsoft/microsoft-graph-client/";
import { BrowserAuthError, InteractionType } from "@azure/msal-browser";
import { useEffect, useState } from "react";



// // #region user info

/**
 * @param {import("@azure/msal-browser").AccountInfo} account - The account to be used for authentication.
 */
export function useMsGraphUserInfo(accessToken) {
    const [user, setUser] = useState(undefined);
    useEffect(() => {
        fetch("https://graph.microsoft.com/v1.0/me", { headers: { Authorization: `Bearer ${accessToken}` } }).then(response => response.json()).then(setUser);
    }, [accessToken]);
    return user;
}

// /**
//  * A function to retrieve the user's info.
//  * @async
//  * @return {Promise<userInfo>} The user's info.
//  * @see https://docs.microsoft.com/en-us/graph/api/user-get?view=graph-rest-1.0
//  * @see https://docs.microsoft.com/en-us/graph/api/user-list?view=graph-rest-1.0
//  */
// async function getUserInfo() {
//     const [user, setUser] = useState(undefined);
//     useEffect(() => { client.api('/me').get(); }, []);
//     return user;
// }

// /**
//  * A function to retrieve the user's photo (blob).
//  * @async
//  * @param {boolean} metaData - return the meta data of the photo
//  * @return {Promise<Blob | photoMetaData>} The user's photo in blob format.
//  */
// async function getPhoto(metaData = false) {
//     const photo = await client
//         .api(`/me/photo/${metaData ? '$value' : null}`)
//         .responseType('blob')
//         .get();
//     return photo;
// }

// // #endregion




// // #region typedef helpers

// /** @typedef { {"@odata.context": string, "@odata.mediaContentType": string "@odata.mediaEtag": string "@microsoft.graph.tips": string id: string height: number width: number}} photoMetaData */
// /** @typedef { { "@odata.context": string businessPhones: Array<any>, displayName: string givenName: string jobTitle: string mail: string mobilePhone: any officeLocation: any preferredLanguage: any surname: string userPrincipalName: string id: string } } userInfo */
// // #endregion

// export default {
//     createClient,
//     getUserInfo,
//     getPhoto
// };