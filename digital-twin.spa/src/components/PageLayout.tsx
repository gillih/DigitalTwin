import React from "react";
import {AuthenticatedTemplate, UnauthenticatedTemplate, useMsal} from "@azure/msal-react";
import {SignInButton} from "./SignInButton";
import ProfileContent from "./ProfileContent"
import Weather from "./Weather";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props: any) => {
    const { instance } = useMsal();
    const { accounts } = useMsal();

    return (
        <>
            <UnauthenticatedTemplate>
                <SignInButton/>
            </UnauthenticatedTemplate>
            <AuthenticatedTemplate>          <button onClick={() => instance.logoutRedirect({ postLogoutRedirectUri: "/" })}>
                Logout
            </button>

                <ProfileContent/>
                <Weather/>


            </AuthenticatedTemplate>

        </>
    );
};