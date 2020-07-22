import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Layout from '../../_layout/Layout';


const LoadingBar = (props) => {
  const { progress } = props;

  return (
    <>
      <Layout data-testid="loadingBar">
        <Container style={{ padding: '5rem' }}>
          <Typography variant="h6">Carregando dados...</Typography>
          <LinearProgress variant="determinate" value={progress} />
        </Container>
      </Layout>
    </>
  );
};

LoadingBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default LoadingBar;
