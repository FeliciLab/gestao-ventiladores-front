import api from "../services/api";

export function sendEquipmentPhoto (photo, label, id) {
  const formData = new FormData();
  if (id) {
    formData.append('_id', id);
  }
  formData.append(label, photo, `${label}.jpeg`);

  return api.post('/api/importar/imagem', formData, {
    header: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(result => {
      return result.data;
    })
    .catch(err => {
      return err;
    });
}