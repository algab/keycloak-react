import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Spinner from './components/Spinner';

const Home = lazy(() => import('./pages/Home'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
