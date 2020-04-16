import React from 'react';
import orange from "@material-ui/core/colors/orange";
import SvgIcon from "@material-ui/core/SvgIcon";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";


const OrangeButton = (props) => {
  const {children, onClick, startIcon} = props;
  return <ColorButton
    size={"large"}
    variant={"contained"}
    onClick={onClick}
    startIcon={startIcon}
  > {children} </ColorButton>;
};

const ColorButton = withStyles((theme) => ({
  root: {
    borderRadius: 20,
    color: "white",
    backgroundColor: orange[600],
    '&:hover': {
      backgroundColor: orange[800],
    },
  },
}))(Button);

OrangeButton.defaultProps = {
  onClick: () => console.log('No Action'),
  startIcon: <SvgIcon/>
};

export default OrangeButton;