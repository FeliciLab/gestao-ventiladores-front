import React, {useEffect, useState} from 'react';
import Layout from "../_layout/Layout";
import DeliveryPage from "./DeliveryPage";
import {getAllServiceOrder} from "../../modelServices/serviceOrderService";
import LoadingBar from "../_common/components/LoadingBar";
import {getAllDeliveryOrders} from "../../modelServices/deliveryOrderService";

export default function IndexDelivery (props) {
  const [deliveryOrders, setDeliveryOrders] = useState([]);
  const [serviceOrders, setServiceOrders] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [progressLoad, setProgressLoad] = useState(0);

  useEffect(getData, [getData]);

  function getData () {
    if (loadingData) {
      setProgressLoad(30);
      getAllServiceOrder().then((serviceOrders) => {
        setServiceOrders(serviceOrders.slice());
        setProgressLoad(30 + progressLoad);
      }).finally(() => {
        getAllDeliveryOrders().then(deliveryOrders => {
          setDeliveryOrders(deliveryOrders.slice());
          setProgressLoad(30 + progressLoad);
        }).finally(() => {
          setProgressLoad(100);
          setLoadingData(false);
        });
      });
    }
  }

  function realodData () {
    setLoadingData(true)
    getData()
  }

  if (loadingData) {
    return <LoadingBar progress={progressLoad}/>;
  }

  return (<React.Fragment>
    <Layout>
      <DeliveryPage
        deliveryOrders={deliveryOrders}
        serviceOrders={serviceOrders}
        realodData={realodData}
      />
    </Layout>
  </React.Fragment>);
}