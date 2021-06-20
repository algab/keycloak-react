import Keycloak from 'keycloak-js';

export const keycloak = Keycloak({
  realm: 'react',
  url: 'http://localhost:8080/auth',
  clientId: 'react-keycloak'
});

export const keycloakProvider: Keycloak.KeycloakInitOptions = {
  onLoad: 'login-required'
};
