import React from "react";

import { KeycloakProvider } from './Keycloak';

const Context: React.FC = ({ children }) => (
  <KeycloakProvider>
    {children}
  </KeycloakProvider>
);

export default Context;
