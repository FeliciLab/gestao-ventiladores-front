import { array } from 'prop-types';

export const randomIndex = () =>
  `${Math.random().toString(36).substring(2, 15)}-${Math.random()
    .toString(36)
    .substring(2, 15)}`;

export const arrayToDictionary = (arr) => {
  return arr.reduce(function (map, obj) {
    map[obj.value] = obj;
    return map;
  }, {});
};

export default randomIndex();
