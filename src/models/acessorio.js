export const listaAcessorios = [
  'Traquéias',
  'Blender',
  'Umidificador',
  'Jarra',
  'Válvula exalatória',
  'Membrana',
  'Conector "Y"',
  'Conector de Dreno',
  'Sensor de Fluxo',
  'Sensor de temperatura',
  'Linha de pressão proximal braço articulado',
  'Pulmão de Teste',
  'Pedestral',
  'Braço articulado',
  'Mangueira de Oxigênio (verde)',
  'Mangueira de Ar Medicinal (amarela)',
  'Cabo de Força / Fonte',
];

export function Acessorio(acessorio) {
  return {
    descricao: '',
    acompanha: false,
    quantidade: 0,
    estado_de_conservacao: '',
    ...acessorio,
  };
}

export function listaFormAcessorios(acessorios) {
  return listaAcessorios.sort((a, b) => a.localeCompare(b)).map((item) => Acessorio(acessorios.find((acessorio) => acessorio.descricao === item) || { descricao: item }));
}
