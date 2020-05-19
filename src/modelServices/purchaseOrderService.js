import api from '../services/api';
import { PurchaseOrder } from '../models/purchaseOrder';


function mapModelRequest (purchaseOrder) {
  const model = PurchaseOrder({});
  for (let field in model) {
    if (typeof (purchaseOrder[field]) === 'object' && purchaseOrder[field] !== null && purchaseOrder[field]['$oid']) {
      model[field] = purchaseOrder[field]['$oid'];
      continue;
    }
    if (typeof (purchaseOrder[field]) === 'object' && purchaseOrder[field] !== null && purchaseOrder[field]['$date']) {
      model[field] = new Date(purchaseOrder[field]['$date']);
      continue;
    }
    if (field === 'created_at' || field === 'updated_at') {
      model[field] = new Date(purchaseOrder[field]);
    }

    model[field] = purchaseOrder[field];
  }

  return model;
}

export function getAllPurchaseOrders () {
  return api.get('/api/ordem_compra')
    .then(res => {
      return res.data || [];
    })
    .catch(err => {
      console.log(err);
      return err;
    });
}

export function savePurchaseOrder (purchaseOrder) {
  const doc = mapModelRequest(purchaseOrder)
  return api.post('/api/ordem_compra', doc)
    .then(res => res.data || false)
    .catch(err => {
      console.log(err);
      return err;
    });
}