import React, {useEffect, useState} from "react";
import FormDiagnosis from "./FormDiagnosis";
import Layout from "../_layout/Layout";
import {useHistory} from "react-router-dom";
import {ServiceOrderDiagnosis} from "../../models/serviceOrder";

export default function IndexFormDiagnosis (props) {
  useEffect(() => {
    if (props.location && props.location.state && props.location.state.data) {
      setServiceOrder(
        Object.assign({}, {diagnostico: ServiceOrderDiagnosis()}, props.location.state.data)
      );
    }
  }, [props]);

  const history = useHistory();

  const [serviceOrder, setServiceOrder] = useState({});

  if (!serviceOrder) {
    history.goBack();
  }

  return <Layout>
    <FormDiagnosis serviceOrder={serviceOrder}/>;
  </Layout>;
}
