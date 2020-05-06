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
        typeAbbreviation={'OC'}
        number={data.numero_ordem_compra}
        subTitle={"ORDEM DE COMPRA"}
        pageNumber={"01"}
      />
      <TopicPrint text={"1. Descrição material"}/>
      <TablePrint
        headerTable={headerTable}
        bodyData={data.itens.map(item => Object.assign(item, {tipo: item.tipo === 'pecas' ? "Peça" : "Acessório"}))}
        dateTime={new Date()}
      />
    </PagePrint>
  </div>);
};

export default IndexOrderPrint;