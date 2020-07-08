import React, { useContext } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import { randomIndex } from '../utils';
import {
  PRIVATE_ROUTES_CONFIG,
  PUBLIC_ROUTES_CONFIG,
} from './routesConfig';
import AuthContext from '../contexts/AuthContext';

export const hasRoutes = (routes) => {
  if (routes && routes.length > 0) {
    return true;
  }
  return false;
};

const Routes = () => {
  const { loginStatus } = useContext(AuthContext);
  const routes = loginStatus ? PRIVATE_ROUTES_CONFIG : PUBLIC_ROUTES_CONFIG;
  if (!hasRoutes(routes)) {
    throw new Error('Routes component require routes as props');
  }
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => (
          <Route
            key={randomIndex()}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
