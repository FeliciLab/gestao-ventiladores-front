import React from 'react';
import ActionTableList from "../_common/ActionTable/ActionTableList";
import {Grid, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {orange} from "@material-ui/core/colors";
import QueueIcon from '@material-ui/icons/Queue';
import {helperPropsColorIconButton} from "../_common/forms/ColorIconButton";
import moment from "moment-timezone";

const headerData = [
  {id: 'numero_ordem_servico', name: 'Ordem de Serviço'},
  {id: 'numero_de_serie', name: 'Número de Série'},
  {id: 'marca', name: 'Marca'},
  {id: 'modelo', name: 'Modelo'},
  {id: 'origem', name: 'Origem'},
  {id: 'created_at', name: 'Data de criação'},
];

const TableScreeningServiceOrders = (props) => {
  const history = useHistory();

  const {serviceOrderScreening} = props;

  const dataTable = serviceOrderScreening.map(item => {
    const equip = item.equipamento[0] || {};
    if (typeof (item.created_at) === 'object' && item.created_at && item.created_at['$date']) {
      item.created_at = item.created_at['$date'];
    }
    return {
      numero_ordem_servico: item.numero_ordem_servico,
      marca: equip.marca || '',
      modelo: equip.modelo || '',
      instituicao_de_origem: equip.instituicao_de_origem || '',
      numero_de_serie: equip.numero_de_serie || '',
      origem: equip.nome_instituicao_origem || '',
      created_at: moment.tz(new Date(item.created_at), 'America/Fortaleza').format('DD/MM/Y')
    };
  });

  function openFormDiagnosis (value) {
    history.push({
      pathname: '/novo-diagnostico',
      state: {
        data: serviceOrderScreening.find(item => item.numero_ordem_servico === value.numero_ordem_servico)
      }
    }, [serviceOrderScreening]);
  }

  const menuOptions = [
    helperPropsColorIconButton('Efetuar diagnóstico', openFormDiagnosis, 'white', orange[600], orange[700],
      <QueueIcon fontSize={"small"}/>)
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
              Ordens de serviço com triagem aguardando diagnóstico
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
};

export default TableScreeningServiceOrders;