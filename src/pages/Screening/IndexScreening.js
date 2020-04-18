import React, {useEffect, useState} from 'react';
import {getAllScreeningByStatus} from "../../models/equipamentos";
import Layout from "../_layout/Layout";
import TableCheckedList from "../_common/SelectableTable/TableCheckedList";
import Container from "@material-ui/core/Container";
import {useHistory} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import withStyles from "@material-ui/core/styles/withStyles";

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
    {id: 'instituicao_de_origem', name: 'Origem'}
  ];

  useEffect(() => {
    if (screening.length === 0 && !requestBlock) {
      getAllScreeningByStatus()
        .then(result => {
          if (!result) return;
          setScreening(result);
          setDataTable(result.map(item => {
            return {
              numero_ordem_servico: item.numero_ordem_servico,
              marca: item.triagem.marca || '',
              modelo: item.triagem.modelo || '',
              instituicao_de_origem: item.triagem.instituicao_de_origem || '',
              numero_de_serie: item.triagem.numero_de_serie,
            };
          }));
        })
        .catch(error => {
          console.log('consultando triagem', error);
        });
      setRequestBlock(true);
    }
  }, [requestBlock, screening]);

  const actionPrint = (data) => {
    history.push({
      pathname: "/osprint",
      state: {
        data: screening.filter(item => data.find(d => d.numero_ordem_servico === item.numero_ordem_servico))
      }
    }, [screening]);
  };

  return (
    <Layout>
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
                startIcon={<AddIcon/> }
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
          actionBarTextButton="Gerar Ordem de Serviços"
        />
      </Container>

    </Layout>
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