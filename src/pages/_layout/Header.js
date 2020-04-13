import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

export default function Header () {
  const classes = useStyles();

  return (
    <header>
      <AppBar
        position="absolute"
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.divTitle}>
            <Typography
              className={classes.text}
              noWrap
            >
              Central
              <br/> de
              <br/> Ventiladores
            </Typography>
          </div>
          <div className={classes.divUser}>
            <Typography
              className={classes.textUser}
              noWrap
            >
              {/*usuario, joe*/}
            </Typography>
          </div>
        </Toolbar>
        <div className={classes.appBarFooter}>
          <div className={classes.divTextFooter}>
            <Link
              to="/"
              className={classes.link}
            >
              + Triagem
            </Link>

            <Link
              to="/Diagnostico"
              className={classes.link}
            >
              + Diagnóstico
            </Link>

            <Link
              to="/Demand"
              className={classes.link}
            >
              + Demanda
            </Link>

            <Link
              to="/maintenance"
              className={classes.link}
            >+ Manuntenção</Link>
          </div>
        </div>
      </AppBar>
    </header>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    height: 300,
    background: "#4CAF50",
  },
  toolbar: {
    marginTop: 20,
    justifyContent: "space-between",
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1200 + theme.spacing(2) * 2)]: {
      width: 1200,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  appBarFooter: {
    width: "100%",
    background: "#357a38",
    height: 60,
    position: "absolute",
    bottom: 0,
  },
  divTextFooter: {
    height: 60,
    justifyContent: "space-evenly",
    display: "flex",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1200 + theme.spacing(2) * 2)]: {
      width: 1200,
      marginLeft: "auto",
      marginRight: "auto",
    },
    flexDirection: "row",
  },
  divTitle: {
    flexDirection: "row",
  },
  textUser: {
    fontSize: 20,
  },
  textFooter: {
    fontSize: 20,
    alignSelf: "center",
    color: "#fff",
  },
  text: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
  link: {
    fontSize: 18,
    alignSelf: "center",
    color: "#fff",
    textDecoration: "none",
  },
}));
