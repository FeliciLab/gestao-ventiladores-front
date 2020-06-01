import api from '../services/api';
import { PurchaseOrder } from '../models/purchaseOrder';


const getFieldValue = (obj, field) => {
  if (typeof (obj[field]) === 'object' && obj[field] !== null && obj[field].$oid) {
    return obj[field].$oid;
  }
  if (typeof (obj[field]) === 'object' && obj[field] !== null && obj[field].$date) {
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

export const getAllPurchaseOrders = () => api.get('/api/ordem_compra')
  .then((res) => res.data || []);

export const savePurchaseOrder = (purchaseOrder) => {
  const doc = mapModelRequest(purchaseOrder);
  return api.post('/api/ordem_compra', doc)
    .then((res) => res.data || false);
};
