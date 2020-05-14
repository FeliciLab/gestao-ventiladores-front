import React from "react";
import FormDiagnosis from "./FormDiagnosis";
import Layout from "../../_layout/Layout";
import {useHistory} from "react-router-dom";


export default function IndexFormDiagnosis (props) {
  const history = useHistory();
  const {data} = props.location.state
  if (!data) {
    history.goBack();
  }

  return <Layout>
    <FormDiagnosis data={data}/>;
  </Layout>;
}
