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

// eslint-disable-next-line import/prefer-default-export
export const ROUTES_CONFIG = [
  { path: '/', exact: true, component: IndexServiceOrder },
  { path: '/ordens-servicos', exact: true, component: IndexServiceOrder },
  { path: '/triagens', exact: true, component: Screening },
  { path: '/novo-diagnostico', exact: true, component: IndexFormDiagnosis },
  { path: '/diagnosticos', exact: true, component: Diagnosis },
  { path: '/demandas', exact: true, component: IndexDemand },
  { path: '/ordem-compra', exact: true, component: IndexOrderPrint },
  { path: '/osprint', exact: true, component: OsPrint },
  { path: '/entregas', exact: true, component: Delivery },
  { path: '/entrega-impressao', exact: true, component: IndexDeliveryPrint },
  { path: '/calibragem', exact: true, component: Calibration },
  { path: '/*', exact: false, component: IndexServiceOrder },
];
