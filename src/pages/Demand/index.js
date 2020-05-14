import React, {useState} from "react";
import Layout from "../_layout/Layout";
import {getAllServiceOrder} from "../../modelServices/serviceOrderService";
import {getAllPurchaseOrders} from "../../modelServices/purchaseOrderService";
import DemandPage from "./DemandPage";
import LoadingBar from "../_common/components/LoadingBar";


const IndexDemand = (props) => {
  const [serviceOrders, setServiceOrder] = useState([]);
  const [purchaseOrder, setPurchaseOrder] = useState([]);
  const [requestBlock, setRequestBlock] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [progress, setProgress] = useState(0);

  if (!requestBlock) {
    setRequestBlock(true);
    getData()
  }

  async function getData () {
    await setLoadingData(true);
    await setProgress(10);

    const _purchaseOrder = await getAllPurchaseOrders()
    await setPurchaseOrder(_purchaseOrder.slice());
    await setProgress(40);

    const _serviceOrder = await getAllServiceOrder()
    await setProgress(80);
    await setServiceOrder(_serviceOrder || []);

    await setProgress(100);
    await setLoadingData(false);
  }

  async function reloadData () {
    await setRequestBlock(false);
  }

  if (loadingData) {
    return <LoadingBar progress={progress}></LoadingBar>
  }

  return (
    <React.Fragment>
      <Layout>
        <DemandPage
          serviceOrders={serviceOrders}
          purchaseOrders={purchaseOrder}
          reloadData={reloadData}
        />
      </Layout>
    </React.Fragment>
  );
};

export default IndexDemand;
