import api from "../services/api";
import {listaFormAcessorios} from "./acessorio";

export function Equipamento (equipamento) {
  return {
    numero_ordem_servico: equipamento.numero_ordem_servico,
    status: equipamento.status || 'triagem',
    created_at: equipamento.created_at || new Date(),
    updated_at: equipamento.updated_at || new Date(),
    triagem: EquipamentoTriagem(
      {
        triagem: equipamento.triagem
      } || {
        triagem: {
          acessorios: listaFormAcessorios([])
        }
      }
    )
  };
}

export function EquipamentoTriagem ({triagem}) {
  return Object.assign(
    {
      numero_de_serie: '',
      nome_equipamento: 'Ventilador Mecânico',
      numero_do_patrimonio: '',
      tipo: '',
      marca: '',
      modelo: '',
      fabricante: '',
      municipio_origem: '',
      nome_instituicao_origem: '',
      tipo_instituicao_origem: '',
      nome_responsavel: '',
      contato_responsavel: '',
      estado_de_conservacao: '',
      acessorios: [],
      foto_antes_limpeza: '',
      foto_apos_limpeza: ''
    },
    triagem || {acessorios: listaFormAcessorios([])}
  );
}

export function EquipmentDiagnosis ({diagnostico}) {
  return Object.assign({
    "resultado_tecnico": "",
    "demanda_servicos": "",
    "demanda_insumos": "",
    "acao_orientacao": "",
    "observacoes": "",
    "itens": []
  }, diagnostico);
}


/**
 * Seach screnning by status
 *      triagem
 *      diagnostico
 *      manutencao
 *      etc
 */
export function getEquipmentByStatus (status) {
  return api.post(
    '/api/equipamentos/find',
    {status},
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }
  )
    .then((response) => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}

export function getAllEquipments () {
  return api.get(
    '/api/equipamentos',
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }
  )
    .then((response) => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}

export function salvarNovaTriagem (equipamento) {
  return api.post(
    '/api/equipamentos',
    Object.assign(
      equipamento,
      {
        status: 'triagem',
        created_at: new Date(),
        updated_at: new Date()
      },
    ),
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  )
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
}