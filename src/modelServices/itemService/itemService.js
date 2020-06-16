import client from '../../services/client';

export const getAllItemsRequest = () => client.get('/v2/items');

export const saveNewItemRequest = ({ _id, ...item }) => client.post('/v2/items', item);

export const updateItemRequest = (item) => client.patch('/v2/items', item);

export const saveItem = async (item) => {
  const result = item._id
    ? await updateItemRequest(item)
    : await saveNewItemRequest(item);
  return result;
};

export default {
  saveItem,
  saveNewItemRequest,
  updateItemRequest,
  getAllItemsRequest,
};
