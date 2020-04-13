import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";

import Profile from "./pages/Profile";
import OsPrint from "./pages/OsPrint";
import FormTriagem from "./pages/FormTriagem";
import IndexScreening from "./pages/Screening/IndexScreening";
import FormDiagnostico from "./pages/FormDiagnostico";
import IndexDemand from './pages/Demand'
import FormDemand from "./pages/FormDemand";
import makeDemandFile from "../src/MakeFile/OsPrint";
import {isAutenticated} from "./services/auth";

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
    <Route path="/nova-triagem" exact component={FormTriagem} />
    <Route path="/Diagnostico" exact component={FormDiagnostico} />
    <Route path="/demandas" exact component={IndexDemand} />
    <Route path="/nova-demandas" exact component={FormDemand} />
    <Route path="/osprint" component={OsPrint} />
    <PrivateRoute path="/profile" component={Profile} />
    <Route path="/makeDemandFile" component={makeDemandFile} />
    {/* <PrivateRoute path="/Form" component={Form} /> */}
  </Switch>
);

export default Routes;
