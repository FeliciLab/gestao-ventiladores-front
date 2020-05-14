import React, {useEffect, useState} from 'react';
import Layout from "../_layout/Layout";
import ServiceOrdersCollapseList from "./ServiceOrdersCollapseList";
import {Container, Typography} from "@material-ui/core";
import {getAllServiceOrder} from "../../modelServices/serviceOrderService";
import {makeStyles} from "@material-ui/core/styles";
import LoadingBar from "../_common/components/LoadingBar";


const useStyle = makeStyles((theme) => ({
  titlePage: {
    marginTop: theme.spacing(2)
  }
}));

export default function IndexServiceOrder () {
  const classes = useStyle();
  const [serviceOrders, setServiceOrders] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [progressLoad, setProgerssLoad] = useState(0);

  function getData () {
    if (loadingData) {
      setProgerssLoad(80)
      getAllServiceOrder()
        .then((result) => {
          setProgerssLoad(80)
          setServiceOrders(result);
          setLoadingData(false);
        });
    }
  }

  useEffect(getData, [getData]);

  if (loadingData) {
    return <LoadingBar progress={progressLoad}/>;
  }

  return (<React.Fragment>
    <Layout>
      <Container>
        <Typography variant={"h5"} className={classes.titlePage}>Ordens de serviços</Typography>

        <ServiceOrdersCollapseList data={serviceOrders}/>
      </Container>
    </Layout>
  </React.Fragment>);
}