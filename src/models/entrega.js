import api from "../services/api";
import {listaFormAcessorios} from "./acessorio";

export function Entrega(entrega) {
  return {
    equipamento_id: entrega.equipamento_id || "",
    status: entrega.status,
    created_at: entrega.created_at || new Date(),
    updated_at: entrega.updated_at || new Date(),
  };
}

// export function EquipmentDiagnosis({diagnostico}) {
//   return Object.assign(
//     {
//       resultado_tecnico: "",
//       demanda_servicos: "",
//       demanda_insumos: "",
//       acao_orientacao: "",
//       observacoes: "",
//       itens: [],
//     },
//     diagnostico
//   );
// }



export async function getEquipmentByStatus(status) {
  try {
    const response = await api.post(
      "/api/equipamentos/find",
      {status},
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

export async function getAllEntregas() {
  try {
const response = await api.get("/api/entregas/", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function salvarEntrega(entrega) {
  try {
    const response = await api.post(
      "/api/entregas",
      Object.assign(entrega, {
        status: "entregue",
        created_at: new Date(),
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

export async function updateEntrega(entrega) {
  try {
    const response = await api.put(
      `/api/entrega/${entrega.id}`,
      Object.assign(entrega, {
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
