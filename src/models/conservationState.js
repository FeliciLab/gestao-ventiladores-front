export const conservationStateList = [
  "Bom", "Regular", "Ruim"
];

export function mapOptionsConservationState () {
  return conservationStateList.map(item => ({label: item, value: item}));
}