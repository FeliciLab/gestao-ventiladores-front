import React, {useEffect, useState} from 'react';
import Layout from "../_layout/Layout";
import ServiceOrdersCollapseList from "./ServiceOrdersCollapseList";
import {Container, Typography} from "@material-ui/core";
import {getAllServiceOrder} from "../../modelServices/serviceOrderService";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  titlePage: {
    marginTop: theme.spacing(2)
  }
}));

export default function IndexServiceOrder () {
  const classes = useStyle();
  useEffect(() => {
    getAllServiceOrder()
      .then((result) => setServiceOrders(result));
  });

  const [serviceOrders, setServiceOrders] = useState([]);
  return (<React.Fragment>
    <Layout>
      <Container>
        <Typography variant={"h5"} className={classes.titlePage}>Ordens de serviços</Typography>

        <ServiceOrdersCollapseList data={serviceOrders}/>
      </Container>
    </Layout>
  </React.Fragment>);
}