import client from '../services/client';


const getAllDiagnosis = () => client.get('api/diagnosticos')
  .then((result) => result.data);

export default getAllDiagnosis();
