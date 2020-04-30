import api from "../services/api";
import {Delivery} from "../models/delivery";

function mapModel (delivery) {
  const model = Delivery({})
  for (let field in model) {
    if (typeof (delivery[field]) === 'object' && delivery[field] !== null && delivery[field]['$oid']) {
      model[field] = delivery[field]['$oid'];
      continue;
    }

    if (typeof (delivery[field]) === 'object' && delivery[field] !== null && delivery[field]['$date']) {
      model[field] = new Date(delivery[field]['$date']);
      continue;
    }
    if (field === 'created_at' || field === 'updated_at') {
      model[field] = new Date(delivery[field]);
    }

    if (field === 'equipamentos_id') {
      for (let i in delivery['equipamentos_id']) {
        if (typeof (delivery['equipamentos_id'][i]) === 'object' && delivery['equipamentos_id'][i] !== null && delivery['equipamentos_id'][i]['$oid']) {
          model['equipamentos_id'][i] = delivery['equipamentos_id'][i]['$oid'];
        }
      }
      continue;
    }
    model[field] = delivery[field];
  }
  return model;
}

export async function getAllDeliveryOrders () {
  try {
    const response = await api.get("/api/movimentacao", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return response.data || [];
  } catch (error) {
    console.log(error);
    return []
  }
}

export async function saveDelivery (entrega) {
  try {
    const doc = mapModel(entrega)
    const response = await api.post(
      "/api/movimentacao",
      Object.assign(doc, {
        updated_at: new Date()
      }),
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data || [];
  } catch (error) {
    console.log(error);
    return []
  }
}

export async function updateEntrega (entrega) {
  try {
    const doc = mapModel(entrega)
    const response = await api.put(
      `/api/movimentacao/${entrega.id}`,
      Object.assign(doc, {
        updated_at: new Date(),
      }),
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
}
