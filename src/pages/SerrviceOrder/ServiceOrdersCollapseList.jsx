import React from 'react';
import { Grid } from '@material-ui/core';
import ServiceOrderCollapseItem from './ServiceOrderCollapseItem';
import PropTypes from 'prop-types';
import ServiceOrderCardNumber from './ServiceOrderCardNumber';


const ServiceOrdersCollapseList = (props) => {
  const {
    data,
    deliveryOrders,
    ammountDelivery
  } = props;

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
      <Grid item xs={12} md={3}>
        <ServiceOrderCardNumber
          title={'Entregues'}
          number={ammountDelivery}
          percent={Math.floor((ammountDelivery || 0)/data.length * 100)}
        />
      </Grid>
      {data.map((item, index) => (
        <Grid key={index} item xs={12}>
          <ServiceOrderCollapseItem item={item} deliveryOrders={deliveryOrders}/>
        </Grid>
      ))}
    </Grid>
  </React.Fragment>);
};

ServiceOrdersCollapseList.protoTypes = {
  data: PropTypes.array.isRequired
};

export default ServiceOrdersCollapseList;