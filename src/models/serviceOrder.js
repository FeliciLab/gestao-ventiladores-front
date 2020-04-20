import {listaFormAcessorios} from "./acessorio";

export function ServiceOrder (serviceOrder) {
  return {
    _id: '',
    numero_ordem_servico: serviceOrder.numero_ordem_servico,
    status: serviceOrder.status || 'triagem',
    created_at: serviceOrder.created_at || new Date(),
    updated_at: serviceOrder.updated_at || new Date(),
    triagem: ServiceOrderScreening(
      {
        triagem: serviceOrder.triagem
      } || {
        triagem: {
          acessorios: listaFormAcessorios([])
        }
      }
    )
  };
}

export function ServiceOrderScreening ({triagem}) {
  return Object.assign(
    {
      acessorios: [],
      foto_antes_limpeza: '',
      foto_apos_limpeza: ''
    },
    triagem || {acessorios: listaFormAcessorios([])}
  );
}

export function ServiceOrderDiagnosis ({diagnostico}) {
  return Object.assign({
    "resultado_tecnico": "",
    "demanda_servicos": "",
    "demanda_insumos": "",
    "acao_orientacao": "",
    "observacoes": "",
    "itens": []
  }, diagnostico);
}
