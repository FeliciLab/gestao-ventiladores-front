export const purshaseOrderModel = {
  _id: '',
  numero_ordem_compra: '',
  itens: [],
  created_at: new Date(),
  updated_at: new Date()
}

export function PurchaseOrder (purchaseOrder) {
  return Object.assign({}, purshaseOrderModel, purchaseOrder)
}