import React from "react";

import { KeycloakProvider } from './Keycloak';

const Context: React.FC = (props) => (
  <KeycloakProvider>
    {props.children}
  </KeycloakProvider>
);

export default Context;
