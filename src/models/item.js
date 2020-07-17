export const itemDiagnosisModel = {
  tipo: 'acessorio',
  fabricante: '',
  codigo: '',
  nome: '',
  unidade_medida: '',
  quantidade: 0,
  descricao: '',
};

export const mapTypeItems = {
  pecas: 'Peça',
  acessorio: 'Acessório',
  insumo: 'Insumo',
};

export const Item = (item) => ({
  ...itemDiagnosisModel,
  ...item,
});

export const getItemDiagnosis = (item) => ({ ...itemDiagnosisModel, ...item });
