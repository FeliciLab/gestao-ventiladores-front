import React from 'react';
import ActionBarLayout from "../_common/SelectableTable/ActionBarLayout";
import {Redirect} from "react-router-dom";

const ActionBar = (props) => {
  const {selectedData} = props;
  const actionPrint = () => {
    return (
      <Redirect
        push
        to={{
          pathname: "/osprint",
          state: {
            data: selectedData
          }
        }}
      >
      </Redirect>
    );
  };
  return (
    <ActionBarLayout
      action={actionPrint}
      titleButton="Imprimir Ordem de Serviços"
      titleBar="Listagem de Triagens"
    />);
};

export default ActionBar;