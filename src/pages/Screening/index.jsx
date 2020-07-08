import React, {
  useEffect,
  useState,
} from 'react';
import Layout from '../_layout/Layout';
import { getAllServiceOrder } from '../../modelServices/serviceOrderService';
import ScreeningPage from './ScreeningPage';
import LoadingBar from '../_common/components/LoadingBar';

const Screening = () => {
  const [serviceOrders, setServiceOrders] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [progressLoad, setProgerssLoad] = useState(0);

  const getData = () => {
    if (loadingData) {
      setProgerssLoad(80);
      getAllServiceOrder().then((result) => {
        setProgerssLoad(80);
        setServiceOrders(result.slice(0, 10));
        setLoadingData(false);
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
