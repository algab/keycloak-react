import React from 'react';
import ReactDOM from 'react-dom';
import { ReactKeycloakProvider } from '@react-keycloak/web';

import Routes from './routes';
import reportWebVitals from './reportWebVitals';
import Spinner from './components/Spinner';
import { keycloak, keycloakProvider } from './utils/keycloak';

import './index.css';

const isLoading = () => {
  if (keycloak.authenticated) {
    return false;
  } else {
    return true;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ReactKeycloakProvider authClient={keycloak} initOptions={keycloakProvider} LoadingComponent={<Spinner />} isLoadingCheck={isLoading}>
      <Routes />
    </ReactKeycloakProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
