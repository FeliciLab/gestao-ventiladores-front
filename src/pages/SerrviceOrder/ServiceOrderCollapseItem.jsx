import React, { useState } from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import { blue, grey, orange, teal } from '@material-ui/core/colors';
import { serviceOrderStatus } from '../../models/serviceOrder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DiagnosisCardServiceOrder from './DiagnosisCardServiceOrder';
import ScreeningCardServiceOrder from './ScreeningCardServiceOrder';
import ScreeningEquipment from './ScreeningEquipment';
import CalibrationCardService from './CalibrationCardServiceOrder';
import green from '@material-ui/core/colors/green';


const ServiceOrderCollapseItem = (props) => {
  const classes = useStyle();
  const statusMap = serviceOrderStatus;
  const {
    item,
    deliveryOrders
  } = props;

  const hasOrder = deliveryOrders ? deliveryOrders.find(deliveryOrder => {
    return deliveryOrder.equipamentos_id.find(e => e['$oid'] === item.equipamento_id['$oid']);
  }) : false;

  const [expanded, setExpanded] = useState(false);

  function handleExpandClick () {
    setExpanded(!expanded);
  }

  return (<React.Fragment>
    <Card className={classes.cardItem}>
      <CardContent className={classes.cardArea}>
        <Grid container style={{marginBottom: '1.5rem'}}>
          <Grid item xs={12} md={"auto"} className={`${classes.chips} ${classes.osNumber}`}>
            <Typography variant={"body1"}>
              <strong>OS <span className={`${classes.valueItem} ${classes.valueOs}`}>{item.numero_ordem_servico}</span>
              </strong>
            </Typography>
          </Grid>
          <Grid item xs={12} md={"auto"} className={`${classes.chips} ${classes.osStatus}`}>
            <Typography variant={"body1"}>
              <strong>STATUS: <span className={`${classes.valueItem} ${classes.valueStatus}`}>{hasOrder ? statusMap['entrega'] : statusMap[item.status]}</span>
              </strong>
            </Typography>
          </Grid>

          {item.calibragem ? (
            <Grid item xs={12} md={"auto"} className={`${classes.chips} ${classes.calibrationStatus}`}>
              <Typography variant={"body1"}>
                <strong>CALIBRAGEM: <span className={`${classes.valueItem} ${classes.valueCalibration}`}>{item.calibragem.status}</span>
                </strong>
              </Typography>
            </Grid>
          ) : ''}


          {hasOrder ? (
            <Grid item xs={12} md={"auto"} className={`${classes.chips} ${classes.deliveryDate}`}>
              <Typography variant={"body1"}>
                <strong>
                  ENTREGUE EM:
                  <span className={`${classes.valueItem} ${classes.valueDeliveryDate}`}>
                    {moment(hasOrder.data_entrega['$date']).tz('America/Fortaleza').format('DD/MM/YYYY')}
                  </span>
                </strong>
              </Typography>
            </Grid>
          ) : ''}
        </Grid>

        <Grid container spacing={3} alignItems={"center"} justify={"center"}>
          <Grid item xs={12} md={3}>
            <Typography variant={"body1"}><strong>TIPO EQUIPAMENTO:</strong></Typography>
            <Typography variant={"body2"}>{item.equipamento[0].tipo}</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant={"body1"}><strong>INSTITUIÇÃO DE ORIGEM:</strong></Typography>
            <Typography variant={"body2"}>{item.equipamento[0].nome_instituicao_origem}</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant={"body1"}><strong>MUNICÍPIO DE ORIGEM:</strong></Typography>
            <Typography variant={"body2"}>{item.equipamento[0].municipio_origem}</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant={"body1"}><strong>DATA DE CRIAÇÃO</strong></Typography>
            <Typography variant={"body2"}>{moment(item.created_at['$date']).format('DD/MM/YYYY')}</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justify={'flex-end'}>
          <Grid item xs={"auto"}>
            <IconButton
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="Exibir mais"
            >
              <ExpandMoreIcon fontSize={"large"}/>
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Card variant={"outlined"} className={classes.cardCollaps}>
          <CardContent>
            <ScreeningEquipment equipment={item.equipamento[0]}/>
            <ScreeningCardServiceOrder item={item}/>
            {item.diagnostico ? <DiagnosisCardServiceOrder item={item}/> : <></>}
            {item.calibragem ? <CalibrationCardService item={item}/> : <></>}
          </CardContent>
        </Card>
      </Collapse>

    </Card>
  </React.Fragment>);
};

const useStyle = makeStyles(() => ({
  cardItem: {
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  cardArea: {
    padding: '1.25rem'
  },
  cardCollaps: {
    backgroundColor: grey[50],
    padding: '1.5rem',
    margin: '1rem'
  },
  chips: {
    padding: 8,
    borderRadius: "7px",
    color: "white",
    marginRight: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  valueItem: {
    backgroundColor: 'white',
    padding: '2px 7px',
    marginLeft: '0.25rem',
    borderRadius: '4px'
  },
  valueOs: {
    color: orange[500],
  },
  osNumber: {
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: orange[700],
    }
  },
  valueStatus: {
    color: blue[700]
  },
  osStatus: {
    backgroundColor: blue[700],
    '&:hover': {
      backgroundColor: blue[900],
    }
  },
  calibrationStatus: {
    backgroundColor: teal["A700"],
    '&:hover': {
      backgroundColor: teal["A400"],
    }
  },
  valueCalibration: {
    color: teal["A700"],
  },
  deliveryDate: {
    backgroundColor: green["A700"],
    '&:hover': {
      backgroundColor: green["A400"],
    }
  },
  valueDeliveryDate: {
    color: green["A700"],
  },
}));

export default ServiceOrderCollapseItem;