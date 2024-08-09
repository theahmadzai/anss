import { LogLevel } from '@azure/msal-browser';
import routes from './routes';


/** @type {import('@azure/msal-browser').ILoggerCallback} */
function msalLogger(level, message, containsPii) {
  switch(level)
  {
    case LogLevel.Error:
      console.error(message);
      return;
    case LogLevel.Info:
      console.info(message);
      return;
    case LogLevel.Verbose:
      console.debug(message);
      return;
    case LogLevel.Warning:
      console.warn(message);
      return;
    case LogLevel.Trace:
      console.trace(message);
      return;
    default:
      console.log('UNKNOWN LOG LEVEL: %s', message);
      return;
  }
};

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 * @type {import('@azure/msal-browser').Configuration}
 */
export const msalPublicClientConfig = {
  auth: {
    clientId: '77d79114-e5f1-44ea-a554-3373f96a8609',
    authority: `https://login.microsoftonline.com/${process.env.GATSBY_MSAL_TENANT_ID}`,
    redirectUri: process.env.GATSBY_MSAL_REDIRECT_URI,
    postLogoutRedirectUri: process.env.GATSBY_MSAL_POST_LOGOUT_REDIRECT_URI,
  },
  cache: {
    cacheLocation: 'localStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    secureCookies: true,
  },
  system: {
    allowNativeBroker: true,
    loggerOptions: {
      logLevel: process.env.GATSBY_MSAL_LOG_LEVEL || undefined,
      // personally identifiable information (PII)
      piiLoggingEnabled: !!process.env.GATSBY_MSAL_PII_LOGGING_ENABLED || false,
      loggerCallback: msalLogger,
    },
  },
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 * @type {import('@azure/msal-browser').RedirectRequest}
 */
export const loginRequest = {
  scopes: [
    'User.Read',
    'openid',
    'profile',
    'email',
    'api://77d79114-e5f1-44ea-a554-3373f96a8609/Fauna.Auth.Read',
    'api://77d79114-e5f1-44ea-a554-3373f96a8609/Fauna.Auth.Write'
  ],
  redirectUri: `${process.env.GATSBY_MSAL_REDIRECT_URI}${routes.staff.login}`,
};

/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me', //e.g. https://graph.microsoft.com/v1.0/me
};


/**
 * An optional silentRequest object can be used to achieve silent SSO
 * between applications by providing a "login_hint" property.
 */
// export const silentRequest = {
//     scopes: ["openid", "profile"],
//     loginHint: "example@domain.net"
// };
