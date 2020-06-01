import api from '../services/api';


const getAllDiagnosis = () => api.get('api/diagnosticos')
  .then((result) => result.data);

export default getAllDiagnosis();
