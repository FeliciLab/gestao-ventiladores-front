import React from 'react';
import PagePrint from "../../pages/_common/print/PagePrint";
import HeaderPrint from "../../pages/_common/print/HeaderPrint";
import TopicPrint from "../../pages/_common/print/TopicPrint";
import grey from "@material-ui/core/colors/grey";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TablePrint from "../../pages/_common/print/TablePrint";


const useStyle = makeStyles(theme => ({
  borderedFrame: {
    padding: theme.spacing(1),
    borderColor: grey[400],
    border: '1px solid'
  }
}));

export default function IndexDeliveryPrint (props) {
  const {data} = props.location.state;
  const classes = useStyle();
  const headerTable = [
    {id: 'nome', name: 'Equipamento'},
    {id: 'marca', name: 'Marca'},
    {id: 'modelo', name: 'Modelo'},
    {id: 'numero_de_serie', name: 'Nº de Série'}

  ]
  const bodyData = data.equipamentos

  return (<div className={"landscape-print page-container"}>
    <PagePrint>
      <HeaderPrint
        typeAbbreviation={'OE'}
        number={data.codigo}
        dateTime={data.data_entrega['$date']}
        subTitle={"FORMULÁRIO PARA ENTREGA"}
        pageNumber={"01"}
      />
      <Grid container>
        <Grid item xs={12}>
          <TopicPrint text={"1. Descrição material"}/>
        </Grid>
        <Grid item xs={12} className={classes.borderedFrame}>
          <Typography>
            O Governo do Estado do Ceará, através de sua Central de Ventiladores Mecânicos e Equipamentos Respiratórios
            - CVMER, da Secretaria da Saúde do Ceará - SESA, denominada simplemente CEDENTE, e o HOSPITAL INFANTIL
            ALBERT SABIN inscrita no CNPJ sob nº 07.954.571/0038-04 com sede à Rua Tertuliano Sales, 544 - Vila União,
            denominado simplesmente CESSIONÁRIO, resolvem firmar o presente termo de cessão de uso de bens móveis, a
            título precário, conforme discriminado abaixo:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TopicPrint text={"2. Dados dos Equipamentos"}/>
        </Grid>
        <Grid item xs={12}>
          <TablePrint
            headerTable={headerTable}
            bodyData={bodyData}
          />
        </Grid>
      </Grid>
    </PagePrint>
  </div>);
}