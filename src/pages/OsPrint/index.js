import React from 'react';
import DadosEquipamento from "./DadosEquipamento";
import TabelaAcessoriso from "./TabelaAcessoriso";
import QuadroDiagnosticos from "./QuadroDiagnostico";
import CheckBoxDiagnostic from './CheckBoxDiagnostic';
import Cabecalho from "./Cabecalho";
import SubtituloPagina from "./SubtituloPagina";
import Rodape from "./Rodape";


export default function OsPrint (props) {
  const [csvData] = React.useState(props.location.state.data);

  return (
    <div className={'portaint-print page-container'}>
      {
        csvData.map((data, index) =>
          <div key={index}>
            <div className={'page'}>
              <div className={'page-content'}>
                <Cabecalho
                  pagina="01"
                  subtitle={'Triagem do equipamento'}
                  numero={data['numero_ordem_servico']}
                  datahora={new Date(data['created_at']['$date'])}
                ></Cabecalho>
              </div>
              <div className={'page-content'}>
                <SubtituloPagina texto="1. Cadastro de Equipamento"></SubtituloPagina>
              </div>
              <div className={'page-content'}>
                <div className={'border-black'}>
                  <DadosEquipamento equipamento={data}/>
                </div>
              </div>
              <div className={'page-content'}>
                <SubtituloPagina texto="2. Relação de Material / Acessórios Entregues"></SubtituloPagina>
              </div>
              <div className={'page-content'}>
                <TabelaAcessoriso equipamento={data}/>
              </div>
              <div className={'page-content'}>
                <Rodape
                  numero={data['numero_ordem_servico']}
                  pagina={'01'}
                />
              </div>
            </div>


            <div className={'page'}>
              <div className={'page-content'}>
                <Cabecalho
                  pagina="02"
                  subtitle={'Diagnóstico do equipamento'}
                  numero={data['numero_ordem_servico']}
                  datahora={new Date(data['created_at']['$date'])}
                ></Cabecalho>
              </div>
              <div className={'page-content'}>
                <SubtituloPagina texto="1. Classificação do ventilador"></SubtituloPagina>
              </div>
              <div className={'page-content'}>
                <div className={'page-content'}>
                  <CheckBoxDiagnostic/>
                </div>
              </div>

              <div className={'page-content'}>
                <SubtituloPagina texto="2. Resultado do Diagnóstico Clínico"></SubtituloPagina>
              </div>
              <div className={'page-content'}>
                <div className={'page-content'}>
                  <QuadroDiagnosticos numberRows={5}/>
                </div>
              </div>

              <div className={'page-content'}>
                <SubtituloPagina texto="3. Acessório que necessita"></SubtituloPagina>
              </div>
              <div className={'page-content'}>
                <div className={'page-content'}>
                  <QuadroDiagnosticos numberRows={10}/>
                </div>
              </div>

              <div className={'page-content'}>
                <Rodape
                  numero={data['numero_ordem_servico']}
                  pagina={'01'}
                />
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}