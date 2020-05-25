import React, {
  useEffect,
  useState,
} from 'react';
import Layout from '../_layout/Layout';
import DeliveryPage from './DeliveryPage';
import { getAllServiceOrder } from '../../modelServices/serviceOrderService';
import LoadingBar from '../_common/components/LoadingBar';
import { getAllDeliveryOrders } from '../../modelServices/deliveryOrderService';


const IndexDelivery = () => {
  const [deliveryOrders, setDeliveryOrders] = useState([]);
  const [serviceOrders, setServiceOrders] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [progressLoad, setProgressLoad] = useState(0);

  const getData = async () => {
    if (loadingData) {
      setProgressLoad(30);
      const serviceOrdersResult = await getAllServiceOrder();
      setProgressLoad(30 + progressLoad);
      const deliveryOrdersResult = await getAllDeliveryOrders();
      setDeliveryOrders(deliveryOrdersResult.slice());
      setServiceOrders(
        serviceOrdersResult.slice()
          .filter((item) => item.equipamento && item.equipamento.length > 0
            && !deliveryOrdersResult
              .find((delivery) => {
                const numSerie = item.equipamento[0].numero_de_serie;
                return delivery.equipamentos && delivery.equipamentos.length > 0
                  && delivery.equipamentos.find((equip) => equip.numero_de_serie === numSerie);
              })),
      );
      setProgressLoad(100);
      setLoadingData(false);
    }
  };

  const handleEffects = () => {
    setLoadingData(true);
    getData();
  };

  useEffect(handleEffects, []);

  const realodData = () => {
    window.location.reload();
  };

  if (loadingData) {
    return <LoadingBar progress={progressLoad} />;
  }

  return (
    <>
      <Layout>
        <DeliveryPage
          deliveryOrders={deliveryOrders}
          serviceOrders={serviceOrders}
          realodData={realodData}
        />
      </Layout>
    </>
  );
};

export default IndexDelivery;
