import React from 'react';
import PropTypes from 'prop-types';
import FormDiagnosis from './FormDiagnosis';
import Layout from '../../_layout/Layout';


const IndexFormDiagnosis = (props) => {
  const { serviceOrder } = props;
  if (!serviceOrder) {
    return <></>;
  }

  return (
    <Layout>
      <FormDiagnosis data={serviceOrder} />
    </Layout>
  );
};

IndexFormDiagnosis.propTypes = {
  serviceOrder: PropTypes.instanceOf(Object).isRequired,
};

export default IndexFormDiagnosis;
