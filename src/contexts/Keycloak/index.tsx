import React, { createContext, useEffect, useState } from "react";
import { KeycloakProfile } from "keycloak-js";

import Spinner from "../../components/Spinner";
import { keycloak, keycloakProvider } from "../../utils/keycloak";

interface KeycloakCTX {
  profile: KeycloakProfile | undefined;
  token: string;
}

const KeycloakContext = createContext<KeycloakCTX>({} as KeycloakCTX);

export const KeycloakProvider: React.FC = ({ children }) => {
  const [profile, setProfile] = useState<KeycloakProfile>();
  const [token, setToken] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function init() {
      setTimeout(async () => {
        await keycloak.init(keycloakProvider);
        if (keycloak.authenticated) {
          const profile = await keycloak.loadUserProfile();
          setProfile(profile as KeycloakProfile);
          setToken(keycloak.token as string);
        }
        setLoading(false);
      }, 1000);
    }
    init();
  }, []);

  keycloak.onAuthSuccess = async () => {
    const profile = await keycloak.loadUserProfile();
    setProfile(profile as KeycloakProfile);
    setToken(keycloak.token as string);
  };

  keycloak.onTokenExpired = () => {
    keycloak
      .updateToken(Number(process.env.REACT_APP_TOKEN_REFRESH))
      .then(() => {
        setToken(keycloak.token as string);
      });
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <KeycloakContext.Provider value={{ profile, token }}>
      {children}
    </KeycloakContext.Provider>
  );
};

export default KeycloakContext;
