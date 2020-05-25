import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import ActionTableHeaderLayout from './ActionTableHeaderLayout';
import ActionTableBodyLayout from './ActionTableBodyLayout';


const ActionTableList = (props) => {
  const {
    dataTable,
    headerTable,
    menuOptions,
    actionIconButton,
  } = props;

  const [headerTableIds, setHeaderTableIds] = useState([]);

  useEffect(() => {
    setHeaderTableIds(headerTable.map((item) => item.id));
  }, [headerTable]);

  return (
    <div style={{ marginTop: '2rem' }}>
      <TableContainer>
        <Table
          aria-labelledby="tableTitle"
          aria-label="enhanced table"
        >
          <ActionTableHeaderLayout headerData={headerTable} />
          <ActionTableBodyLayout
            actionIconButton={actionIconButton}
            data={dataTable}
            headerKeys={headerTableIds}
            menuOptions={menuOptions}
          />
        </Table>
      </TableContainer>
    </div>
  );
};

ActionTableList.defaultProps = {
  actionIconButton: false,
  menuOptions: [],
};

ActionTableList.propTypes = {
  dataTable: PropTypes.instanceOf(Array).isRequired,
  headerTable: PropTypes.instanceOf(Array).isRequired,
  menuOptions: PropTypes.instanceOf(Array),
  actionIconButton: PropTypes.bool,
};
export default ActionTableList;
