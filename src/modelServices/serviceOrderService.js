import api from '../services/api';
import { ServiceOrder, ServiceOrderDiagnosis, ServiceOrderScreening } from '../models/serviceOrder';
import { itemDiagnosisModel } from '../models/itensDiagnosticos';
import { Acessorio } from '../models/acessorio';


/**
 * Seach screnning by status
 *      triagem
 *      diagnostico
 *      manutencao
 *      etc
 */
export function getServiceOrderByStatus(status) {
  return api.post(
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
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      return error;
    });
}

export function getAllServiceOrder() {
  return api.get(
    '/api/ordem_servicos',
  )
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      return error;
    });
}

export function mapModelRequest(serviceOrder) {
  const model = ServiceOrder({});
  const modelScreening = ServiceOrderScreening(serviceOrder);
  const modelDiagnosis = ServiceOrderDiagnosis(serviceOrder.diagnostico || {});
  const modelAccessory = Acessorio({});
  const modelItems = itemDiagnosisModel;

  for (const field in model) {
    if (!serviceOrder.hasOwnProperty(field)) {
      continue;
    }

    if (typeof (serviceOrder[field]) === 'object' && serviceOrder[field] !== null && serviceOrder[field].$oid) {
      model[field] = serviceOrder[field].$oid;
      continue;
    }

    if (typeof (serviceOrder[field]) === 'object' && serviceOrder[field] !== null && serviceOrder[field].$date) {
      model[field] = new Date(serviceOrder[field].$date);
      continue;
    }

    if ((field === 'created_at' || field === 'updated_at') && serviceOrder[field]) {
      model[field] = new Date(serviceOrder[field]);
      continue;
    }

    if (field === 'triagem' && serviceOrder[field]) {
      for (const fieldScreening in modelScreening) {
        if (fieldScreening === 'acessorios') {
          for (const indexAccessory in serviceOrder.triagem.acessorios) {
            const item = {};
            for (const fieldModelAccessory in modelAccessory) {
              item[fieldModelAccessory] = serviceOrder.triagem.acessorios[indexAccessory][fieldModelAccessory];
            }
            model.triagem.acessorios[indexAccessory] = item;
          }
          continue;
        }

        model.triagem[fieldScreening] = serviceOrder.triagem[fieldScreening];
      }
      continue;
    }

    if (field === 'diagnostico' && serviceOrder[field]) {
      for (const fieldDiagnosis in modelDiagnosis) {
        if (fieldDiagnosis === 'itens') {
          for (const indexItem in serviceOrder.diagnostico.itens) {
            const item = {};
            for (const fieldModelItem in modelItems) {
              item[fieldModelItem] = serviceOrder.diagnostico.itens[indexItem][fieldModelItem];
            }
            model.diagnostico.itens[indexItem] = item;
          }
          continue;
        }

        model.diagnostico[fieldDiagnosis] = serviceOrder.diagnostico[fieldDiagnosis];
      }
      continue;
    }

    model[field] = serviceOrder[field];
  }

  return model;
}

export function saveNewOrderService(serviceOrder) {
  delete (serviceOrder._id);
  return api.post(
    '/api/ordem_servicos',
    Object.assign(
      serviceOrder,
      {
        status: 'triagem',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ),
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
    .then((res) => res)
    .catch((err) => err);
}

export function updateServiceOrderRequest(serviceOrder, id) {
  delete serviceOrder._id;
  return api.patch(
    `/api/ordem_servico/${id}`,
    Object.assign(serviceOrder, { updated_at: new Date() }),
  ).then((result) => result);
}
