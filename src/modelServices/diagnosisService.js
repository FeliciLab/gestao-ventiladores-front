import api from '../services/api';


export function getAllDiagnosis() {
  return api.get('api/diagnosticos')
    .then((result) => result.data);
}
