import React from 'react';
import PagePrint from "../../pages/_common/print/PagePrint";
import HeaderPrint from "../../pages/_common/print/HeaderPrint";
import TopicPrint from "../../pages/_common/print/TopicPrint";
import grey from "@material-ui/core/colors/grey";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TablePrint from "../../pages/_common/print/TablePrint";
import moment from 'moment';
import 'moment/locale/pt-br';
import FooterPrint from "../../pages/_common/print/FooterPrint";


const useStyle = makeStyles(theme => ({
  borderedFrame: {
    padding: theme.spacing(1),
    borderColor: grey[400],
    border: '1px solid'
  },
  signature: {
    textAlign: 'center'
  },
  containerSignature: {
    marginTop: theme.spacing(3)
  },
  footerPrint: {
    marginTop: theme.spacing(1)
  }
}));

export default function IndexDeliveryPrint (props) {
  moment.locale('pt-br');
  console.log(moment());
  const {data} = props.location.state;
  const classes = useStyle();
  const headerTable = [
    {id: 'tipo', name: 'Equipamento'},
    {id: 'marca', name: 'Marca'},
    {id: 'modelo', name: 'Modelo'},
    {id: 'numero_de_serie', name: 'Nº de Série'},
    {id: 'acessorios', name: "Acessórios"}

  ];
  const bodyData = data.equipamentos.map(item => {
    item.acessorios = data.acessorios[item['_id']['$oid']].map(acc => `${acc.quantidade} - ${acc.descricao}`).join(', ');
    return item;
  });

  return (<div className={"landscape-print page-container"}>
    <PagePrint>
      <HeaderPrint
        typeAbbreviation={'OE'}
        number={data.codigo}
        dateTime={data.data_entrega['$date']}
        subTitle={"FORMULÁRIO PARA ENTREGA"}
        pageNumber={"01"}
      />
      <Grid container spacing={2}>
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
        <Grid item xs={12}>
          <Typography>Os bens acima descritos deverão ser utilizados exclusivamente pela CESSIONÁRIA.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify={'flex-end'}>
            <Grid item>
              <Typography>Fortaleza, {moment().format('DD')} de {moment().format('MMMM')} de {moment().format('YYYY')}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify={'space-between'} spacing={10} className={classes.containerSignature}>
            <Grid item xs={4}>
              <div style={{width: '100%', borderBottom: '2px solid black'}}></div>
              <Typography className={classes.signature}>Assinatura do Entregador</Typography>
              <Typography className={classes.signature}>Gerente Administrativo da CVMER</Typography>
              <Typography className={classes.signature}>Maria Iracema Capistrano Bezerra</Typography>
              <Typography className={classes.signature}>Contato: (85) 3421-5309</Typography>
            </Grid>
            <Grid item xs={4}>
              <div style={{width: '100%', borderBottom: '2px solid black'}}></div>
              <Typography className={classes.signature}>Assinatura do Destinatário</Typography>
              <Typography className={classes.signature}>{data.instituicao_destino}</Typography>
              <Typography className={classes.signature}>{data.nome_responsavel_destino}</Typography>
              <Typography className={classes.signature}>Contato: {data.contato_responsavel_destino}</Typography>
            </Grid>
            <Grid item xs={4}>
              <div style={{width: '100%', borderBottom: '2px solid black'}}></div>
              <Typography className={classes.signature}>Assinatura do Responsável pelo Transporte</Typography>
              <Typography className={classes.signature}>{data.nome_responsavel_transporte || 'não informado'}</Typography>
              <Typography className={classes.signature}>Contato: {data.contato_responsavel_transporte || 'não informado'}</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.footerPrint}>
          <FooterPrint
            text={'OE'}
            number={data.codigo}
            pageNumber={'01'}
          />
        </Grid>
      </Grid>
    </PagePrint>
  </div>);
}