import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const TitleFormScreening = (props) => {
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
      </Grid>
    </React.Fragment>
  );
};

export default TitleFormScreening;