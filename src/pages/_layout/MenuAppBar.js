import React from "react";
import {Link} from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import {makeStyles} from '@material-ui/core/styles';
// import HealingIcon from '@material-ui/icons/Healing';
// import BallotIcon from '@material-ui/icons/Ballot';

export default function MenuAppBar () {
  const classes = useStyles();
  const menuPainel = 'painel-menu';

  const menus = [
    {name: 'TRIAGEM', icon: <AssignmentIcon/>, route: '/'},
    {name: 'DIAGNÓSTICO', icon: <SubtitlesIcon/>, route: 'diagnosticos'},
    // {name: 'DEMANDA', icon: <BallotIcon/>, route: 'demandas'},
    // {name: 'MANUTENÇÃO', icon: <HealingIcon/>, route: 'triagem'},
  ];

  return (
    <React.Fragment>
      {menus.map((menu, index) =>
        <MenuItem key={index}>
          <IconButton
            aria-label="Painel de informações"
            aria-controls={menuPainel}
            aria-haspopup="true"
            color="inherit"
          >
            {menu.icon}
          </IconButton>
          <Link
            to={{
              pathname: menu.route
            }}
            className={classes.link}
          >
            <p>{menu.name}</p>
          </Link>
        </MenuItem>
      )}
    </React.Fragment>
  );

}

const useStyles = makeStyles((theme) => ({
  link: {
    fontSize: 18,
    alignSelf: "center",
    color: "#fff",
    textDecoration: "none",
  }
}));