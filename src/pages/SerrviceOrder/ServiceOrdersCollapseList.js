import React from 'react';
import {Grid} from "@material-ui/core";
import ServiceOrderCollapseItem from "./ServiceOrderCollapseItem";
import PropTypes from 'prop-types';
import ServiceOrderCardNumber from "./ServiceOrderCardNumber";


const ServiceOrdersCollapseList = (props) => {
  const {
    data,
    ammountDelivery
  } = props;

  // const ammountByStatus = data.reduce((acc, curr) => {
  //   const status = curr.status
  //   if (!acc.hasOwnProperty(status)) {
  //     acc[status] = 0;
  //   }
  //   acc[status]++
  //   return acc
  // }, {})

  if (!data) {
    return <></>;
  }

  return (<React.Fragment>
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <ServiceOrderCardNumber
          title={'Registrados'}
          number={data.length}
          percent={Math.floor(data.length/data.length * 100)}
        />
      </Grid>
      {/*<Grid item xs={12} md={3}>*/}
      {/*  <ServiceOrderCardNumber*/}
      {/*    title={'Diagnosticados'}*/}
      {/*    number={ammountByStatus['diagnostico'] || 0}*/}
      {/*    percent={Math.floor((ammountByStatus['diagnostico'] || 0)/data.length * 100)}*/}
      {/*  />*/}
      {/*</Grid>*/}
      {/*<Grid item xs={12} md={3}>*/}
      {/*  <ServiceOrderCardNumber*/}
      {/*    title={'Consertados'}*/}
      {/*    number={ammountByStatus['calibragem'] || 0}*/}
      {/*    percent={Math.floor((ammountByStatus['calibragem'] || 0)/data.length * 100)}*/}
      {/*  />*/}
      {/*</Grid>*/}
      <Grid item xs={12} md={3}>
        <ServiceOrderCardNumber
          title={'Entregues'}
          number={ammountDelivery}
          percent={Math.floor((ammountDelivery || 0)/data.length * 100)}
        />
      </Grid>
      {data.map((item, index) => (
        <Grid key={index} item xs={12}>
          <ServiceOrderCollapseItem item={item}/>
        </Grid>
      ))}
    </Grid>
  </React.Fragment>);
};

ServiceOrdersCollapseList.protoTypes = {
  data: PropTypes.array.isRequired
};

export default ServiceOrdersCollapseList;