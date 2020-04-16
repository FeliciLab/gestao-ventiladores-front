import React from 'react';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

const TitleFormScreening = (props) => {
  const {saveEquipment} = props;
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
        <div style={{alignSelf: "center"}}>
          <Typography style={{fontSize: 20, fontWeight: "bold"}}>
            Triagem do Equipamento
          </Typography>
          <Typography style={{fontSize: 14}}>
            Após o recebimento, o cadastro do equipamento deverá ser
            realizado. Para isso, preencha os campos abaixo:
          </Typography>
        </div>
        <div style={{alignSelf: "center"}}>
          <Button
            onClick={saveEquipment}
            variant="contained"
            style={{
              backgroundColor: "#ff9800",
              borderRadius: 20,
              color: "#fff",
            }}
            startIcon={<SaveIcon/>}
          >
            Salvar
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TitleFormScreening;