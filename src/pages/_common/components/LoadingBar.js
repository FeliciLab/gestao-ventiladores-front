import React from 'react';
import Layout from "../../_layout/Layout";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";


export default function LoadingBar (props) {
  const {progress} = props;

  return (<React.Fragment>
    <Layout>
      <Container style={{padding: '5rem'}}>
        <Typography variant={"h6"}>Carregando dados...</Typography>
        <LinearProgress variant="determinate" value={progress}/>
      </Container>
    </Layout>
  </React.Fragment>);
}