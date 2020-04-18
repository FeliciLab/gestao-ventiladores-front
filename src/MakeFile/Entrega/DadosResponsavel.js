import React, {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import CampoConteudo from "./CampoConteudo";

export default function DadosDestinatario(props) {
  useEffect(() => {
    setEquipamento(props.data);
  }, [props.data]);

  const [data, setEquipamento] = useState({entrega: {}});
  if (!props.data) {
    return <div></div>;
  }

  return (
    <Grid container justify="center">
      <Grid item xs={6}>
        <div className={"header-content"}>
          <CampoConteudo titulo="Nome" texto="local AKI"></CampoConteudo>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className={"header-content"}>
          <CampoConteudo titulo="Contato" texto="cidade"></CampoConteudo>
        </div>
      </Grid>

      <Grid item xs={6}>
        <div className={"header-content"}>
          <CampoConteudo titulo="Assinatura" texto="cidade"></CampoConteudo>
        </div>
      </Grid>
    </Grid>
  );
}
