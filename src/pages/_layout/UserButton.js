import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography";
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default function UserButton () {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
   
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'account-menu';
    const renderMenu = (
        <Menu
        anchorEl={anchorEl}
        anchorOrigin={{  
            vertical: 'bottom',
            horizontal: 'center' 
        }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        className={classes.list} 
        >
        <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
        <MenuItem onClick={handleMenuClose}>Deslogar</MenuItem>
        </Menu>
    );
    return (
        <div>
            <IconButton aria-label="Conta de usuário" aria-haspopup="true" color="inherit">
                <AccountCircle />
            </IconButton>
            Junior Oliveira
            <IconButton 
            onClick={handleProfileMenuOpen} aria-haspopup="true" color="inherit">
                <KeyboardArrowDownIcon />
            </IconButton>
            {renderMenu}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({   
    list: {
      '& ul':{//colocando as opções em block
        display: 'inline-block !important'
      }
    }
}));
