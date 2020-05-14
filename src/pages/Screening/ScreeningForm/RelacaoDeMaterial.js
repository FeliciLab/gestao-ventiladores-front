import React from "react";
import {Acessorio} from "../../../models/acessorio";
import PropTypes from 'prop-types';
import AccessoryFormList from "./AccessoryFormList";
import Grid from "@material-ui/core/Grid";
import PlusOneIcon from '@material-ui/icons/PlusOne';
import {blue} from "@material-ui/core/colors";
import ThemeButton from "../../_common/forms/ThemeButton";
import makeStyles from "@material-ui/core/styles/makeStyles";


const acessorioModel = Acessorio();

const RelacaoDeMaterial = (props) => {
  const classes = useStyle()
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
    atualizarAcessorios(acessorios.slice().filter((i, ind) => index !== ind));
  }

  return (
    <React.Fragment>
      <AccessoryFormList
        accessories={acessorios}
        atualizarAcessorioParent={atualizarAcessorioParent}
        adicionarAcessorio={adicionarAcessorio}
        removerLinha={removerLinha}
      />
      <Grid container justify={'flex-end'} className={classes.actionGrid}>
        <Grid item xs={'auto'}>
          <ThemeButton
            onClick={adicionarAcessorio}
            bgColor={blue[600]}
            hoverColor={blue[800]}
            startIcon={<PlusOneIcon/>}
          >
            Item
          </ThemeButton>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const useStyle = makeStyles(theme => ({
  actionGrid: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(1)
  }
}))

RelacaoDeMaterial.protoType = {
  acessorios: PropTypes.array
};

export default RelacaoDeMaterial;