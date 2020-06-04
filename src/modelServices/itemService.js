import client from '../services/client';

export const saveNewItemRequest = (item) => {
  client.post(item);
};

export const updateItemRequest = (item) => {
  client.patch(item);
};

export const saveItem = (item) => {
  if (item._id) {
    return updateItemRequest(item);
  }
  return saveNewItemRequest(item);
};
