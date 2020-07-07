import React, { useContext, useEffect, useState } from 'react';
import Layout from '../_layout/Layout';
import { getAllServiceOrder } from '../../modelServices/serviceOrderService';
import ScreeningPage from './ScreeningPage';
import LoadingContext from '../../contexts/LoadingContext';
import LoadingBar from '../_common/components/LoadingBar';

const Screening = () => {
  const [serviceOrders, setServiceOrders] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [progressLoad, setProgerssLoad] = useState(0);
  const { setLoadingContext } = useContext(LoadingContext);

  const getData = () => {
    if (loadingData) {
      setLoadingContext({
        open: true,
        message: 'Buscando dados',
        progress: 30,
      });
      setProgerssLoad(80);
      getAllServiceOrder().then((result) => {
        setLoadingContext({
          open: true,
          message: 'Formatando dados',
          progress: 60,
        });
        setProgerssLoad(80);
        setServiceOrders(result.slice(0, 10));
        setLoadingData(false);
        setTimeout(() => {
          setLoadingContext({ open: false });
        }, 3000);
      });
    }
  };

  useEffect(getData, [getData]);

  const reloadData = () => {
    setLoadingData(true);
    getData();
  };

  if (loadingData) {
    return <LoadingBar progress={progressLoad} />;
    // return <></>;
  }

  return (
    <Layout>
      <ScreeningPage
        serviceOrders={serviceOrders}
        reloadData={reloadData}
        loadingData={loadingData}
      />
    </Layout>
  );
};

export default Screening;
