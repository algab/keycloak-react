import React from 'react';
import Keycloak from 'keycloak-js';
import { ReactKeycloakProvider } from '@react-keycloak/web';

import './App.css';

import logo from './logo.svg';

const keycloak = Keycloak({
  realm: 'react',
  url: 'http://localhost:8080/auth',
  clientId: 'react-keycloak'
})

function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak} initOptions={{ onLoad: 'login-required' }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ReactKeycloakProvider>
  );
}

export default App;
