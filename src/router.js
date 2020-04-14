import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import Profile from "./pages/Profile";
import OsPrint from "./pages/OsPrint";
import FormTriagem from "./pages/FormTriagem";
import IndexScreening from "./pages/Screening/IndexScreening";
import IndexFormDiagnosis from "./pages/FormDiagnostico";
import IndexDemand from './pages/Demand';
import FormDemand from "./pages/FormDemand";
import {isAutenticated} from "./services/auth";
import IndexDiagnosis from "./pages/Diagnosis";
import IndexOrderPrint from "./pages/OrderPrint";

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={(props) =>
      isAutenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{pathname: "/", state: {from: props.location}}} />
      )
    }
  />
);

const Routes = () => (
  <Switch>
    <Route path="/" exact component={IndexScreening} />
    <Route path="/triagens" exact component={IndexScreening} />
    <Route path="/nova-triagem" exact component={FormTriagem} />
    <Route path="/diagnosticos" exact component={IndexDiagnosis} />
    <Route path="/novo-diagnostico" exact component={IndexFormDiagnosis} />
    <Route path="/demandas" exact component={IndexDemand} />
    <Route path="/ordem-compra" exact component={IndexOrderPrint} />
    <Route path="/nova-demandas" exact component={FormDemand} />
    <Route path="/osprint" component={OsPrint} />
    <PrivateRoute path="/profile" component={Profile} />
  </Switch>
);

export default Routes;
