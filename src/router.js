import React from "react";
import {Route, Switch} from "react-router-dom";

import IndexServiceOrder from "./pages/SerrviceOrder";
import FormTriagem from "./pages/Screening/ScreeningForm";
import IndexFormDiagnosis from "./pages/Diagnosis/DiagnosisForm";
import OsPrint from "./MakeFile/OsPrint";
import Screening from "./pages/Screening/index";
import IndexDemand from "./pages/Demand";
import Diagnosis from "./pages/Diagnosis";
import IndexOrderPrint from "./MakeFile/OrderPrint";
import Delivery from "./pages/Delivery";
import Calibration from './pages/Calibration';


const Routes = () => (
  <Switch>
    <Route path="/" exact component={IndexServiceOrder} />
    <Route path="/ordens-servicos" exact component={IndexServiceOrder} />
    <Route path="/triagens" exact component={Screening} />
    <Route path="/nova-triagem" exact component={FormTriagem} />
    <Route path="/editar-triagem" exact component={FormTriagem} />
    <Route path="/novo-diagnostico" exact component={IndexFormDiagnosis} />
    <Route path="/diagnosticos" exact component={Diagnosis} />
    <Route path="/demandas" exact component={IndexDemand} />
    <Route path="/ordem-compra" exact component={IndexOrderPrint} />
    <Route path="/osprint" component={OsPrint} />
    <Route path="/entregas" component={Delivery} />
    <Route path="/calibragem" component={Calibration} />
  </Switch>
);

export default Routes;
