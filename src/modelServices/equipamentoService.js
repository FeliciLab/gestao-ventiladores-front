import client from '../services/client';
import Equipamento from '../models/equipamentos';

/**
 * Search screnning by status
 *      triagem
 *      diagnostico
 *      manutencao
 *      etc
 */
export const getEquipmentByStatus = (status) =>
  client
    .post('/api/equipamentos/find', { status }, { v1: true })
    .then((response) => response.data);

export const getAllEquipments = () =>
  client.get('/api/equipamentos').then((response) => response.data);

const getFieldValue = (obj, field) => {
  if (
    typeof obj[field] === 'object' &&
    obj[field] !== null &&
    obj[field].$oid
  ) {
    return obj[field].$oid;
  }

  if (
    typeof obj[field] === 'object' &&
    obj[field] !== null &&
    obj[field].$date
  ) {
    return new Date(obj[field].$date);
  }
  if (field === 'created_at' || field === 'updated_at') {
    return new Date(obj[field]);
  }

  return obj[field];
};

export const mapEquipmentRequest = (delivery) => {
  const model = Equipamento({});

  Object.keys(model).forEach((field) => {
    model[field] = getFieldValue(delivery, field);
  });

  return model;
};

export const saveNewEquipment = (equipamento) => {
  const model = mapEquipmentRequest(equipamento);
  delete model._id;
  return client
    .post(
      '/api/equipamentos',
      Object.assign(model, {
        status: 'triagem',
        created_at: new Date(),
        updated_at: new Date(),
      }),
      { v1: true },
    )
    .then((res) => {
      if (res && res.data) return res.data;

      return false;
    })
    .catch((err) => err);
};

export const updateEquipment = (equipamento) => {
  const model = mapEquipmentRequest(equipamento);

  return client
    .post(
      '/api/equipamentos',
      { ...model, updated_at: new Date() },
      { v1: true },
    )
    .then((result) => result);
};

export const deleteEquipmentRequest = (_id) =>
  client.delete(`/api/equipamentos?_id=${_id}`).then((res) => res.data);

export const updateManyEquipmentRequest = (equipments) =>
  client
    .post(
      '/api/equipamentos/bulk',
      { equipamentos: equipments.map((item) => mapEquipmentRequest(item)) },
      { v1: true },
    )
    .then((res) => res.data);
