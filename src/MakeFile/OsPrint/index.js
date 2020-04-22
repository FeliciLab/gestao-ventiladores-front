import React from 'react';
import "./print.css";
import TabelaAcessoriso from "./TabelaAcessoriso";
import Cabecalho from "./Cabecalho";
import SubtituloPagina from "./SubtituloPagina";
import Rodape from "./Rodape";


export default function OsPrint (props) {
  const [csvData] = React.useState(props.location.state.selecionados)

  return (
    <div className={'page-container'}>
      {
        csvData.map((data, index) =>
          <div key={index}>
            <div className={'page'}>
              <div className={'page-content'}>
                <Cabecalho pagina="01" subtitle={'ordem de compra'} numero={data.id} datahora={data.id}></Cabecalho>
              </div>
              <div className={'page-content'}>
                <SubtituloPagina texto="1. Descrissão do Material"></SubtituloPagina>
              </div>

              <div className={'page-content'}>
                <TabelaAcessoriso equipamento={data}/>
              </div>
              <div className={'page-content'}>
                <Rodape numero={data.id} pagina={'01'}/>
              </div>
            </div>

          </div>
        )
      }
    </div>
  )
}