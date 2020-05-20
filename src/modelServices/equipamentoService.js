import api from '../services/api';
import Equipamento from '../models/equipamentos';


/**
 * Seach screnning by status
 *      triagem
 *      diagnostico
 *      manutencao
 *      etc
 */
export const getEquipmentByStatus = (status) => api
  .post(
    '/api/equipamentos/find',
    { status },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
  .then((response) => response.data);

export const getAllEquipments = () => api
  .get('/api/equipamentos', {
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then((response) => response.data);

const getFieldValue = (obj, field) => {
  if (typeof (obj[field]) === 'object' && obj[field] !== null && obj[field].$oid) {
    return obj[field].$oid;
  }

  if (typeof (obj[field]) === 'object' && obj[field] !== null && obj[field].$date) {
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
  return api.post(
    '/api/equipamentos',
    Object.assign(
      model,
      {
        status: 'triagem',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ),
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
    .then((res) => {
      if (res && res.data) return res.data;

      return false;
    })
    .catch((err) => err);
};

export const updateEquipment = (equipamento) => {
  const model = mapEquipmentRequest(equipamento);
  const id = model._id;
  delete (model._id);

  return api.put(
    `/api/equipamento/${id}`,
    { ...model, updated_at: new Date() },
  ).then((result) => result);
};

export const deleteEquipmentRequest = (_id) => api.delete(`/api/equipamentos?_id=${_id}`)
  .then((res) => res.data);

export const updateManyEquipmentRequest = (equipments) => api
  .post('/api/equipamentos/bulk', { equipamentos: equipments.map((item) => mapEquipmentRequest(item)) })
  .then((res) => res.data);
