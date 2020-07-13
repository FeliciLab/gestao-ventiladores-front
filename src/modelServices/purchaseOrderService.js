import client from '../services/client';
import { PurchaseOrder } from '../models/purchaseOrder';

const getFieldValue = (obj, field) => {
  if (
    typeof obj[field] === 'object' &&
    obj[field] !== null &&
    obj[field].$oid
  ) {
    return obj[field].$oid;
  }
  if (
    typeof obj[field] === 'object' &&
    obj[field] !== null &&
    obj[field].$date
  ) {
    return new Date(obj[field].$date);
  }
  if (field === 'created_at' || field === 'updated_at') {
    return new Date(obj[field]);
  }

  return obj[field];
};

const mapModelRequest = (purchaseOrder) => {
  const model = PurchaseOrder({});
  Object.keys(model).forEach((field) => {
    model[field] = getFieldValue(purchaseOrder, field);
  });

  return model;
};

export const getAllPurchaseOrders = () =>
  client.get('/api/ordem_compra').then((res) => res.data || []);

export const savePurchaseOrder = (purchaseOrder) => {
  const doc = mapModelRequest(purchaseOrder);
  return client
    .post('/api/ordem_compra', doc, { v1: true })
    .then((res) => res.data || false);
};
