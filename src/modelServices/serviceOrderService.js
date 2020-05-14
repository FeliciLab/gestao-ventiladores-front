import api from "../services/api";
import {ServiceOrder, ServiceOrderDiagnosis, ServiceOrderScreening} from "../models/serviceOrder";
import {itemDiagnosisModel} from "../models/itensDiagnosticos";
import {Acessorio} from "../models/acessorio";


/**
 * Seach screnning by status
 *      triagem
 *      diagnostico
 *      manutencao
 *      etc
 */
export function getServiceOrderByStatus (status) {
  return api.post(
    '/api/ordem_servicos/find',
    {
      query: {
        status
      }
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }
  )
    .then((response) => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}

export function getAllServiceOrder () {
  return api.get(
    '/api/ordem_servicos'
  )
    .then((response) => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}

export function mapModelRequest (serviceOrder) {
  const model = ServiceOrder({});
  const modelScreening = ServiceOrderScreening(serviceOrder);
  const modelDiagnosis = ServiceOrderDiagnosis(serviceOrder.diagnostico || {});
  const modelAccessory = Acessorio({});
  const modelItems = itemDiagnosisModel;
  for (let field in model) {
    if (typeof (serviceOrder[field]) === 'object' && serviceOrder[field] !== null && serviceOrder[field]['$oid']) {
      model[field] = serviceOrder[field]['$oid'];
      continue;
    }
    if (typeof (serviceOrder[field]) === 'object' && serviceOrder[field] !== null && serviceOrder[field]['$date']) {
      model[field] = new Date(serviceOrder[field]['$date']);
      continue;
    }
    if (field === 'created_at' || field === 'updated_at') {
      model[field] = new Date(serviceOrder[field]);
    }

    if (field === 'triagem' && serviceOrder[field]) {
      for (let fieldScreening in modelScreening) {
        if (fieldScreening === 'acessorios') {
          for (let indexAccessory in serviceOrder['triagem']['acessorios']) {
            const item = {};
            for (let fieldModelAccessory in modelAccessory) {
              item[fieldModelAccessory] = serviceOrder['triagem']['acessorios'][indexAccessory][fieldModelAccessory];
            }
            model['triagem']['acessorios'][indexAccessory] = item;
          }
          continue;
        }

        model['triagem'][fieldScreening] = serviceOrder['triagem'][fieldScreening];
      }
      continue;
    }

    if (field === 'diagnostico' && serviceOrder[field]) {
      for (let fieldDiagnosis in modelDiagnosis) {
        if (fieldDiagnosis === 'itens') {
          for (let indexItem in serviceOrder['diagnostico']['itens']) {
            const item = {};
            for (let fieldModelItem in modelItems) {
              item[fieldModelItem] = serviceOrder['diagnostico']['itens'][indexItem][fieldModelItem];
            }
            model['diagnostico']['itens'][indexItem] = item;
          }
          continue;
        }

        model['diagnostico'][fieldDiagnosis] = serviceOrder['diagnostico'][fieldDiagnosis];
      }
      continue;
    }

    model[field] = serviceOrder[field];
  }

  return model;
}

export function saveNewOrderService (serviceOrder) {
  delete (serviceOrder['_id']);
  const model = mapModelRequest(serviceOrder);
  return api.post(
    '/api/ordem_servicos',
    Object.assign(
      model,
      {
        status: 'triagem',
        created_at: new Date(),
        updated_at: new Date()
      },
    ),
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  )
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
}

export function updateServiceOrderRequest (serviceOrder, id) {
  const model = mapModelRequest(serviceOrder);
  delete model._id
  return api.put(
    '/api/ordem_servico/' + id,
    Object.assign({}, model, {updated_at: new Date()})
  ).then(result => {
    return result;
  });
}