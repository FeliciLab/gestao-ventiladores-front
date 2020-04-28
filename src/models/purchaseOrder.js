export const purshaseOrderModel = {
  numero_ordem_compra: '',
  itens: []
}

export function PurchaseOrder (purchaseOrder) {
  return Object.assign({}, purshaseOrderModel, purchaseOrder)
}