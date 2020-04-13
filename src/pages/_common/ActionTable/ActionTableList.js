import React, {useEffect} from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import PropTypes from 'prop-types';
import ActionBarLayout from "./ActionBarLayout";
import HeaderTableLayout from "./HeaderTableLayout";
import BodyTableLayout from "./BodyTableLayout";

const ActionTableList = (props) => {
  const [dataTable, setDataTable] = React.useState(props.dataTable || []);
  const selectKeyField = props.selectKeyField;
  const headerTable = props.headerTable;

  useEffect(() => {
    setDataTable(props.dataTable);
  }, [dataTable, props]);

  return (
    <div style={{marginTop: '15px'}}>
      <TableContainer>
        <Table
          aria-labelledby="tableTitle"
          aria-label="enhanced table"
        >
          <HeaderTableLayout headerData={headerTable}/>
          <BodyTableLayout
            data={dataTable}
            headerKeys={headerTable.map(item => item.id)}
          >
            {props.children}
          </BodyTableLayout>
        </Table>
      </TableContainer>
    </div>
  );
};

ActionTableList.protoType = {
  dataTable: PropTypes.array.isRequired,
  headerTable: PropTypes.array.isRequired,
  actionFunction: PropTypes.func.isRequired,
  actionBarTitle: PropTypes.string.isRequired,
  actionBarTextButton: PropTypes.string.isRequired,
  selectKeyField: PropTypes.string,
  classes: PropTypes.object
};
export default ActionTableList;