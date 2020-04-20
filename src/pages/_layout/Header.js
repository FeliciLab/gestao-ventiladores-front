import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import { fade, makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import PollIcon from '@material-ui/icons/Poll';
import Menu from '@material-ui/core/Menu';

import MenuItem from '@material-ui/core/MenuItem';
import AssignmentIcon from '@material-ui/icons/Assignment';
import IconButton from '@material-ui/core/IconButton';
import HealingIcon from '@material-ui/icons/Healing';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import BallotIcon from '@material-ui/icons/Ballot';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';

import UserButton from "./UserButton.js";
import './styles.css';
export default function Header () {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  // const handlePopoverOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handlePopoverClose = () => {
  //   setAnchorEl(null);
  // };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const menuPainel = 'painel-menu';
  const idPopover = 'id-popover';

  function gotopage(event, route) {
    event.preventDefault();
    //window.location.replace(route);
    return (
      <Link to={{
        pathname:{route}
      }} ></Link>
    )
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      id={menuPainel}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={isMenuOpen}
      onClose={handleClose}
      elevation={0}
      getContentAnchorEl={null}
      >
      <MenuItem onClick={(event) => gotopage(event, 'lista-painel')} variant="outlined">
      <Link to="/lista-painel" class={'linkSubMenu'}>LISTA
      </Link>
      </MenuItem>
      <MenuItem>
      <Link to="/novo-painel" class={'linkSubMenu'}>Novo
      </Link>
      </MenuItem>

    </Menu>
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
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="Painel de informações"
              aria-controls={menuPainel}
              aria-haspopup="true"
              color="inherit">
              <PollIcon />
            </IconButton>
            <p>PAINEL</p>
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="Triagem"
              aria-controls={menuPainel}
              aria-haspopup="true"
              color="inherit">
              <AssignmentIcon />
            </IconButton>
            <p>TRIAGEM</p>
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="Triagem"
              aria-controls={menuPainel}
              aria-haspopup="true"
              color="inherit">
              <SubtitlesIcon />
            </IconButton>
            DIAGNÓSTICO
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="Triagem"
              aria-controls={menuPainel}
              aria-haspopup="true"
              color="inherit">
            </IconButton>
            <HealingIcon />CONSERTO
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="Teste"
              aria-controls={menuPainel}
              aria-haspopup="true"
              color="inherit">
            </IconButton>
            <BallotIcon />TESTE
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="Teste"
              aria-controls={menuPainel}
              aria-haspopup="true"
              color="inherit">
            </IconButton>
            <DashboardIcon />CALIBRAGEM
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="Teste"
              aria-controls={menuPainel}
              aria-haspopup="true"
              color="inherit">
            </IconButton>
            <MoveToInboxIcon />ENTREGA
          </MenuItem>
          </div>
        </div>
      </AppBar>
      {renderMenu}
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
