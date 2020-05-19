import React from 'react';
import { Route, Switch } from 'react-router-dom';

import IndexServiceOrder from './pages/SerrviceOrder';
import FormTriagem from './pages/Screening/ScreeningForm';
import IndexFormDiagnosis from './pages/Diagnosis/DiagnosisForm';
import Screening from './pages/Screening';
import IndexDemand from './pages/Demand';
import Diagnosis from './pages/Diagnosis';
import Delivery from './pages/Delivery';
import Calibration from './pages/Calibration';
import OsPrint from './MakeFile/OsPrint';
import IndexOrderPrint from './MakeFile/OrderPrint/index';
import IndexDeliveryPrint from './MakeFile/DeliveryPrint/index';


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
    <Route path="/entrega-impressao" component={IndexDeliveryPrint} />
    <Route path="/calibragem" component={Calibration} />
  </Switch>
);

export default Routes;
