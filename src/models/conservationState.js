export const accessoryConservationStateList = [
  "Bom", "Regular", "Ruim"
];

export function accessoryMapOptionsConservationState () {
  return accessoryConservationStateList.map(item => ({label: item, value: item}));
}