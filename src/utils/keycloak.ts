import Keycloak from 'keycloak-js';

export const keycloak = Keycloak({
  realm: String(process.env.REACT_APP_REALM),
  url: String(process.env.REACT_APP_HOST),
  clientId: String(process.env.REACT_APP_CLIENT_ID)
});

export const keycloakProvider: Keycloak.KeycloakInitOptions = {
  onLoad: 'login-required'
};
