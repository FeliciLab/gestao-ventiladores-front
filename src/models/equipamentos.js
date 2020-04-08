import api from "../services/api";

export function Equipamento (equipamento) {
  return {
    numero_ordem_servico: '',
    triagem: EquipamentoTriagem(equipamento.triagem || {})
  };
}

export function EquipamentoTriagem ({triagem}) {
  return Object.assign(
    {
      nome_equipamento: 'Ventilador Mecânico',
      foto_equipamento_chegada: '',
      tipo: '',
      unidade_de_origem: '',
      numero_do_patrimonio: '',
      numero_de_serie: '',
      instituicao_de_origem: '',
      nome_responsavel: '',
      contato_responsavel: '',
      estado_de_conservacao: '',
      fabricante: '',
      marca: '',
      modelo: '',
      acessorios: [],
      foto_apos_limpeza: '',
      observacao: '',
      responsavel_pelo_preenchimento: ''
    },
    triagem || {}
  );
}

export function salvarTriagem (equipamento) {
  return api.post('/api/equipamentos', equipamento)
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
}