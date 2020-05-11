import {listaFormAcessorios} from "./acessorio";


export const serviceOrderStatus = {
  diagnostico: 'diagnóstico',
  triagem: 'triagem',
  calibragem: 'calibragem'
};

export function ServiceOrder (serviceOrder) {
  return Object.assign({},
    {
      _id: '',
      numero_ordem_servico: serviceOrder && serviceOrder.numero_ordem_servico ? serviceOrder.numero_ordem_servico : '',
      status: '',
      equipamento_id: '',
      created_at: new Date(),
      updated_at: new Date(),
      triagem: {},
      diagnostico: {}
    },
    serviceOrder,
    {
      triagem: ServiceOrderScreening(
        serviceOrder && serviceOrder.triagem ? {triagem: serviceOrder.triagem} : {triagem: {acessorios: listaFormAcessorios([])}}
      )
    },
    {
      diagnostico: ServiceOrderDiagnosis(serviceOrder && serviceOrder.diagnostico ? serviceOrder.diagnostico : {})
    },
    {
      calibragem: ServiceOrderCalibration(serviceOrder && serviceOrder.calibragem ? serviceOrder.calibragem : {})
    }
  );
}

export function ServiceOrderScreening ({triagem}) {
  return Object.assign(
    {
      estado_de_conservacao: '',
      acessorios: [],
      foto_antes_limpeza: '',
      foto_apos_limpeza: ''
    },
    triagem || {acessorios: listaFormAcessorios([])}
  );
}

export function ServiceOrderDiagnosis (diagnostico) {
  return Object.assign({
    "resultado_tecnico": "",
    "demanda_servicos": "",
    "observacoes": "",
    "itens": []
  }, diagnostico || {});
}

export function ServiceOrderCalibration (calibration) {
  return Object.assign({
    status: 'descalibrado'
  }, calibration);
}