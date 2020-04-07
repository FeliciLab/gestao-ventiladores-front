import Container from '@material-ui/core/Container';
import React from 'react';
import FormUrlCsv from "./FormUrlCsv";
import TabelaOrdemServico from "./TabelaOrdemServico";
import coletarDadosCsv from "./coletarDadosCsv";

const ListaOrdemServicos = () => {
  const testeCsv = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vReGuRPHIq68zmQ-9iGBLxVKFGoa0FcC8OU5FbCkhcUmdMFoRkbrMyAV2ZYsbcOiE87kTlK6RKpo4h2/pub?output=csv';
  const [csvUrl, setCsvUrl] = React.useState(testeCsv);
  const [toprint, setToprint] = React.useState(false);
  const [listaOrdemServico, setListaOrdemServico] = React.useState([]);

  const changeCsv = (event) => {
    const url = event.target.value;
    setCsvUrl(url);
    setToprint(true);
  };

  const abrirDocumentoOs = (abrir) => {
    if (!abrir) return;
    coletarDadosCsv(csvUrl)
      .then(dadosCsv => {
        setListaOrdemServico(dadosCsv);
      });
  };

  return (
    <Container>
      <FormUrlCsv csvUrl={csvUrl} onMudarCsv={changeCsv} onAbrirDocumento={abrirDocumentoOs} habilitarBotao={toprint}/>
      <TabelaOrdemServico dados={listaOrdemServico}></TabelaOrdemServico>
    </Container>
  );
};

export default ListaOrdemServicos;
