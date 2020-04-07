import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function RelacaoDeMaterial() {
  const [form, setForm] = useState([]);

  function addForms() {
    setForm([...form, <Form />]);
  }

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          height: 100,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" gutterBottom>
          2. Relação de Material / Acessórios Entregues
        </Typography>
        <Button
          onClick={addForms}
          style={{
            color: "#ff9800",
          }}
        >
          + Adicionar Item
        </Button>
      </div>
      {form}
    </React.Fragment>
  );
}

const Form = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={5} sm={5}>
        <TextField
          required
          id="descricao"
          name="descricao"
          label="Descrição"
          fullWidth
        />
      </Grid>
      <Grid item xs={2} sm={2}>
        <TextField
          required
          id="aconpanha"
          name="acompanha"
          label="Acompanha"
          fullWidth
        />
      </Grid>
      <Grid item xs={2} sm={2}>
        <TextField
          required
          id="quantidade"
          name="quantidade"
          label="Quantidade"
          fullWidth
        />
      </Grid>
      <Grid item xs={3} sm={3}>
        <TextField
          required
          id="estadoDeConservacao"
          name="estadoDeConservacao"
          label="Estado de Conservação"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};
