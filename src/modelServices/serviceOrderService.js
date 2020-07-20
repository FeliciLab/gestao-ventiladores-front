import client from '../services/client';
import {
  ServiceOrder,
  ServiceOrderDiagnosis,
  ServiceOrderScreening,
} from '../models/serviceOrder';
import { itemDiagnosisModel } from '../models/item';
import { Acessorio } from '../models/acessorio';

export const getServiceOrderByStatus = (status) =>
  client
    .post(
      '/api/ordem_servicos/find',
      {
        query: {
          status,
        },
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
    .then((response) => response.data);

export const getAllServiceOrder = () =>
  client.get('/v2/service_orders?join=equipamento,item').then((response) => response.data);

const getValueFieldScreening = (serviceOrder) => {
  const modelScreening = ServiceOrderScreening(serviceOrder);
  const modelAccessory = Acessorio({});

  const doc = {};

  Object.keys(modelScreening).forEach((fieldScreening) => {
    if (fieldScreening === 'acessorios') {
      doc.acessorios = [];
      serviceOrder.triagem.acessorios.forEach((i, indexAccessory) => {
        const item = {};
        Object.keys(modelAccessory).forEach((fieldModelAccessory) => {
          item[fieldModelAccessory] =
            serviceOrder.triagem.acessorios[indexAccessory][
              fieldModelAccessory
            ];
        });
        doc.acessorios.push(item);
      });
    }

    doc[fieldScreening] = serviceOrder.triagem[fieldScreening];
  });

  return doc;
};

const getValueFieldDiagnosis = (serviceOrder) => {
  const modelDiagnosis = ServiceOrderDiagnosis(serviceOrder.diagnostico || {});
  const modelItems = itemDiagnosisModel;
  const doc = {};
  Object.keys(modelDiagnosis).forEach((fieldDiagnosis) => {
    if (fieldDiagnosis === 'itens') {
      doc.itens = [];
      serviceOrder.diagnostico.itens.forEach((v, indexItem) => {
        const item = {};
        Object.keys(modelItems).forEach((fieldModelItem) => {
          item[fieldModelItem] =
            serviceOrder.diagnostico.itens[indexItem][fieldModelItem];
        });

        doc.itens.push(item);
      });
    }

    doc[fieldDiagnosis] = serviceOrder.diagnostico[fieldDiagnosis];
  });

  return doc;
};

const getValueField = (serviceOrder, field) => {
  if (
    typeof serviceOrder[field] === 'object' &&
    serviceOrder[field] !== null &&
    serviceOrder[field].$oid
  ) {
    return serviceOrder[field].$oid;
  }

  if (
    typeof serviceOrder[field] === 'object' &&
    serviceOrder[field] !== null &&
    serviceOrder[field].$date
  ) {
    return new Date(serviceOrder[field].$date);
  }

  if (
    (field === 'created_at' || field === 'updated_at') &&
    serviceOrder[field]
  ) {
    return new Date(serviceOrder[field]);
  }

  if (field === 'triagem' && serviceOrder[field]) {
    return getValueFieldScreening(serviceOrder, field);
  }

  if (field === 'diagnostico' && serviceOrder[field]) {
    return getValueFieldDiagnosis(serviceOrder);
  }

  return serviceOrder[field];
};

export const mapModelRequestServiceOrder = (serviceOrder) => {
  const model = ServiceOrder({});
  Object.keys(model).forEach((field) => {
    model[field] = getValueField(serviceOrder, field);
  });

  return model;
};

export const saveNewOrderService = (serviceOrder) => {
  const order = serviceOrder;
  delete order._id;
  return client
    .post(
      '/api/ordem_servicos',
      Object.assign(order, {
        status: 'triagem',
        created_at: new Date(),
        updated_at: new Date(),
      }),
      {
        v1: true,
      },
    )
    .then((res) => res)
    .catch((err) => err);
};

export const updateServiceOrderRequest = (serviceOrder, id) => {
  const order = serviceOrder;
  delete order._id;
  return client
    .patch(
      `/api/ordem_servico/${id}`,
      Object.assign(order, { updated_at: new Date() }),
      { v1: true },
    )
    .then((result) => result);
};
