import api from "../services/api";
import {Equipamento} from "../models/equipamentos";

/**
 * Seach screnning by status
 *      triagem
 *      diagnostico
 *      manutencao
 *      etc
 */
export function getEquipmentByStatus (status) {
  return api.post(
    '/api/equipamentos/find',
    {status},
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }
  )
    .then((response) => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}

export function getAllEquipments () {
  return api.get(
    '/api/equipamentos',
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }
  )
    .then((response) => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}

export function mapModelRequest (equipment) {
  const model = Equipamento({});
  for (let field in model) {
    model[field] = equipment[field];
  }
  return model;
}

export function saveNewEquipment (equipamento) {
  delete (equipamento['_id']);
  const model = mapModelRequest(equipamento);
  return api.post(
    '/api/equipamentos',
    Object.assign(
      model,
      {
        status: 'triagem',
        created_at: new Date(),
        updated_at: new Date()
      },
    ),
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  )
    .then(res => {
      if (res && res.data) return res.data;

      return false;
    })
    .catch(err => {
      return err;
    });
}

export function updateEquipment (equipamento) {
  const id = equipamento['_id'];
  delete (equipamento['_id']);
  const model = mapModelRequest(equipamento);

  return api.put(
    '/api/equipamento/' + id,
    Object.assign({}, model, {updated_at: new Date()})
  ).then(result => {
    console.log(result);
    return result;
  }).catch(err => {
    console.log(err);
    return err;
  });
}