import React, {useState} from 'react';
import HeaderPrint from "../../pages/_common/print/HeaderPrint";
import PagePrint from "../../pages/_common/print/PagePrint";
import TopicPrint from "../../pages/_common/print/TopicPrint";
import TablePrint from "../../pages/_common/print/TablePrint";

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

  return (<div className={"landscape-print page-container"}>
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