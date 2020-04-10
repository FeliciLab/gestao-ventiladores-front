import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

export default function Tooltips(props) {
  const item = props.item;
  const classes = useStyles();

  return (
    <div>
      <Tooltip
        title={
          <React.Fragment>
            <Typography>infos</Typography>
            {`nome : ${item.name}`}
            <br />
            {`nome : ${item.name}`}
            <br />
            {`nome : ${item.name}`}
            <br />
            {`nome : ${item.name}`}
            <br />
          </React.Fragment>
        }
        classes={{tooltip: classes.customWidth}}
      >
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
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
