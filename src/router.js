import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";

import Profile from "./pages/Profile";
import ListaOrdemServicos from "./pages/ListaOrdemServicos";
import OsPrint from "./pages/OsPrint";
import FormTriagem from "./pages/FormTriagem";
import IndexScreening from "./pages/Screening/IndexScreening";
import FormDiagnostico from "./pages/FormDiagnostico";
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
    <Route path="/triagem/new" exact component={FormTriagem} />
    <Route path="/Diagnostico" exact component={FormDiagnostico} />
    <Route path="/Demand" exact component={FormDemand} />
    <Route path="/osprinter" component={ListaOrdemServicos} />
    <Route path="/osprint" component={OsPrint} />
    <PrivateRoute path="/profile" component={Profile} />
    <Route path="/makeDemandFile" component={makeDemandFile} />
    {/* <PrivateRoute path="/Form" component={Form} /> */}
  </Switch>
);

export default Routes;
