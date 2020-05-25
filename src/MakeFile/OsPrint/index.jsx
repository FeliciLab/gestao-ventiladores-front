import React from 'react';
import PropTypes from 'prop-types';
import DadosEquipamento from './DadosEquipamento';
import TabelaAcessorios from './TabelaAcessorios';
import QuadroDiagnosticos from './QuadroDiagnostico';
import CheckBoxDiagnostic from './CheckBoxDiagnostic';
import Cabecalho from './Cabecalho';
import SubtituloPagina from './SubtituloPagina';
import Rodape from './Rodape';


const getDate = (obj) => new Date(obj.$date || obj);

const OsPrint = (props) => {
  const { location } = props;
  const { data } = location.state;

  const checkBoxClinic = ['Circuito duplo/UTI/COVID-19', 'Circuito único/Enfermaria/Não COVID-19', 'Transporte'];
  const checkBoxTechnical = ['Verificação/Análise', 'Aguardando', 'Liberado', 'Sem reparo'];

  return (
    <div className="portaint-print page-container">
      {
        data.map((row) => (
          <div key={row.numero_ordem_servico}>
            <div className="page">
              <div className="page-content">
                <Cabecalho
                  pagina="01"
                  subtitle="Triagem do equipamento"
                  numero={row.numero_ordem_servico}
                  datahora={getDate(row.created_at)}
                />
              </div>
              <div className="page-content">
                <SubtituloPagina texto="1. Cadastro de Equipamento" />
              </div>
              <div className="page-content">
                <div className="border-black">
                  <DadosEquipamento equipamento={row.equipamento[0]} />
                </div>
              </div>
              <div className="page-content">
                <SubtituloPagina texto="2. Relação de Material / Acessórios Entregues" />
              </div>
              <div className="page-content">
                <TabelaAcessorios equipamento={row} />
              </div>
              <div className="page-content">
                <Rodape
                  numero={row.numero_ordem_servico}
                  pagina="01"
                />
              </div>
            </div>


            <div className="page">
              <div className="page-content">
                <Cabecalho
                  pagina="02"
                  subtitle="Diagnóstico do equipamento"
                  numero={row.numero_ordem_servico}
                  datahora={getDate(row.created_at)}
                />
              </div>
              <div className="page-content">
                <SubtituloPagina texto="1. Classificação do ventilador" />
              </div>
              <div className="page-content">
                <div className="page-content">
                  <CheckBoxDiagnostic items={checkBoxClinic} />
                </div>
              </div>

              <div className="page-content">
                <SubtituloPagina texto="2. Resultado do Diagnóstico Clínico" />
              </div>
              <div className="page-content">
                <div className="page-content">
                  <QuadroDiagnosticos numberRows={5} />
                </div>
              </div>

              <div className="page-content">
                <SubtituloPagina texto="3. Acessório que necessita" />
              </div>
              <div className="page-content">
                <div className="page-content">
                  <QuadroDiagnosticos numberRows={10} />
                </div>
              </div>

              <div className="page-content">
                <Rodape
                  numero={row.numero_ordem_servico}
                  pagina="02"
                />
              </div>
            </div>

            <div className="page">
              <div className="page-content">
                <Cabecalho
                  pagina="03"
                  subtitle="Diagnóstico do equipamento"
                  numero={row.numero_ordem_servico}
                  datahora={getDate(row.created_at)}
                />
              </div>
              <div className="page-content">
                <SubtituloPagina texto="1. Resultado do Diagnóstico Técnico" />
              </div>
              <div className="page-content">
                <div className="page-content">
                  <QuadroDiagnosticos numberRows={5} />
                </div>
              </div>
              <div className="page-content">
                <SubtituloPagina texto="2. Demanda por Serviço" />
              </div>
              <div className="page-content">
                <div className="page-content">
                  <QuadroDiagnosticos numberRows={5} />
                </div>
              </div>
              <div className="page-content">
                <SubtituloPagina texto="3. Demanda por Insumo" />
              </div>
              <div className="page-content">
                <div className="page-content">
                  <QuadroDiagnosticos numberRows={5} />
                </div>
              </div>
              <div className="page-content">
                <div className="page-content">
                  <CheckBoxDiagnostic items={checkBoxTechnical} />
                </div>
              </div>
              <div className="page-content">
                <Rodape
                  numero={row.numero_ordem_servico}
                  pagina="03"
                />
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

OsPrint.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      data: {},
    }),
  }).isRequired,
};

export default OsPrint;
