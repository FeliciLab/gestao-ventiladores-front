export const mapStatus = () => ({
  entregue: 'Entregue',
  realocado: 'Realocado',
});

export const ToPlace = (destiny) => ({
  instituicao_destino: '',
  cidade_destino: '',
  cnpj_destino: '',
  endereco_destino: '',
  nome_responsavel_destino: '',
  contato_responsavel_destino: '',
  ...destiny,
});

export const PersonTransportation = (person) => ({
  nome_responsavel_transporte: '',
  contato_responsavel_transporte: '',
  ...person,
});

export const Delivery = (entrega) => ({
  equipamentos_id: [entrega.equipamentos_id || ''],
  tipo: entrega.tipo,
  ...ToPlace(entrega),
  ...PersonTransportation(entrega),
  data_entrega: new Date(),
  acessorios: [],
  created_at: entrega.created_at || new Date(),
  updated_at: entrega.updated_at || new Date(),
});
