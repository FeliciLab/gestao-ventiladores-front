import client from '../services/client';

const sendEquipmentPhoto = (photo, label, id) => {
  const formData = new FormData();
  if (id) {
    formData.append('_id', id);
  }
  formData.append(label, photo, `${label}.jpeg`);

  return client
    .post('/api/importar/imagem', formData, {
      v1: true,
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
