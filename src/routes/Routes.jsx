import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { randomIndex } from '../utils';

const RequireRotes = () => <h1>Routes component require rotes as props</h1>;

export const hasRoutes = (routes) => {
  if (routes && routes.length > 0) {
    return true;
  }
  return false;
};

const getRoutes = (routes) => {
  if (hasRoutes(routes)) {
    return routes.map((route) => (
      <Route
        key={randomIndex()}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ));
  }
  return <Route key={randomIndex()} path="/" exact component={RequireRotes} />;
};

const Routes = ({ routes }) => (
  <BrowserRouter>
    <Switch>{getRoutes(routes)}</Switch>
  </BrowserRouter>
);

Routes.propTypes = {
  routes: PropTypes.instanceOf(Array).isRequired,
};

export default Routes;
