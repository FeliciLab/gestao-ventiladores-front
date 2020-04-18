import React, {useEffect} from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import PropTypes from 'prop-types';
import ActionTableHeaderLayout from "./ActionTableHeaderLayout";
import ActionTableBodyLayout from "./ActionTableBodyLayout";

const ActionTableList = (props) => {
  const [dataTable, setDataTable] = React.useState(props.dataTable || []);
  const {headerTable, menuOptions} = props;

  useEffect(() => {
    setDataTable(props.dataTable);
  }, [dataTable, props]);

  return (
    <div style={{marginTop: '2rem'}}>
      <TableContainer>
        <Table
          aria-labelledby="tableTitle"
          aria-label="enhanced table"
        >
          <ActionTableHeaderLayout headerData={headerTable}/>
          <ActionTableBodyLayout
            data={dataTable}
            headerKeys={headerTable.map(item => item.id)}
            menuOptions={menuOptions || []}
          />
        </Table>
      </TableContainer>
    </div>
  );
};

ActionTableList.protoType = {
  dataTable: PropTypes.array.isRequired,
  headerTable: PropTypes.array.isRequired,
  classes: PropTypes.object
};
export default ActionTableList;