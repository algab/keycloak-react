import { useContext } from 'react';

import KeycloakContext from '../contexts/Keycloak';
import { keycloak } from '../utils/keycloak';

export function useKeycloak() {
  const { profile, token } = useContext(KeycloakContext);  

  const logout = async () => {
    await keycloak.logout();
  };

  return { profile, token, logout };
};
