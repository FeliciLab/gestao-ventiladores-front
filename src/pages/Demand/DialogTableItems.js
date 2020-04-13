import React, {useEffect, useState} from 'react';
import TableCheckedList from "../_common/SelectableTable/TableCheckedList";
import {useHistory} from 'react-router-dom';

const headerData = [
  {id: "nome", name: "Nome"},
  {id: "tipo", name: "Tipo"},
  {id: "quantidade", name: "Quantidade"},
  {id: "descricao", name: "Descrição"},
  {id: "valor", name: "Valor"},
  {id: "prioridade", name: "Prioridade"},
];

const DialogTableItems = (props) => {
  const history = useHistory();

  const [dataTable, setDataTable] = useState([]);
  const [itemsDialog, setItemsDialog] = useState([])

  useEffect(() => {
    setDataTable(props.dataTable || []);
    setItemsDialog(props.itemsDialog.map(item => {
      if (item.tipo === 'pecas') item.tipo = "Peças";
      if (item.tipo === 'acessorio') item.tipo = "Acessório";
      return item
    }) || []);
  }, [props]);

  const actionPrint = (data) => {
    history.push({
      pathname: "/ordem-compra",
      state: {
        data: {
          equipment: dataTable,
          items: itemsDialog.filter(item => data.find(d => d.nome === item.nome))
        }
      }
    }, [dataTable]);
  };

  return (
      <TableCheckedList
        dataTable={itemsDialog}
        selectKeyField="nome"
        headerTable={headerData}
        actionFunction={actionPrint}
        actionBarTitle="Lista de Itens"
        actionBarTextButton="Gerar Ordem de Compra"
      />
  );
};

export default DialogTableItems;