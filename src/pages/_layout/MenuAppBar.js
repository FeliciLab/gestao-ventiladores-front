import React from "react";
import {Link} from "react-router-dom";
import SubMenuAppBar from './SubMenuAppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import HealingIcon from '@material-ui/icons/Healing';
import BallotIcon from '@material-ui/icons/Ballot';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import { makeStyles } from '@material-ui/core/styles';

export default function MenuAppBar () {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(event.currentTarget);
    };
    // const handleClose = () => {
    //     setAnchorEl(null);
    //   };
    //   const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    //   };
    const menuPainel = 'painel-menu';    
    const isMenuOpen = Boolean(anchorEl);

      const menus = [
        //{name: 'PAINEL', icon: <AssessmentIcon /> ,     route: 'triagem'},
        {name: 'TRIAGEM', icon: <AssignmentIcon />,     route: '/'},
        {name: 'DIAGNÓSTICO', icon: <SubtitlesIcon />,  route: 'diagnosticos'},
        {name: 'DEMANDA', icon: <BallotIcon />,         route: 'demandas'},
        {name: 'MANUTENÇÃO', icon: <HealingIcon />,     route: 'triagem'},
        //{name: 'TESTE', icon: <BallotIcon />,           route: 'triagem'}
        // {name: 'CALIBRAGEM', icon: <DashboardIcon />,   route: 'triagem'},
        // {name: 'ENTREGA', icon: <MoveToInboxIcon />,    route: 'triagem'}
      ];
      const listItems = menus.map((menu) =>
        <MenuItem onClick={handleProfileMenuOpen}>  
        <IconButton
            aria-label="Painel de informações"
            aria-controls={menuPainel}
            aria-haspopup="true"
            color="inherit">  
            {menu.icon}   
        </IconButton>
            <Link 
            to={{
                pathname:menu.route
            }}
            className={classes.link} >
                <p>{menu.name}</p>
            </Link>
        </MenuItem>
        );
    return (
        listItems       
    )  

}

const useStyles = makeStyles((theme) => ({
    link: {
        fontSize: 18,
        alignSelf: "center",
        color: "#fff",
        textDecoration: "none",
    }
}));