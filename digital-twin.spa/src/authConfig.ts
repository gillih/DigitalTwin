export const msalConfig = {
    auth: {
        clientId: "57312b67-7eef-47dc-955c-f69e09f0c233",
        authority: "https://gillisskunkworks.b2clogin.com/gillisskunkworks.onmicrosoft.com/B2C_1_SignInSignUp", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
        redirectUri: "https://localhost:3000",
        knownAuthorities: ["https://gillisskunkworks.b2clogin.com"]
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
    scopes: ["openid",
        "offline_access", "https://gillisskunkworks.onmicrosoft.com/api/weather.read"]
    //,extraScopesToConsent: ["https://gillisskunkworks.onmicrosoft.com/api/weather.read"]
};

// export const loginRequest = {
//     scopes: []};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};