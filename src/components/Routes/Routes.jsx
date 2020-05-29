import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { randomIndex } from '../../utils';

export const hasRoutes = (routes) => {
  if (routes && routes.length > 0) {
    return true;
  }
  return false;
};

const Routes = ({ routes, children }) => (
  <BrowserRouter>
    {children}
    <Switch>
      {hasRoutes(routes)
        ? routes.map((route) => (
            <Route
              key={randomIndex()}
              path={route.path}
              exact
              component={route.component}
            />
          ))
        : ''}
    </Switch>
  </BrowserRouter>
);

Routes.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  routes: PropTypes.instanceOf(Array).isRequired,
};

export default Routes;
