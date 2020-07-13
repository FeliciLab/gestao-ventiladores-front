import client from '../services/client';
import { Delivery } from '../models/delivery';

const getFieldValue = (delivery, field) => {
  if (
    typeof delivery[field] === 'object' &&
    delivery[field] !== null &&
    delivery[field].$oid
  ) {
    return delivery[field].$oid;
  }

  if (
    typeof delivery[field] === 'object' &&
    delivery[field] !== null &&
    delivery[field].$date
  ) {
    return new Date(delivery[field].$date);
  }
  if (field === 'created_at' || field === 'updated_at') {
    return new Date(delivery[field]);
  }

  return delivery[field];
};

const mapModel = (delivery) => {
  const model = Delivery({});

  Object.keys(model).forEach((field) => {
    model[field] = getFieldValue(delivery, field);
  });

  return model;
};

export const getAllDeliveryOrders = async () => {
  try {
    const response = await client.get('/api/movimentacao');
    return response.data || [];
  } catch (error) {
    return [];
  }
};

export const saveDelivery = async (entrega) => {
  try {
    const doc = mapModel(entrega);
    const response = await client.post(
      '/api/movimentacao',
      Object.assign(doc, {
        updated_at: new Date(),
      }),
      { v1: true },
    );
    return response.data || [];
  } catch (error) {
    return [];
  }
};

export const updateEntrega = async (entrega) => {
  try {
    const doc = mapModel(entrega);
    const response = await client.put(
      `/api/movimentacao/${entrega.id}`,
      Object.assign(doc, {
        updated_at: new Date(),
      }),
      { v1: true },
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
