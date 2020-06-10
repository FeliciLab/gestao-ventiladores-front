const accessRequests = {
  labels: ['Ordem', 'Nome', 'Unidade', 'ID Saúde', 'Data de Solicitação'],
  data: [
    {
      ordem: '001',
      nome: 'José Francisco Lima',
      unidade: 'HGF',
      idSaude: '021458',
      dataSolicitacao: '08/10/2020',
    },
    {
      ordem: '002',
      nome: 'Fulana da Silva',
      unidade: 'HGF',
      idSaude: '034458',
      dataSolicitacao: '10/11/2020',
    },
    {
      ordem: '002',
      nome: 'Cicrana da Silva',
      unidade: 'HGF',
      idSaude: '034477',
      dataSolicitacao: '11/09/2020',
    },
  ],
};

const ApiService = {
  getAccessRequests: () => accessRequests,

  getAccessRequestsById: (id) => {
    accessRequests.data.filter((user) => user.idSaude === id);
  },
};

export default ApiService;
