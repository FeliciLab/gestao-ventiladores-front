import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { randomIndex } from '../../utils';
import IndexServiceOrder from '../../pages/SerrviceOrder';

export const hasRoutes = (routes) => {
  if (routes && routes.length > 0) {
    return true;
  }
  return false;
};

const Routes = ({ routes }) => (
  <BrowserRouter>
    <Switch>
      {hasRoutes(routes) ? routes.map((route) => (
        <Route key={randomIndex()} path={route.path} exact component={route.component} />
      )) : <Route key={randomIndex()} path="/" exact component={IndexServiceOrder} />}
    </Switch>
  </BrowserRouter>
);

Routes.propTypes = {
  routes: PropTypes.instanceOf(Array).isRequired,
};

export default Routes;
