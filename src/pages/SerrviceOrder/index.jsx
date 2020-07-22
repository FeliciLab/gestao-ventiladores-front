import React, {
  useEffect,
  useState,
} from 'react';
import {
  Container,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../_layout/Layout';
import ServiceOrdersCollapseList from './ServiceOrdersCollapseList';
import { getAllServiceOrder } from '../../modelServices/serviceOrderService';
import LoadingBar from '../_common/components/LoadingBar';
import { getAllDeliveryOrders } from '../../modelServices/deliveryOrderService';

const useStyle = makeStyles((theme) => ({
  titlePage: {
    marginTop: theme.spacing(2),
  },
}));

const IndexServiceOrder = () => {
  const classes = useStyle();
  const [serviceOrders, setServiceOrders] = useState([]);
  const [deliveryOrders, setDeliveryOrders] = useState([]);
  const [ammountDelivery, setAmmountDelivery] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [progressLoad, setProgerssLoad] = useState(0);

  const getData = () => {
    setProgerssLoad(80);
    Promise.all([
      getAllServiceOrder(),
      getAllDeliveryOrders(),
    ])
      .then((result) => {
        setProgerssLoad(80);
        setServiceOrders(result[0]);
        setDeliveryOrders(result[1]);
        setAmmountDelivery(
          result[1]
            .map((item) => item.equipamentos_id.length)
            .reduce((a, c) => (a + c), 0),
        );
        setLoadingData(false);
      });
  };

  useEffect(getData, []);

  if (loadingData) {
    return <LoadingBar progress={progressLoad} />;
  }

  return (
    <>
      <Layout>
        <Container>
          <Typography variant="h5" className={classes.titlePage}>
            Ordens de serviços
          </Typography>
          <ServiceOrdersCollapseList
            deliveryOrders={deliveryOrders}
            data={serviceOrders}
            ammountDelivery={ammountDelivery}
          />
        </Container>
      </Layout>
    </>
  );
};

export default IndexServiceOrder;
