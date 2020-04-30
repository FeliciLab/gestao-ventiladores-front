export function Delivery (entrega) {
  return {
    equipamentos_id: [entrega.equipamentos_id || ""],
    tipo: entrega.tipo,
    ...ToPlace(entrega),
    ...PersonTransportation(entrega),
    created_at: entrega.created_at || new Date(),
    updated_at: entrega.updated_at || new Date()
  };
}

export function mapStatus () {
  return {
    'entregue': 'Entregue',
    'realocado': 'Realocado'
  }
}
export function ToPlace (destiny) {
  return Object.assign({
    instituicao_destino: '',
    cidade_destino: '',
    cnpj_destino: '',
    endereco_destino: '',
    nome_responsavel_destino: '',
    contato_responsavel_destino: '',
  }, destiny)
}

export function PersonTransportation (person) {
  return Object.assign({
    nome_responsavel_transporte: '',
    contato_responsavel_transporte: ''
  }, person)
}