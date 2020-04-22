import React, {useState} from "react";
import Form from "./Form";
import Layout from "../_layout/Layout";
import {useHistory} from "react-router-dom";

export default function IndexFormEntrega(props) {
  const history = useHistory();
  const [equipment] = useState(props.location.state.data);
  if (!equipment) {
    history.goBack();
  }

  return (
    <Layout>
      <Form equipment={equipment} />
    </Layout>
  );
}
