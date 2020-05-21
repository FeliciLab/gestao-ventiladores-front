import React, { useState } from 'react';
import Layout from '../_layout/Layout';
import { getAllServiceOrder } from '../../modelServices/serviceOrderService';
import { getAllPurchaseOrders } from '../../modelServices/purchaseOrderService';
import DemandPage from './DemandPage';
import LoadingBar from '../_common/components/LoadingBar';


const IndexDemand = () => {
  const [serviceOrders, setServiceOrder] = useState([]);
  const [purchaseOrder, setPurchaseOrder] = useState([]);
  const [requestBlock, setRequestBlock] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [progress, setProgress] = useState(0);

  const getData = async () => {
    await setLoadingData(true);
    await setProgress(10);

    const newPurchaseOrder = await getAllPurchaseOrders();
    await setPurchaseOrder(newPurchaseOrder.slice());
    await setProgress(40);

    const newServiceOrder = await getAllServiceOrder();
    await setProgress(80);
    await setServiceOrder(newServiceOrder || []);

    await setProgress(100);
    await setLoadingData(false);
  };

  const reloadData = async () => {
    await setRequestBlock(false);
  };

  if (!requestBlock) {
    setRequestBlock(true);
    getData();
  }

  if (loadingData) {
    return <LoadingBar progress={progress} />;
  }

  return (
    <>
      <Layout>
        <DemandPage
          serviceOrders={serviceOrders}
          purchaseOrders={purchaseOrder}
          reloadData={reloadData}
        />
      </Layout>
    </>
  );
};

export default IndexDemand;
