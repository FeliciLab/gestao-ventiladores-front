import React from 'react';
import googlePublishedWebCsvMapper from "./googlePublishedWebCsvMapper";
import axios from "axios";
import {useLocation} from 'react-router-dom';
import DadosEquipamento from "./DadosEquipamento";
import "./print.css";
import TituloPagina from "./TituloPagina";
import TabelaAcessoriso from "./TabelaAcessoriso";
import QuadroDiagnosticos from "./QuadroDiagnostico";
import Cabecalho from "./Cabecalho";
import SubtituloPagina from "./SubtituloPagina";
import Rodape from "./Rodape";


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
                <Cabecalho pagina="01" numero={data['número_da_ordem_de_serviço']} datahora={data['carimbo_de_data/hora']}></Cabecalho>
              </div>
              <div className={'page-content'}>
                <TituloPagina titulo="TRIAGEM DO EQUIPAMENTO"></TituloPagina>
              </div>
              <div className={'page-content'}>
                <SubtituloPagina texto="1. Cadastro de Equipamento"></SubtituloPagina>
              </div>
              <div className={'page-content'}>
                <div className={'border-black'}>
                  <DadosEquipamento equipamento={data}/>
                </div>
              </div>
              <div className={'page-content mt-10'}>
                <TabelaAcessoriso equipamento={data}/>
              </div>
              <div className={'page-content mt-10'}>
                <Rodape numero={data['número_da_ordem_de_serviço']} pagina={'01'}/>
              </div>
            </div>

            <div className={'page'}>
              <div className={'page-content'}>
                <Cabecalho pagina="02" numero={data['número_da_ordem_de_serviço']} datahora={data['carimbo_de_data/hora']}></Cabecalho>
              </div>
              <div className={'page-content'}>
                <TituloPagina titulo="DIAGNÓSTICO DO EQUIPAMENTO"></TituloPagina>
              </div>
              <div className={'page-content'}>
                <SubtituloPagina texto="1. Diagnóstico Clínico"></SubtituloPagina>
              </div>
              <div className={'page-content'}>
                <div className={'page-content'}>
                  <QuadroDiagnosticos titulo="Diagnóstico Clínico"/>
                </div>
              </div>
              <div className={'page-content'}>
                <SubtituloPagina texto="2. Diagnóstico Técnico"></SubtituloPagina>
              </div>
              <div className={'page-content'}>
                <div className={'page-content'}>
                  <QuadroDiagnosticos titulo="Diagnóstico Clínico"/>
                </div>
              </div>
              <div className={'page-content'}>
                <SubtituloPagina texto="3. Demanda por Insumos"></SubtituloPagina>
              </div>
              <div className={'page-content'}>
                <div className={'page-content'}>
                  <QuadroDiagnosticos titulo="Diagnóstico Clínico"/>
                </div>
              </div>
              <div className={'page-content'}>
                <SubtituloPagina texto="4. Demanda por Serviços"></SubtituloPagina>
              </div>
              <div className={'page-content'}>
                <div className={'page-content'}>
                  <QuadroDiagnosticos titulo="Diagnóstico Clínico"/>
                </div>
              </div>
              <div className={'page-content mt-10'}>
                <Rodape numero={data['número_da_ordem_de_serviço']} pagina={'02'}/>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}