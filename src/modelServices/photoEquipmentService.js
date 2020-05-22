import api from '../services/api';


const sendEquipmentPhoto = (photo, label, id) => {
  const formData = new FormData();
  if (id) {
    formData.append('_id', id);
  }
  formData.append(label, photo, `${label}.jpeg`);

  return api.post('/api/importar/imagem', formData, {
    header: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then((result) => {
      if (result.data) {
        return result.data;
      }
      return false;
    })
    .catch((err) => err);
};


export default sendEquipmentPhoto;
