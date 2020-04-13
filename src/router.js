import React from "react";
import {Route, Switch} from "react-router-dom";

import OsPrint from "./pages/OsPrint";
import FormTriagem from "./pages/FormTriagem";
import IndexScreening from "./pages/Screening/IndexScreening";
import FormDiagnostico from "./pages/FormDiagnostico";
import IndexDemand from "./pages/Demand";
import FormDemand from "./pages/FormDemand";
import IndexDiagnosis from "./pages/Diagnosis";
import IndexOrderPrint from "./pages/OrderPrint";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={IndexScreening} />
    <Route path="/triagens" exact component={IndexScreening} />
    <Route path="/nova-triagem" exact component={FormTriagem} />
    <Route path="/diagnosticos" exact component={IndexDiagnosis} />
    <Route path="/novo-diagnostico" exact component={FormDiagnostico} />
    <Route path="/demandas" exact component={IndexDemand} />
    <Route path="/ordem-compra" exact component={IndexOrderPrint} />
    <Route path="/nova-demandas" exact component={FormDemand} />
    <Route path="/osprint" component={OsPrint} />
  </Switch>
);

export default Routes;
