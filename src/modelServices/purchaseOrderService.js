import api from "../services/api";

export function getAllPurchaseOrders () {
  return api.get('/api/ordem_compra')
    .then(res => {
      console.log('axios', res.data);
      return res.data || [];
    })
    .catch(err => {
      console.log(err);
      return err;
    });
}

export function savePurchaseOrder (purchaseOrder) {
  return api.post('/api/ordem_compra', purchaseOrder)
    .then(res => res.data || false)
    .catch(err => {
      console.log(err);
      return err;
    });
}