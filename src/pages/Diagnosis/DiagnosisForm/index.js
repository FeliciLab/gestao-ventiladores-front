import React from "react";
import FormDiagnosis from "./FormDiagnosis";
import Layout from "../../_layout/Layout";


export default function IndexFormDiagnosis (props) {
  const {serviceOrder} = props
  if (!serviceOrder) {
    return <React.Fragment></React.Fragment>
  }

  return <Layout>
    <FormDiagnosis data={serviceOrder}/>;
  </Layout>;
}
