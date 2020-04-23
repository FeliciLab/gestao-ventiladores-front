import React from "react";
import {Route, Switch} from "react-router-dom";

import FormTriagem from "./pages/Screening/ScreeningForm";
import IndexFormDiagnosis from "./pages/Diagnosis/DiagnosisForm";
import OsPrint from "./MakeFile/OsPrint";
import Screening from "./pages/Screening/index";
import IndexDemand from "./pages/Demand";
import Diagnosis from "./pages/Diagnosis";
import IndexOrderPrint from "./MakeFile/OrderPrint";
import FormEntrega from "./pages/FormEntrega";
import Entrega from "./pages/Entrega";
import Calibragem from "./pages/FormCalibragem";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Screening} />
    <Route path="/triagens" exact component={Screening} />
    <Route path="/nova-triagem" exact component={FormTriagem} />
    <Route path="/novo-diagnostico" exact component={IndexFormDiagnosis} />
    <Route path="/diagnosticos" exact component={Diagnosis} />
    <Route path="/demandas" exact component={IndexDemand} />
    <Route path="/ordem-compra" exact component={IndexOrderPrint} />
    <Route path="/osprint" component={OsPrint} />
    <Route path="/entrega" component={Entrega} />
    <Route path="/nova-entrega" component={FormEntrega} />
    <Route path="/calibragem" component={Calibragem} />
  </Switch>
);

export default Routes;
