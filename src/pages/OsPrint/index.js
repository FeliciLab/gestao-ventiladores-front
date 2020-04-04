import React from 'react';
import googlePublishedWebCsvMapper from "./googlePublishedWebCsvMapper";
import axios from "axios";
import {useLocation} from 'react-router-dom';
import DadosEquipamento from "./DadosEquipamento";
import "./print.css";
import TituloOrdemServico from "./TituloOrdemServico";
import TabelaAcessoriso from "./TabelaAcessoriso";
import QuadroDiagnosticos from "./QuadroDiagnostico";


export default function OsPrint () {
  const query = new URLSearchParams(useLocation().search);

  const [csvData, setCsvData] = React.useState([])

  if (csvData.length === 0) {
    axios.get(query.get('url'))
      .then(response => {
        const csvData = googlePublishedWebCsvMapper(response.data);
        setCsvData(csvData)
      })
    return (<div>Consultando dados...</div>)
  }

  return (
    <div className={'page-container'}>
      {
        csvData.map((data, index) =>
          <div key={index}>
            <div className={'page'}>
              <div className={'page-content'}>
                <TituloOrdemServico equipamento={data}/>
              </div>
              <div className={'page-content'}>
                <div className={'border-black'}>
                  <DadosEquipamento equipamento={data}/>
                </div>
              </div>
              <div className={'page-content'}>
                <TabelaAcessoriso equipamento={data}/>
              </div>
            </div>
            <div className={'page'}>
              <div className={'page-content'}>
                <TituloOrdemServico equipamento={data}/>
              </div>
              <div className={'page-content'}>
                <QuadroDiagnosticos titulo="Diagnóstico Clínico"/>
              </div>
              <div className={'page-content'}>
                <QuadroDiagnosticos titulo="Diagnóstico Técnico"/>
              </div>
              <div className={'page-content'}>
                <QuadroDiagnosticos titulo="Ações Necessárias"/>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}