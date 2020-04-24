import React, {useState} from 'react';
import {Button, Container, Grid} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import AddIcon from "@material-ui/icons/Add";
import {getAllServiceOrder} from "../../modelServices/serviceOrderService";
import {useHistory} from 'react-router-dom';
import TableCheckedList from "../_common/SelectableTable/TableCheckedList";
import moment from 'moment-timezone';

const IndexScreening = (props) => {
  const history = useHistory();

  const [requestBlock, setRequestBlock] = useState(false);
  const [screening, setScreening] = useState([]);
  const [dataTable, setDataTable] = useState([]);

  const headerData = [
    {id: 'numero_ordem_servico', name: 'Ordem de Serviço'},
    {id: 'numero_de_serie', name: 'Número de Série'},
    {id: 'marca', name: 'Marca'},
    {id: 'modelo', name: 'Modelo'},
    {id: 'origem', name: 'Origem'},
    {id: 'created_at', name: 'Data de criação'}
  ];

  if (screening.length === 0 && !requestBlock) {
    getAllServiceOrder()
      .then(result => {
        if (!result) return;
        setScreening(result);
        setDataTable(result.sort((a, b) => {
          if (typeof (a.created_at) === 'object' && a.created_at && a.created_at['$date']) {
            a = a.created_at['$date'];
          }
          if (typeof (b.created_at) === 'object' && b.created_at && b.created_at['$date']) {
            b = b.created_at['$date'];
          }
          return new Date(b) - new Date(a)
        }).map(item => {
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
        }));
      })
      .catch(error => {
        console.log('consultando triagem', error);
      });

    setRequestBlock(true);
  }

  function actionPrint (data) {
    history.push({
      pathname: "/osprint",
      state: {
        data: screening.filter(item => data.find(d => d.numero_ordem_servico === item.numero_ordem_servico))
      }
    }, [screening]);
  };

  return (
    <Container>
      <div style={{width: '100%', marginTop: '2rem'}}>
        <Grid
          container
          justify={"flex-end"}
        >
          <Grid
            item
            xs="auto"
          >
            <ColorButton
              onClick={() => history.push('nova-triagem')}
              variant={"contained"}
              color="primary"
              disableElevation
              startIcon={<AddIcon/>}
            >
              Nova Triagem
            </ColorButton>
          </Grid>
        </Grid>
      </div>
      <TableCheckedList
        dataTable={dataTable}
        selectKeyField="numero_ordem_servico"
        headerTable={headerData}
        actionFunction={actionPrint}
        actionBarTitle="Lista de Equipamento (Nenhum item selecionado)"
        actionBarTextButton="Visualizar Ordem de Serviços"
      />
    </Container>
  );
};

const ColorButton = withStyles((theme) => ({
  root: {
    color: 'white',
    borderRadius: '20px',
    backgroundColor: theme.palette.warning.main,
    '&:hover': {
      backgroundColor: theme.palette.warning.light,
    },
  },
}))(Button);

export default IndexScreening;