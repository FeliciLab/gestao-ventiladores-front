import IndexServiceOrder from '../pages/SerrviceOrder/index';
import IndexFormDiagnosis from '../pages/Diagnosis/DiagnosisForm/index';
import Screening from '../pages/Screening/index';
import IndexDemand from '../pages/Demand/index';
import Diagnosis from '../pages/Diagnosis/index';
import Delivery from '../pages/Delivery/index';
import Calibration from '../pages/Calibration/index';
import OsPrint from '../MakeFile/OsPrint/index';
import IndexOrderPrint from '../MakeFile/OrderPrint/index';
import IndexDeliveryPrint from '../MakeFile/DeliveryPrint/index';

const getRoutes = () => [
  { path: '/', component: IndexServiceOrder },
  { path: '/ordens-servicos', component: IndexServiceOrder },
  { path: '/triagens', component: Screening },
  { path: '/novo-diagnostico', component: IndexFormDiagnosis },
  { path: '/diagnosticos', component: Diagnosis },
  { path: '/demandas', component: IndexDemand },
  { path: '/ordem-compra', component: IndexOrderPrint },
  { path: '/osprint', component: OsPrint },
  { path: '/entregas', component: Delivery },
  { path: '/entrega-impressao', component: IndexDeliveryPrint },
  { path: '/calibragem', component: Calibration },
];

export default getRoutes;
