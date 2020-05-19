import React from 'react';
import AccessoryFormRow from './AccessoryFormRow';
import ProtoTypes from 'prop-types';


function AccessoryFormList (props) {
  const {
    atualizarAcessorioParent,
    adicionarAcessorio,
    removerLinha,
    accessories
  } = props;

  return (
    <React.Fragment>
      {
        accessories.map((accessory, index) => (
            <AccessoryFormRow
              ultimo={index === (accessory.length - 1)}
              penultimo={index === (accessory.length - 2)}
              acessorio={accessory}
              atualizarAcessorio={atualizarAcessorioParent}
              adicionarAcessorio={adicionarAcessorio}
              removerLinha={removerLinha}
              index={index}
              key={index}
            />
          )
        )
      }
    </React.Fragment>
  );
}

AccessoryFormList.protoType = {
  acessorios: ProtoTypes.array
};

export default AccessoryFormList;