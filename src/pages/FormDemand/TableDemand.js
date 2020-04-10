import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import {makeStyles} from "@material-ui/core/styles";
import HeaderTableDemand from "./HeaderTableDemand";
import BodyTableDemand from "./BodyTableDemand";
// import BarraAcaoTabelaOrdemServico from "./BarraAcaoTabelaOrdemServico";

function createData(
  id,
  amount,
  name,
  type,
  value,
  provider,
  info,
  checked = false
) {
  return {id, amount, name, type, value, provider, info, checked};
}

export default function TableDemand(props) {
  const classes = useStyles();
  const dataList = props.data;

  const [data, setData] = React.useState([]);

  if (dataList.length > 0 && data.length === 0) {
    setData(
      dataList.length === 0
        ? []
        : dataList.map((item) =>
            createData(
              item.id,
              item.amount,
              item.name,
              item.type,
              item.value,
              item.provider,
              item.checked
            )
          )
    );
  }

  function atualizarLinhaSelecionada(index) {
    setData(
      data.map((item) => {
        if (item.index === index) {
          item.checked = !item.checked;
        }
        return item;
      })
    );
  }

  function atualizarTodasLinhaSelecionada(checked) {
    setData(
      data.map((item) => {
        item.checked = !checked;
        return item;
      })
    );
  }

  // function abrirImpressao() {
  //   return false;
  // }
  console.log("data", data);
  return (
    <div className={classes.espacamento}>
      {/* <BarraAcaoTabelaOrdemServico
        abrirImpressao={abrirImpressao}
        selecionados={dados.filter((item) => item.checked)}
        dadosOriginais={props.dados}
      /> */}
      <TableContainer>
        <Table aria-labelledby="tableTitle" aria-label="enhanced table">
          <HeaderTableDemand
            selecionados={data.filter((item) => item.checked)}
            numTotalLinhas={data.length}
            atualizarTodasLinhaSelecionada={atualizarTodasLinhaSelecionada}
          />

          <BodyTableDemand
            dados={data}
            atualizarLinhaSelecionada={atualizarLinhaSelecionada}
          />
        </Table>
      </TableContainer>
      {/* <BarraAcaoTabelaOrdemServico
        abrirImpressao={abrirImpressao}
        selecionados={dados.filter((item) => item.checked)}
        dadosOriginais={props.dados}
      /> */}
    </div>
  );
}

const useStyles = makeStyles(() => ({
  espacamento: {
    marginTop: "15px",
  },
}));
