import IndexServiceOrder from './pages/SerrviceOrder';
import IndexFormDiagnosis from './pages/Diagnosis/DiagnosisForm';
import Screening from './pages/Screening';
import IndexDemand from './pages/Demand';
import Diagnosis from './pages/Diagnosis';
import Delivery from './pages/Delivery';
import Calibration from './pages/Calibration';
import UsersControl from './pages/UsersControl';
import OsPrint from './MakeFile/OsPrint';
import IndexOrderPrint from './MakeFile/OrderPrint';
import IndexDeliveryPrint from './MakeFile/DeliveryPrint';

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
  { path: '/controle-usuarios', component: UsersControl },
  { path: '*', component: IndexServiceOrder },
];

export default getRoutes;
