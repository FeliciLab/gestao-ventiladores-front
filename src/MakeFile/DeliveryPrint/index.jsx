import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import makeStyles from '@material-ui/core/styles/makeStyles';
import grey from '@material-ui/core/colors/grey';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PagePrint from '../../pages/_common/print/PagePrint';
import HeaderPrint from '../../pages/_common/print/HeaderPrint';
import TopicPrint from '../../pages/_common/print/TopicPrint';
import TablePrint from '../../pages/_common/print/TablePrint';
import 'moment/locale/pt-br';
import FooterPrint from '../../pages/_common/print/FooterPrint';


const useStyle = makeStyles((theme) => ({
  borderedFrame: {
    padding: theme.spacing(1),
    borderColor: grey[400],
    border: '1px solid',
  },
  signature: {
    textAlign: 'center',
  },
  containerSignature: {
    marginTop: theme.spacing(3),
  },
  footerPrint: {
    marginTop: theme.spacing(1),
  },
}));

const IndexDeliveryPrint = (props) => {
  moment.locale('pt-br');
  const { location: { state: { data } } = {} } = props;
  const classes = useStyle();
  const headerTable = [
    { id: 'tipo', name: 'Equipamento' },
    { id: 'marca', name: 'Marca' },
    { id: 'modelo', name: 'Modelo' },
    { id: 'numero_de_serie', name: 'Nº de Série' },
    { id: 'acessorios', name: 'Acessórios' },

  ];
  const bodyData = data.equipamentos.map((item) => {
    const content = Object.assign(item);
    content.acessorios = data.acessorios[item._id.$oid]
      .map((acc) => `${acc.quantidade} - ${acc.descricao}`).join(', ');

    return content;
  });

  return (
    <div className="landscape-print page-container">
      <PagePrint>
        <HeaderPrint
          typeAbbreviation="OE"
          number={data.codigo}
          dateTime={data.data_entrega.$date}
          subTitle="FORMULÁRIO PARA ENTREGA"
          pageNumber="01"
        />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TopicPrint text="1. Descrição material" />
          </Grid>
          <Grid item xs={12} className={classes.borderedFrame}>
            <Typography>
              O Governo do Estado do Ceará, através de sua Central de Ventiladores Mecânicos e
              Equipamentos Respiratórios - CVMER, da Secretaria da Saúde do Ceará - SESA, denominada
              simplemente CEDENTE, e o
              {' '}
              <strong>{data.instituicao_destino}</strong>
              , inscrita no CNPJ
              sob nº
              {' '}
              <strong>{data.cnpj_destino}</strong>
              {' '}
              com sede
              à
              {' '}
              <strong>{data.endereco_destino}</strong>
              , denominado simplesmente CESSIONÁRIO,
              resolvem firmar o presente termo de cessão de uso de bens móveis, a título precário,
              conforme discriminado abaixo:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TopicPrint text="2. Dados dos Equipamentos" />
          </Grid>
          <Grid item xs={12}>
            <TablePrint
              headerTable={headerTable}
              bodyData={bodyData}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Os bens acima descritos deverão ser utilizados exclusivamente pela
              CESSIONÁRIA.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="flex-end">
              <Grid item>
                <Typography>
                  Fortaleza,
                  {moment().format('DD')}
                  {' '}
                  de
                  {moment().format('MMMM')}
                  {' '}
                  de
                  {moment().format('YYYY')}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              justify="space-between"
              spacing={10}
              className={classes.containerSignature}
            >
              <Grid item xs={4}>
                <div style={{ width: '100%', borderBottom: '2px solid black' }} />
                <Typography className={classes.signature}>Assinatura do Entregador</Typography>
                <Typography className={classes.signature}>
                  Gerente Administrativo da
                  CVMER
                </Typography>
                <Typography className={classes.signature}>
                  Maria Iracema Capistrano
                  Bezerra
                </Typography>
                <Typography className={classes.signature}>Contato: (85) 3421-5309</Typography>
              </Grid>
              <Grid item xs={4}>
                <div style={{ width: '100%', borderBottom: '2px solid black' }} />
                <Typography className={classes.signature}>Assinatura do Destinatário</Typography>
                <Typography className={classes.signature}>{data.instituicao_destino}</Typography>
                <Typography className={classes.signature}>
                  {data.nome_responsavel_destino}
                </Typography>
                <Typography className={classes.signature}>
                  Contato:
                  {data.contato_responsavel_destino}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <div style={{ width: '100%', borderBottom: '2px solid black' }} />
                <Typography className={classes.signature}>
                  Assinatura do Responsável pelo
                  Transporte
                </Typography>
                <Typography className={classes.signature}>{data.nome_responsavel_transporte || 'não informado'}</Typography>
                <Typography className={classes.signature}>
                  Contato:
                  {data.contato_responsavel_transporte || 'não informado'}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} className={classes.footerPrint}>
            <FooterPrint
              text="OE"
              number={data.codigo}
              pageNumber="01"
            />
          </Grid>
        </Grid>
      </PagePrint>
    </div>
  );
};

IndexDeliveryPrint.propTypes = {
  location: PropTypes.objectOf(PropTypes.object()).isRequired,
};

export default IndexDeliveryPrint;
