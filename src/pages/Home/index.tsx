import React, { useState, useEffect } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { KeycloakProfile } from 'keycloak-js';

import logo from '../../assets/logo.svg';

import './styles.css';

const Home: React.FC = () => {
  const [user, setUser] = useState<KeycloakProfile>();
  const { keycloak } = useKeycloak();

  useEffect(() => {
    keycloak.loadUserProfile().then(profile => {
      setUser(profile);
    });
  }, [keycloak]);

  const logout = async () => {
    await keycloak.logout();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {user?.firstName ? (
          <p>
            Olá {user?.firstName?.toUpperCase()}, você está logado !
          </p>
        ) : (
          <p>
            Você está logado !
          </p>
        )}
        <button className="App-btn" onClick={logout}>
          Sair
        </button>
      </header>
    </div>
  );
};

export default Home;
