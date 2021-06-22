import React, { createContext, useEffect, useState } from 'react';
import { KeycloakProfile } from 'keycloak-js';

import Spinner from '../../components/Spinner';
import { keycloak, keycloakProvider } from '../../utils/keycloak';

interface KeycloakCTX {
  profile: KeycloakProfile | undefined
  logout(): void 
}

const KeycloakContext = createContext<KeycloakCTX>({} as KeycloakCTX);

export const KeycloakProvider: React.FC = (props) => {
  const [profile, setProfile] = useState<KeycloakProfile>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function init() { 
      setTimeout(async () => {
        await keycloak.init(keycloakProvider);
        if (keycloak.authenticated) {
          const profile = await keycloak.loadUserProfile();
          setProfile(profile as KeycloakProfile);
        }
        setLoading(false);
      }, 1500);
    }
    init();
  }, []);

  keycloak.onAuthSuccess = async () => {
    const profile = await keycloak.loadUserProfile();
    setProfile(profile as KeycloakProfile);
  };

  const logout = async () => {
    await keycloak.logout();
  };

  if (loading) {
    return <Spinner />
  }
  return (
    <KeycloakContext.Provider value={{ profile, logout }}>
      {props.children}
    </KeycloakContext.Provider>
  );
};

export default KeycloakContext;
