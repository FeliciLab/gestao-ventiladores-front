import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import SubMenuAppBar from './SubMenuAppBar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import UserButton from "./UserButton.js";
import './styles.css';
export default function Header () {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const menuPainel = 'painel-menu';

  function gotopage(event, route) {
    event.preventDefault();
    //window.location.replace(route);
    return (
      <Link to={{
        pathname:{route}
      }} ></Link>
    )
  }
  const menus = [
    {name: 'PAINEL', icon: 'Vectorcalibragem'},
    {name: 'TRIAGEM', icon: 'Vectortri'},
    {name: 'DIAGNÓSTICO', icon: 'Vectordiagnostico'},
    {name: 'CONSERTO', icon: 'Vectorconserto'},
    {name: 'TESTE', icon: 'Vectorteste'},
    {name: 'CALIBRAGEM', icon: 'Vectorcalibragem'},
    {name: 'ENTREGA', icon: 'Vectorentrega'}
  ];

const listItems = menus.map((menu) =>
<MenuItem onClick={handleProfileMenuOpen}>
  <IconButton
    aria-label="Painel de informações"
    aria-controls={menuPainel}
    aria-haspopup="true"
    color="inherit">  
    <img src={process.env.PUBLIC_URL+'/img/'+menu.icon+'.png'} />
  </IconButton>
  <p>{menu.name}</p>
</MenuItem>
);

  return (
    <header>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.divTitle}>
            <Typography className={classes.text} noWrap>
              Central
              <br/> de
              <br/> Ventiladores
            </Typography>
          </div>
          <div>
            <Typography>
              <UserButton />
            </Typography> 
          </div>
        </Toolbar>
        <div className={classes.appBarFooter}>
          <div className={classes.divTextFooter} >
          {/* <MenuAppBar /> */}
          </div>
        </div>
      </AppBar>
      <SubMenuAppBar />
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
    }
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
  typography: {
    padding: theme.spacing(2),
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  }
}));
