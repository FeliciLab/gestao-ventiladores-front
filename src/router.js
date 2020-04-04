import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
// import NewIncident from "./pages/NewIncident";
import Form from "./pages/Form/Checkout";
import {isAutenticated} from "./services/auth";

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      isAutenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{pathname: "/", state: {from: props.location}}} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Logon} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/Form/new" component={Form} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
