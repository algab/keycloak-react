import React, { useContext } from 'react';

import KeycloakContext from '../../contexts/Keycloak';

import logo from '../../assets/logo.svg';

import './styles.css';

const Home: React.FC = () => {
  const { profile, logout } = useContext(KeycloakContext);

  const logoutKeycloak = async () => {
    await logout();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {profile?.firstName ? (
          <p>
            Olá {profile?.firstName?.toUpperCase()}, você está logado !
          </p>
        ) : (
          <p>
            Você está logado !
          </p>
        )}
        <button className="App-btn" onClick={logoutKeycloak}>
          Sair
        </button>
      </header>
    </div>
  );
};

export default Home;
