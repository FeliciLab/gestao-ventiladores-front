export const itemDiagnosisModel = {
  "tipo": "pecas",
  "fabricante": "",
  "codigo": "",
  "nome": "",
  "unidade_medida": "",
  "quantidade": 0,
  "descricao": "",
};

export function getItemDiagnosis(item) {
  return Object.assign({}, itemDiagnosisModel, item)
}