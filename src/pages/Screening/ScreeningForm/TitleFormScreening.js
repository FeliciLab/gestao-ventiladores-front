import React from 'react';
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";
import ThemeButton from "../../_common/forms/ThemeButton";
import Grid from "@material-ui/core/Grid";
import BackspaceSharpIcon from '@material-ui/icons/BackspaceSharp';
import {blue} from "@material-ui/core/colors";


const TitleFormScreening = (props) => {
  const {saveEquipment, cleanForm} = props;
  return (
    <React.Fragment>
      <Grid container justify={'space-between'}>
        <Grid item xs={'auto'}>
          <Typography style={{fontSize: 20, fontWeight: "bold"}}>
            Triagem do Equipamento
          </Typography>
          <Typography style={{fontSize: 14}}>
            Após o recebimento, o cadastro do equipamento deverá ser
            realizado. Para isso, preencha os campos abaixo:
          </Typography>
        </Grid>
        <Grid item xs={'auto'}>
          <ThemeButton
            bgColor={blue[600]}
            hoverColor={blue[800]}
            onClick={cleanForm}
            variant="contained"
            startIcon={<BackspaceSharpIcon/>}
            style={{marginRight: '20px'}}
          >
            Limpar Formulário
          </ThemeButton>

          <ThemeButton
            onClick={saveEquipment}
            variant="contained"
            startIcon={<SaveIcon/>}
          >
            Salvar
          </ThemeButton>
        </Grid>
      </Grid>


    </React.Fragment>
  );
};

export default TitleFormScreening;