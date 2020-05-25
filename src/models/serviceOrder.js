import { listaFormAcessorios } from './acessorio';


export const serviceOrderStatus = {
  diagnostico: 'diagnóstico',
  triagem: 'triagem',
  calibragem: 'calibragem',
  entrega: 'entrega',
};

export const ServiceOrderScreening = ({ triagem }) => ({
  estado_de_conservacao: '',
  acessorios: [],
  foto_antes_limpeza: '',
  foto_apos_limpeza: '',
  ...triagem || { acessorios: listaFormAcessorios([]) },
});

export const ServiceOrderDiagnosis = (diagnostico) => ({
  resultado_tecnico: '',
  demanda_servicos: '',
  observacoes: '',
  itens: [],
  ...diagnostico || {},
});

export const ServiceOrderCalibration = (calibration) => ({ status: 'descalibrado', ...calibration });

export const ServiceOrder = (serviceOrder) => ({
  _id: '',
  numero_ordem_servico: serviceOrder && serviceOrder.numero_ordem_servico
    ? serviceOrder.numero_ordem_servico
    : '',
  status: '',
  equipamento_id: '',
  created_at: new Date(),
  updated_at: new Date(),
  ...serviceOrder,
  triagem: ServiceOrderScreening(
    serviceOrder && serviceOrder.triagem
      ? { triagem: serviceOrder.triagem }
      : { triagem: { acessorios: listaFormAcessorios([]) } },
  ),
  diagnostico: ServiceOrderDiagnosis(serviceOrder && serviceOrder.diagnostico
    ? serviceOrder.diagnostico
    : {}),
  calibragem: ServiceOrderCalibration(serviceOrder && serviceOrder.calibragem
    ? serviceOrder.calibragem
    : {}),
});
