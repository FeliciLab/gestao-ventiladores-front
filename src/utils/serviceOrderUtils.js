import { baseURL } from '../services/client';

const getId = (item) => item._id.$oid || item._id;

export const baseImageURI = (item) =>
  `${baseURL}/v2/service_order/${getId(item)}`;
export const hasPhotoBefore = (item) =>
  item.triagem.foto_antes_limpeza &&
  item.triagem.foto_antes_limpeza === `${getId(item)}_foto_antes_limpeza.jpeg`;
export const hasPhotoAfter = (item) =>
  item.triagem.foto_antes_limpeza &&
  item.triagem.foto_antes_limpeza === `${getId(item)}_foto_antes_limpeza.jpeg`;
export const hasPhoto = (item) => hasPhotoAfter(item) || hasPhotoBefore(item);
