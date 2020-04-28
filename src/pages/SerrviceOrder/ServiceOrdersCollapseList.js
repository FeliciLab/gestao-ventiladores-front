import React from 'react';
import {Grid} from "@material-ui/core";
import ServiceOrderCollapseItem from "./ServiceOrderCollapseItem";
import PropTypes from 'prop-types';

const ServiceOrdersCollapseList = (props) => {
  const {data} = props;

  if (!data) {
    return <></>;
  }

  return (<React.Fragment>
    <Grid container>
      {data.map((item, index) => (
        <Grid key={index} item xs={12}>
          <ServiceOrderCollapseItem item={item}/>
        </Grid>
      ))}
    </Grid>
  </React.Fragment>);
};

ServiceOrdersCollapseList.protoTypes = {
  data: PropTypes.array.isRequired
};

export default ServiceOrdersCollapseList;