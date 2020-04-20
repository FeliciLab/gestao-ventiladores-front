import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Link} from "react-router-dom";


export default function MenuAppBar(props) {
   
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };



    function gotopage(event, route) {
        event.preventDefault();
        //window.location.replace(route);
        return (
          <Link to={{
            pathname:{route}
          }} ></Link>
        )
      }
      console.log(props.anchorEl,props.menuPainel);
    return (
        <div>
            <Menu
                anchorEl={props.anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                id={props.menuPainel}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={props.isMenuOpen}
                onClose={props.handleClose}
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
        </div>
    )
}