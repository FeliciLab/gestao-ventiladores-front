export const accessoryConservationStateList = [
  'Bom', 'Regular', 'Ruim',
];

export const accessoryMapOptionsConservationState = () => accessoryConservationStateList
  .map((item) => ({ label: item, value: item }));
