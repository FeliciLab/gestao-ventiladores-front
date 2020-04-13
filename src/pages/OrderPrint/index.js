import React, {useState} from 'react';
import HeaderPrint from "../_common/print/HeaderPrint";
import PagePrint from "../_common/print/PagePrint";
import "../_common/print/print.css";
import "../_common/print/landscapeCss.css";
import TopicPrint from "../_common/print/TopicPrint";
import TablePrint from "../_common/print/TablePrint";

const IndexOrderPrint = (props) => {
  const [data] = useState(props.location.state.data);

  const headerTable = [
    {id: 'tipo', name: 'Tipo'},
    {id: 'nome', name: 'Nome do Item'},
    {id: 'descricao', name: 'Descrição do Item'},
    {id: 'unidade_medida', name: 'Unidade'},
    {id: 'quantidade', name: 'Qtde'},
    {id: 'fabricante', name: 'Frabricante'},
    {id: 'codigo_item', name: 'Código do Item'},
  ];

  return (<div className={"page-container"}>
    <PagePrint>
      <HeaderPrint
        number={data.equipment.numero_ordem_servico}
        subTitle={"ORDEM DE COMPRA"}
        pageNumber={"01"}
      />
      <TopicPrint text={"1. Descrição material"}/>
      <TablePrint headerTable={headerTable} bodyData={data.items} dateTime={new Date()}/>
    </PagePrint>
  </div>);
};

export default IndexOrderPrint;