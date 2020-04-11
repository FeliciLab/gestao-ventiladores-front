import React from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";

export default function TableCheckedList (props) {
  const [dataTable, setDataTable] = React.useState(props.dataTable);
  const {classes, selectKeyField, headerTable, bodyTable, actionBar} = props;

  function checkSelectedRow (keyValue) {
    setDataTable(dataTable.map(item => {
      if (item[selectKeyField] === keyValue) {
        item.checked = !item.checked;
      }
      return item;
    }));
  }

  function checkAllSelectedRows (checked) {
    setDataTable(dataTable.map(item => {
      item.checked = !checked;
      return item;
    }));
  }

  function getClasses (key) {
    if (!classes[key]) return '';
    return Object.value(classes[key]).join(' ');
  }

  return (
    <div className={getClasses('div')}>
      <actionBar/>
      <TableContainer>
        <Table
          className={getClasses('table')}
          aria-labelledby="tableTitle"
          aria-label="enhanced table"
        >
          <headerTable checkAllSelectedRows={checkAllSelectedRows}/>
          <bodyTable checkSelectedRow={checkSelectedRow}/>
        </Table>
      </TableContainer>
      <actionBar/>
    </div>
  );
}