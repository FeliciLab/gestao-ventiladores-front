import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ActionTableList from "../_common/ActionTable/ActionTableList";
import {helperPropsColorIconButton} from "../_common/forms/ColorIconButton";
import {orange} from "@material-ui/core/colors";
import EditIcon from "@material-ui/icons/Edit";
import {useHistory} from "react-router-dom";

const headerData = [
  {id: 'numero_ordem_servico', name: 'Ordem de Serviço'},
  {id: 'numero_de_serie', name: 'Número de Série'},
  {id: 'marca', name: 'Marca'},
  {id: 'modelo', name: 'Modelo'},
  {id: 'origem', name: 'Origem'},
];


export default function TableDiagnosisServiceOrder (props) {
  const history = useHistory();

  const {serviceOrderDiagnosis} = props;

  const dataTable = serviceOrderDiagnosis ? serviceOrderDiagnosis.map(item => {
    const equip = item.equipamento[0] || {};
    return {
      numero_ordem_servico: item.numero_ordem_servico,
      marca: equip.marca || '',
      modelo: equip.modelo || '',
      instituicao_de_origem: equip.instituicao_de_origem || '',
      numero_de_serie: equip.numero_de_serie || '',
      origem: equip.nome_instituicao_origem || '',
    };
  }) : [];

  function openFormDiagnosis (value) {
    history.push({
      pathname: '/novo-diagnostico',
      state: {
        data: serviceOrderDiagnosis.find(item => item.numero_ordem_servico === value.numero_ordem_servico)
      }
    }, [serviceOrderDiagnosis]);
  }

  const menuOptions = [
    helperPropsColorIconButton('Efetuar diagnóstico', openFormDiagnosis, 'white', orange[600], orange[700],
      <EditIcon fontSize={"small"}/>)
  ];

  return (
    <React.Fragment>
      <div style={{marginTop: "2rem"}}>
        <Grid
          container
          justify={"space-between"}
        >
          <Grid
            item
            xs={"auto"}
          >
            <Typography
              variant={"h5"}
              component={"h5"}
            >
              Ordens de serviço com diagnóstico cadastrado
            </Typography>
          </Grid>
          <Grid
            item
            xs={"auto"}
          ></Grid>
        </Grid>
      </div>

      <ActionTableList
        actionIconButton={true}
        dataTable={dataTable}
        headerTable={headerData}
        menuOptions={menuOptions}
      >
      </ActionTableList>
    </React.Fragment>
  );
}