import React, {useState} from 'react';
import LoadingBar from "../_common/components/LoadingBar";
import {ServiceOrder} from "../../models/serviceOrder";
import CalibrationPage from "./CalibrationPage";
import Layout from "../_layout/Layout";
import {getAllCalibration} from "../../modelServices/calibragemService";


export default function IndexCalibration () {
  const [serviceOrders, setServiceOrder] = useState([]);
  const [requestBlock, setRequestBlock] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [progress, setProgress] = useState(0);

  if (!requestBlock) {
    setRequestBlock(true);
    getData();
  }

  function getData () {
    setLoadingData(true);
    setProgress(40);

    getAllCalibration()
      .then((result) => {
        setProgress(80);
        setServiceOrder(result.map(item => ServiceOrder(item)) || []);
      })
      .finally(() => {
        setProgress(100);
        setLoadingData(false);
      });
  }

  async function reloadData () {
    await setRequestBlock(false);
  }

  if (loadingData) {
    return <LoadingBar progress={progress}></LoadingBar>;
  }

  return (<React.Fragment>
    <Layout>
      <CalibrationPage serviceOrders={serviceOrders} reloadData={reloadData}/>
    </Layout>
  </React.Fragment>);
}