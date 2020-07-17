import client from '../../services/client';

export const getAllItemsRequest = () => client.get('/v2/items');

export const saveNewItemRequest = ({ _id, ...item }) => client.post('/v2/items', [item], {});

export const updateItemRequest = (item) => client.patch('/v2/items', [item], {});

export const removeItemRequest = (item) => client.delete('/v2/items', [item._id], {});

export const mergeItemRequest = ({ toUpdate, toRemove }) => client.post(
  '/v2/items/merge',
  { toUpdate, toRemove },
  {},
);

export const saveItem = async (item) => {
  return item._id && item._id !== ''
    ? updateItemRequest(item)
    : saveNewItemRequest(item);
};

export default {
  saveItem,
  saveNewItemRequest,
  updateItemRequest,
  getAllItemsRequest,
  removeItemRequest,
};
