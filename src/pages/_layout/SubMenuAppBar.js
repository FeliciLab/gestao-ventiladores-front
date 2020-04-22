import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Link} from "react-router-dom";


export default function SubMenuAppBar (props) {
  function gotopage (event, route) {
    event.preventDefault();
    return (
      <Link
        to={{
          pathname: {route}
        }}
      ></Link>
    );
  }

  console.log(props.anchorEl, props.menuPainel);
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
          <Link to="/lista-painel" className={'linkSubMenu'}>LISTA
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/novo-painel" className={'linkSubMenu'}>Novo
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}