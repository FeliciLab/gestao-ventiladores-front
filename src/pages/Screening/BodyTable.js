import React from 'react';
import BodyTableLayout from "../_common/SelectableTable/BodyTableLayout";

const BodyTable = (props) => {
  const {data, headerKeys} = props;
  return (
    <BodyTableLayout
      data={data}
      headerKeys={headerKeys}
    />
  );
};

export default BodyTable;