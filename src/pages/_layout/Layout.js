import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import grey from "@material-ui/core/colors/grey";
import makeStyles from "@material-ui/core/styles/makeStyles";

export default function Layout (props) {
  const classes = useStyle();
  return (
    <div className={classes.layout}>
      <Header/>
      {props.children}
      <Footer/>
    </div>

  );
}

const useStyle = makeStyles(() => ({
  layout: {
    background: grey[100]
  }
}));