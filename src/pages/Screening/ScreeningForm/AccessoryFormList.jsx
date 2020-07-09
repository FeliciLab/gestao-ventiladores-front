import React from 'react';
import PropTypes from 'prop-types';
import AccessoryFormRow from './AccessoryFormRow';
import { randomIndex } from '../../../utils';

const AccessoryFormList = (props) => {
  const {
    atualizarAcessorioParent,
    adicionarAcessorio,
    removerLinha,
    accessories,
    items,
  } = props;

  console.log(items);
  return (
    <>
      {accessories.map((accessory, index) => (
        <AccessoryFormRow
          ultimo={index === accessory.length - 1}
          penultimo={index === accessory.length - 2}
          acessorio={accessory}
          atualizarAcessorio={atualizarAcessorioParent}
          adicionarAcessorio={adicionarAcessorio}
          removerLinha={removerLinha}
          index={index}
          key={randomIndex()}
          items={items}
        />
      ))}
    </>
  );
};

AccessoryFormList.propTypes = {
  atualizarAcessorioParent: PropTypes.func.isRequired,
  adicionarAcessorio: PropTypes.func.isRequired,
  removerLinha: PropTypes.func.isRequired,
  accessories: PropTypes.instanceOf(Array).isRequired,
};

export default AccessoryFormList;
