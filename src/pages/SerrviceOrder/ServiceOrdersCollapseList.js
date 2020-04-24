import React from 'react';
import {Grid} from "@material-ui/core";
import ServiceOrderCollapseItem from "./ServiceOrderCollapseItem";

const ServiceOrdersCollapseList = (props) => {
  const {data} = props;
  return (<React.Fragment>
    <Grid container>
      {data.map((item, index) => (
        <Grid key={index} item xs={12}>
          <ServiceOrderCollapseItem item={item}/>
        </Grid>
      ))}
    </Grid>
  </React.Fragment>)
}

export default ServiceOrdersCollapseList;