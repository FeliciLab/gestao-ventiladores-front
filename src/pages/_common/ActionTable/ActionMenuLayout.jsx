import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Menu from '@material-ui/core/Menu';
import orange from '@material-ui/core/colors/orange';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: orange[600],
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const ActionMenuLayout = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {
    item,
    menuOptions,
  } = props;

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="lista-acoes"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={openMenu}
      >
        <MenuIcon />
      </IconButton>
      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeMenu}
        keepMounted
      >
        {
          menuOptions.map((option) => (
            <StyledMenuItem
              key={option.name}
              onClick={() => {
                option.action(item);
              }}
            >
              {option.name}
            </StyledMenuItem>
          ))
        }
      </StyledMenu>
    </div>
  );
};

ActionMenuLayout.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  menuOptions: PropTypes.instanceOf(Array).isRequired,
};

export default ActionMenuLayout;
