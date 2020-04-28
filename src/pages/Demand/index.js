import React, {useState} from "react";
import Layout from "../_layout/Layout";
import {getAllServiceOrder} from "../../modelServices/serviceOrderService";
import {getAllPurchaseOrders} from "../../modelServices/purchaseOrderService";
import LinearProgress from "@material-ui/core/LinearProgress";
import DemandPage from "./DemandPage";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

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
    return (<React.Fragment>
      <Layout>
        <Container style={{padding: '5rem'}}>
          <Typography variant={"h6"}>Carregando dados...</Typography>
          <LinearProgress variant="determinate" value={progress}/>
        </Container>
      </Layout>
    </React.Fragment>);
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
