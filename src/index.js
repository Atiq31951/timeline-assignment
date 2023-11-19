import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// todo: could not redicrect the Auth0 authentication. it was getting Oops. For the time constrain.

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-p84ln005gkxb6t4x.us.auth0.com"
      clientId="RH1FLBwJlBsEgcT6XN8xx24ML0F3i3tO"
      clientSecrete="rO3TGeOskRrwFWvWsfRKhcRdv7mSycI7c35qfrJmmZAuxthxki40SD9awzsrRqvG"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
