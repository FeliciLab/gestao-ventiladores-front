/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import AssignmentSharpIcon from '@material-ui/icons/AssignmentSharp';
import SubtitlesSharpIcon from '@material-ui/icons/SubtitlesSharp';
import LibraryBooksSharpIcon from '@material-ui/icons/LibraryBooksSharp';
import LocalMallSharpIcon from '@material-ui/icons/LocalMallSharp';
import UnarchiveSharpIcon from '@material-ui/icons/UnarchiveSharp';
import AssignmentTurnedInSharpIcon from '@material-ui/icons/AssignmentTurnedInSharp';
import AssessmentSharpIcon from '@material-ui/icons/AssessmentSharp';

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

export const mainMenuRoutes = () => [
  {
    path: '/ordens-servicos',
    label: 'Ordens de Serviço',
    icon: <LibraryBooksSharpIcon />,
    component: IndexServiceOrder,
  },
  {
    path: '/triagens',
    label: 'Triagem',
    icon: <AssignmentSharpIcon />,
    component: Screening,
  },
  {
    path: '/diagnosticos',
    label: 'Diagnóstico',
    icon: <SubtitlesSharpIcon />,
    component: Diagnosis,
  },
  {
    path: '/demandas',
    label: 'Demanda',
    icon: <LocalMallSharpIcon />,
    component: IndexDemand,
  },
  {
    path: '/calibragem',
    label: 'Calibragem',
    icon: <AssignmentTurnedInSharpIcon />,
    component: Calibration,
  },
  {
    path: '/entregas',
    label: 'Entrega',
    icon: <UnarchiveSharpIcon />,
    component: Delivery,
  },
  {
    path: '/acessos',
    label: 'Acessos',
    icon: <AssessmentSharpIcon />,
    component: UsersControl,
  },
];

const getRoutes = () => [
  ...mainMenuRoutes(),
  {
    path: '/',
    component: IndexServiceOrder,
  },
  {
    path: '/novo-diagnostico',
    component: IndexFormDiagnosis,
  },
  {
    path: '/ordem-compra',
    component: IndexOrderPrint,
  },
  {
    path: '/osprint',
    component: OsPrint,
  },
  {
    path: '/entrega-impressao',
    component: IndexDeliveryPrint,
  },
  {
    path: '*',
    component: IndexServiceOrder,
  },
];

export default getRoutes;
