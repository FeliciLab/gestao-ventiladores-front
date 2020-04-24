import React from "react";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import {Acessorio} from "../../../models/acessorio";
import PropTypes from 'prop-types';
import AccessoryFormList from "./AccessoryFormList";

const acessorioModel = Acessorio();

function RelacaoDeMaterial (props) {
  const {acessorios, atualizarAcessorios} = props;

  function adicionarAcessorio () {
    const acess = [...acessorios, Object.assign({}, acessorioModel)];
    atualizarAcessorios(acess);
  }

  function atualizarAcessorioParent (index, value) {
    const acess = acessorios.slice(0);
    acess[index] = Object.assign(acess[index], value);
    atualizarAcessorios(acess);
  }

  function removerLinha (index) {
    const docs = [
      ...acessorios.slice(0, index),
      ...acessorios.slice(index + 1, acessorios.length - 1),
      acessorioModel
    ];

    atualizarAcessorios(docs);
  }

  return (
    <React.Fragment>
      <Grid container justify={"space-between"} alignItems={"center"}>
        <Grid item xs={12} sm={7}>
          <Typography variant="h6" gutterBottom>
            2. Relação de Material / Acessórios Entregues
          </Typography>
        </Grid>
      </Grid>
      <AccessoryFormList
        accessories={acessorios} atualizarAcessorioParent={atualizarAcessorioParent}
        adicionarAcessorio={adicionarAcessorio} removerLinha={removerLinha}
      />
    </React.Fragment>
  );
}

RelacaoDeMaterial.protoType = {
  acessorios: PropTypes.array
};

export default RelacaoDeMaterial;