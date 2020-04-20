import api from "../services/api";

const DEFAULT_URL = '/api/ordem_servicos'

/**
 * Seach screnning by status
 *      triagem
 *      diagnostico
 *      manutencao
 *      etc
 */
export function getServiceOrderByStatus (status) {
  return api.post(
     DEFAULT_URL + '/find',
    {
      query: {
        status
      }
    },
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

export function getAllServiceOrder () {
  return api.get(
    DEFAULT_URL,
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
  delete (equipamento['_id']);
  return api.post(
    DEFAULT_URL,
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
    DEFAULT_URL + id,
    equipamento
  ).then(result => {
    console.log(result);
    return result;
  }).catch(err => {
    console.log(err);
    return err;
  });
}