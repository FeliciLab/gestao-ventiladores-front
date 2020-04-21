import React, {useEffect, useState} from "react";
import FormDiagnosis from "./FormDiagnosis";
import Layout from "../_layout/Layout";
import {useHistory} from "react-router-dom";

export default function IndexFormDiagnosis (props) {
  useEffect(() => {
    if (props.location && props.location.state && props.location.state.data) {
      setEquipment(props.location.state.data)
    }
  }, [props])
  const history = useHistory();

  const [equipment, setEquipment] = useState({});

  if (!equipment) {
    history.goBack();
  }

  return <Layout>
    <FormDiagnosis equipment={equipment}/>;
  </Layout>;
}
