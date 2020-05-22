import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import ServiceOrderCollapseItem from './ServiceOrderCollapseItem';
import ServiceOrderCardNumber from './ServiceOrderCardNumber';
import { randomIndex } from '../../utils';


const ServiceOrdersCollapseList = (props) => {
  const {
    data,
    deliveryOrders,
    ammountDelivery,
  } = props;

  if (!data) {
    return <></>;
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <ServiceOrderCardNumber
            title="Registrados"
            number={data.length}
            percent={parseInt(`${Math.floor((data.length / data.length) * 100)}`, 10)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ServiceOrderCardNumber
            title="Entregues"
            number={ammountDelivery}
            percent={parseInt(`${Math.floor(((ammountDelivery) / data.length) * 100)}`, 10)}
          />
        </Grid>
        {data.map((item) => (
          <Grid key={randomIndex()} item xs={12}>
            <ServiceOrderCollapseItem item={item} deliveryOrders={deliveryOrders} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

ServiceOrdersCollapseList.defaultProps = {
  ammountDelivery: 0,
};

ServiceOrdersCollapseList.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  deliveryOrders: PropTypes.instanceOf(Array).isRequired,
  ammountDelivery: PropTypes.number,
};

export default ServiceOrdersCollapseList;
