import React from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import CabecalhoTabelaOrdemServico from "./CabecalhoTabelaOrdemServico";
import {makeStyles} from "@material-ui/core/styles";
import ConteudoTabelaOrdemServico from "./ConteudoTabelaOrdemServico";
import BarraAcaoTabelaOrdemServico from "./BarraAcaoTabelaOrdemServico";

function createData (numeroOrdemServico, marca, modelo, origem, checked) {
  return {numeroOrdemServico, marca, modelo, origem, checked};
}

const useStyles = makeStyles(() => ({
  espacamento: {
    marginTop: '15px'
  }
}));

export default function TabelaOrdemServico (props) {
  const classes = useStyles();
  const [dados, setDados] = React.useState([]);

  if (props.dados.length > 0 && dados.length === 0) {
    setDados(props.dados.length === 0 ? [] : props.dados.map(
      dado => createData(
        dado['número_da_ordem_de_serviço'],
        dado['selecione_a_marca_do_equipamento'],
        dado['selecione_o_modelo_do_equipamento'],
        dado['informe_o_nome_da_instituição_de_origem'],
        false
      )
      )
    );
  }

  function atualizarLinhaSelecionada (numOrdemServico) {
    setDados(dados.map(item => {
      if (item.numeroOrdemServico === numOrdemServico) {
        item.checked = !item.checked;
      }
      return item;
    }));
  }

  function atualizarTodasLinhaSelecionada (checked) {
    setDados(dados.map(item => {
      item.checked = !checked;
      return item;
    }));
  }


  function abrirImpressao () {
    return false;
  }

  return (
    <div className={classes.espacamento}>
      <BarraAcaoTabelaOrdemServico abrirImpressao={abrirImpressao} selecionados={dados.filter(item => item.checked)} dadosOriginais={props.dados}/>
      <TableContainer>
        <Table
          aria-labelledby="tableTitle"
          aria-label="enhanced table"
        >
          <CabecalhoTabelaOrdemServico selecionados={dados.filter(item => item.checked)} numTotalLinhas={dados.length} atualizarTodasLinhaSelecionada={atualizarTodasLinhaSelecionada}></CabecalhoTabelaOrdemServico>
          <ConteudoTabelaOrdemServico dados={dados} atualizarLinhaSelecionada={atualizarLinhaSelecionada}></ConteudoTabelaOrdemServico>
        </Table>
      </TableContainer>
    </div>
  );
}