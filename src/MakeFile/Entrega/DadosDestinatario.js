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
          <CampoConteudo
            titulo="Unidade/Instituição"
            texto="local AKI"
          ></CampoConteudo>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className={"header-content"}>
          <CampoConteudo titulo="Cidade Destino" texto="cidade"></CampoConteudo>
        </div>
      </Grid>

      <Grid item xs={6}>
        <div className={"header-content"}>
          <CampoConteudo titulo="CNPJ" texto="000000000"></CampoConteudo>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className={"header-content"}>
          <CampoConteudo
            titulo="Endereço de destino"
            texto="rua dos bobos"
          ></CampoConteudo>
        </div>
      </Grid>
    </Grid>
  );
}
