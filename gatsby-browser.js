import React from 'react';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import './src/styles/global.less';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalPublicClientConfig } from './src/utils/auth-config';

export const wrapRootElement = ({ element }) => {
  const msalInstance = new PublicClientApplication(msalPublicClientConfig);

  return (
    <MsalProvider instance={msalInstance}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#27458D',
            fontSize: 16,
            fontFamily: 'Open Sans',
            borderRadius: 0,
          },
        }}>
        {element}
      </ConfigProvider>
    </MsalProvider>
  );
};
