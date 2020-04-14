import React, {useState} from "react";
import FormDiagnosis from "./FormDiagnosis";
import Layout from "../_layout/Layout";
import {useHistory} from "react-router-dom";

export default function IndexFormDiagnosis (props) {
  const history = useHistory();

  const [equipment] = useState(props.location.state.data);

  if (!equipment) {
    history.goBack();
  }

  return <Layout>
    <FormDiagnosis equipment={equipment}/>;
  </Layout>;
}
