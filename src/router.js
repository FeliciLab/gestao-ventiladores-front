import React from "react";
import {Route, Switch} from "react-router-dom";

import FormTriagem from "./pages/FormTriagem";
import IndexFormDiagnosis from "./pages/FormDiagnostico";
// import FormDemand from "./pages/FormDemand";
import OsPrint from "./pages/OsPrint";
import IndexScreening from "./pages/Screening/IndexScreening";
import IndexDemand from "./pages/Demand";
import IndexDiagnosis from "./pages/Diagnosis";
import IndexOrderPrint from "./pages/OrderPrint";
import FormEntrega from "./pages/FormEntrega";
import Entrega from "./pages/Entrega";
import Calibragem from "./pages/FormCalibragem";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={IndexScreening} />
    <Route path="/triagens" exact component={IndexScreening} />
    <Route path="/nova-triagem" exact component={FormTriagem} />
    <Route path="/novo-diagnostico" exact component={IndexFormDiagnosis} />
    {/* <Route path="/nova-demandas" exact component={FormDemand} /> */}
    <Route path="/diagnosticos" exact component={IndexDiagnosis} />
    <Route path="/demandas" exact component={IndexDemand} />
    <Route path="/ordem-compra" exact component={IndexOrderPrint} />
    <Route path="/osprint" component={OsPrint} />
    <Route path="/entrega" component={Entrega} />
    <Route path="/nova-entrega" component={FormEntrega} />
    <Route path="/calibragem" component={Calibragem} />
  </Switch>
);

export default Routes;
