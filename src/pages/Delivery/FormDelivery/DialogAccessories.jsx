import React, { useEffect, useState } from 'react';
import ThemeButton from '../../_common/forms/ThemeButton';
import FullDialog from '../../_common/components/FullDialog';
import RelacaoDeMaterial from '../../Screening/ScreeningForm/RelacaoDeMaterial';
import SaveIcon from '@material-ui/icons/Save';
import orange from '@material-ui/core/colors/orange';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import {Acessorio} from "../../../models/acessorio";


// const acessorioModel = Acessorio();

export default function DialogAccessories (props) {
  const classes = useStyle();
  const {
    open,
    keyIndex,
    accessories,
    updateAccessories,
    handleClose
  } = props;

  const [formAccessories, setFormAccessories] = useState([]);

  useEffect(() => {
    setFormAccessories(accessories);
  }, [accessories]);

  function handleUpdateAccessories (_accessories) {
    setFormAccessories(_accessories);
  }

  function saveAccessories () {
    updateAccessories(keyIndex, formAccessories.filter(item => item.descricao !== ''))
  }

  return <React.Fragment>
    <FullDialog
      open={open}
      title={'Definição dos acessórios'}
      handleClose={handleClose}
      actionChildren={<ThemeButton
        startIcon={<SaveIcon/>}
        onClick={saveAccessories}
        name={'Salvar'}
        color={orange[600]}
        bgColor={'#FFF'}
        hoverColor={orange[50]}
      >
        Salvar
      </ThemeButton>}
    >
      <Container className={classes.containerContent}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant={'h5'}>Observações:</Typography>
          </Grid>
          <Grid item xs={12}>
            <ul>
              <li>A lista de itens abaixo foi inicialmente baseado nos materiais definidos na momendo da triagem.</li>
              <li>Os itens aqui alterados <strong>não irão alterar</strong> os acessórios definidos na triagem.</li>
              <li>Os itens abaixo <strong>estão somente relacionados à entrega</strong> do equipamento</li>
            </ul>
          </Grid>
          <Grid item xs={12}>
            <RelacaoDeMaterial
              acessorios={formAccessories}
              atualizarAcessorios={handleUpdateAccessories}
            />
          </Grid>
        </Grid>

      </Container>
    </FullDialog>
  </React.Fragment>;
}

const useStyle = makeStyles((theme) => ({
  containerContent: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));