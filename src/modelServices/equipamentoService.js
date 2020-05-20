import api from '../services/api';
import { Equipamento } from '../models/equipamentos';


/**
 * Seach screnning by status
 *      triagem
 *      diagnostico
 *      manutencao
 *      etc
 */
export function getEquipmentByStatus(status) {
  return api
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
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      return error;
    });
}

export function getAllEquipments() {
  return api
    .get('/api/equipamentos', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      return error;
    });
}

export function mapEquipmentRequest(delivery) {
  const model = Equipamento({});

  for (const field in model) {
    if (typeof (delivery[field]) === 'object' && delivery[field] !== null && delivery[field].$oid) {
      model[field] = delivery[field].$oid;
      continue;
    }

    if (typeof (delivery[field]) === 'object' && delivery[field] !== null && delivery[field].$date) {
      model[field] = new Date(delivery[field].$date);
      continue;
    }
    if (field === 'created_at' || field === 'updated_at') {
      model[field] = new Date(delivery[field]);
      continue;
    }

    model[field] = delivery[field];
  }
  return model;
}

export function saveNewEquipment(equipamento) {
  delete (equipamento._id);
  const model = mapEquipmentRequest(equipamento);
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
}

export function updateEquipment(equipamento) {
  const model = mapEquipmentRequest(equipamento);
  const id = model._id;
  delete (model._id);

  return api.put(
    `/api/equipamento/${id}`,
    { ...model, updated_at: new Date() },
  ).then((result) => {
    console.log(result);
    return result;
  }).catch((err) => {
    console.log(err);
    return err;
  });
}

export function deleteEquipmentRequest(_id) {
  return api.delete(
    `/api/equipamentos?_id=${_id}`,
  ).then((res) => res.data);
}

export function updateManyEquipmentRequest(equipments) {
  return api.post('/api/equipamentos/bulk', { equipamentos: equipments.map((item) => mapEquipmentRequest(item)) })
    .then((res) => res.data);
}
