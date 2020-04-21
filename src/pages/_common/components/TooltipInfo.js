import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

export default function TooptipInfo (props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <Tooltip
          placement="right"
          PopperProps={{
            disablePortal: true,
          }}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={
            <React.Fragment>
              {props.children}
            </React.Fragment>
          }
          classes={{tooltip: classes.customWidth}}
        >
          <IconButton
            onClick={handleTooltipOpen}
            aria-label="info"
          >
            <InfoIcon style={{fontSize: 20}}/>
          </IconButton>
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
}

const useStyles = makeStyles((theme) => ({
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  customWidth: {
    maxWidth: 500,
    fontSize: 15,
  },
}));
