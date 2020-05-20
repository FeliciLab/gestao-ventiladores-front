export const itemDiagnosisModel = {
  tipo: 'pecas',
  fabricante: '',
  codigo: '',
  nome: '',
  unidade_medida: '',
  quantidade: 0,
  descricao: '',
};

export const getItemDiagnosis = (item) => ({ ...itemDiagnosisModel, ...item });
