import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Cabecalho from "../OsPrint/Cabecalho";


export default function IndexDeliveryPrint (props) {
  const {data} = useState(props.location.state.data);
  return (<React.Fragment>
    <Grid container>
      <Grid item xs={12}>
        <Cabecalho
        ></Cabecalho>
      </Grid>
    </Grid>
  </React.Fragment>)
}