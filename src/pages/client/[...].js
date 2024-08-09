import { useIsAuthenticated, useMsalAuthentication } from "@azure/msal-react";
// used under the hood with gatsby: https://www.gatsbyjs.com/docs/how-to/routing/client-only-routes-and-user-authentication/#handling-client-only-routes-with-gatsby
import { InteractionType } from "@azure/msal-browser";
import { Router } from "@reach/router";
import { Spin } from "antd";
import React from "react";
import RegisterClient from "../../client-only/client/register.js";
import Layout from "../../components/layout";
import NotFoundPage from "../../pages/404";
import { loginRequest } from "../../utils/auth-config.js";
import { CLIENT_BASE_PATH, relativeRoutes } from "../../utils/routes.js";
import ViewClients from "../../client-only/client/view.js";

export default function StaffSection() {
    useMsalAuthentication(InteractionType.Redirect, loginRequest);
    const isAuthenticated = useIsAuthenticated();

    return (
        <Layout>
            <Spin spinning={!isAuthenticated}>
                <Router basepath={CLIENT_BASE_PATH}>
                    <RegisterClient path={relativeRoutes.client.register} />
                    <ViewClients path={relativeRoutes.client.view} />
                    <NotFoundPage default />
                </Router>
            </Spin>
        </Layout>
    );
}
