

export function Equipamento (equipamento) {
    return Object.assign({},
      {
          _id: '',
          numero_ordem_servico: equipamento.numero_ordem_servico,
          status: equipamento.status || 'triagem',
          created_at: equipamento.created_at || new Date(),
          updated_at: equipamento.updated_at || new Date(),
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
          contato_responsavel: ''
      },
      equipamento
    );
}