import React, {useEffect, useState} from 'react';
import {getScreeningByStatus} from "../../models/equipamentos";
import Layout from "../_layout/Layout";
import TableCheckedList from "../_common/SelectableTable/TableCheckedList";
import Container from "@material-ui/core/Container";
import {useHistory} from 'react-router-dom';

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
      getScreeningByStatus('triagem')
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
  });

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
        <TableCheckedList
          dataTable={dataTable}
          selectKeyField="numero_ordem_servico"
          headerTable={headerData}
          actionFunction={actionPrint}
          actionBarTitle="Lista de Equipamento"
          actionBarTextButton="Gerar Ordem de Serviços"
        />
      </Container>

    </Layout>
  );
};

export default IndexScreening;