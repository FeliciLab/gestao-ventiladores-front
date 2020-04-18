import api from "../services/api";

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

export function saveNewScreening (equipamento) {
  delete(equipamento['_id'])
  return api.post(
    '/api/equipamentos',
    Object.assign(
      equipamento,
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
      return res;
    })
    .catch(err => {
      return err;
    });
}

export function updateScreening (equipamento) {
  const id = equipamento['_id'];
  delete (equipamento['_id']);
  return api.put(
    '/api/equipamento/' + id,
    equipamento
  ).then(result => {
    console.log(result);
    return result;
  }).catch(err => {
    console.log(err);
    return err;
  });
}