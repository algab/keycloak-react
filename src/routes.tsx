import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ReactKeycloakProvider } from '@react-keycloak/web';

import Loading from './components/Loading';
import { keycloak, keycloakProvider } from './utils/keycloak';

const Home = lazy(() => import('./pages/Home'));

const Routes: React.FC = () => {
  return (
    <ReactKeycloakProvider authClient={keycloak} initOptions={keycloakProvider}>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </ReactKeycloakProvider>
  );
};

export default Routes;
