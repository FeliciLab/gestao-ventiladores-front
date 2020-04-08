import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Grid} from "@material-ui/core";
import {Acessorio} from "../../models/acessorio";
import AcessorioForm from "./AcessorioForm";
import AddIcon from '@material-ui/icons/Add';


const acessorioModel = Acessorio();

export default function RelacaoDeMaterial (props) {
  const [acessorios, setAcessorio] = React.useState(props.acessorios);

  function adicionarAcessorio () {
    const acess = [...acessorios, Object.assign({}, acessorioModel)];
    setAcessorio(acess);
  }

  function atualizarAcessorioParent (index, value) {
    const acess = acessorios;
    acess[index] = Object.assign(acess[index], value);
    setAcessorio(acess);
    props.atualizarAcessorios(acessorios);
  }

  function removerLinha(id) {
    try {
      setAcessorio(acessorios.filter((acessorio, index) => index!== id));
      props.atualizarAcessorios(acessorios);
    } catch (err) {
      console.log("erro ao deletar casos, tente novamente");
    }
  }

  return (
    <div>
      <Grid
        container
        justify={"space-between"}
        alignItems={"center"}
      >
        <Grid
          item
          xs={12}
          sm={7}
        >
          <Typography
            variant="h6"
            gutterBottom
          >
            2. Relação de Material / Acessórios Entregues
          </Typography>
        </Grid>
        <Grid
          item
          xs="auto"
        >
          <Button
            onClick={adicionarAcessorio}
            style={{color: "#ff9800",}}
            startIcon={<AddIcon/>}
          >
            Adicionar Item
          </Button>
        </Grid>
      </Grid>
      {
        acessorios.map((acessorio, index) => (
            <AcessorioForm
              acessorio={acessorio}
              atualizarAcessorio={atualizarAcessorioParent}
              removerLinha={removerLinha}
              index={index}
              key={index}
            />
          )
        )
      }
    </div>
  );
}
