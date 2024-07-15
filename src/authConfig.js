/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { LogLevel } from '@azure/msal-browser'

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 * @type {import('@azure/msal-browser').Configuration}
 */
export const msalConfig = {
  auth: {
    clientId: process.env.GATSBY_MSAL_CLIENT_ID,
    authority: `https://login.microsoftonline.com/${process.env.GATSBY_MSAL_TENANT_ID}`,
    redirectUri: process.env.GATSBY_MSAL_REDIRECT_URI,
    postLogoutRedirectUri: process.env.GATSBY_MSAL_POST_LOGOUT_REDIRECT_URI,
  },
  cache: {
    cacheLocation: 'sessionStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    secureCookies: true,
  },
  system: {
    loggerOptions: {
      logLevel: LogLevel.Verbose,
      // personally identifiable information (PII)
      piiLoggingEnabled: true,
      loggerCallback: (level, message, containsPii) => {
        switch(level) {
          case LogLevel.Error:
            console.error(message)
            return
          case LogLevel.Info:
            console.info(message)
            return
          case LogLevel.Verbose:
            console.debug(message)
            return
          case LogLevel.Warning:
            console.warn(message)
            return
          case LogLevel.Trace:
            console.trace(message)
            return
          default:
            console.log('UNKNOWN LOG LEVEL: %s', message)
            return
        }
      },
    },
  },
}

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
  scopes: ['User.Read'],
}

/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me', //e.g. https://graph.microsoft.com/v1.0/me
}


/**
 * An optional silentRequest object can be used to achieve silent SSO
 * between applications by providing a "login_hint" property.
 */
// export const silentRequest = {
//     scopes: ["openid", "profile"],
//     loginHint: "example@domain.net"
// };
