import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as DoctorsSidebar } from '../../assets/doctors-sidebar.svg';

const useStyle = makeStyles(() => ({
  sideBar: {
    background: '#63B967',
    color: 'white',
    paddingRight: '48px',
    paddingBottom: '16px',
  },
  text: {
    margin: '48px',
    height: '250px',
    width: 'fit-content',
    fontSize: '1.5rem',
  },
  image: {
    width: '472px',
  },
}));

const Sidebar = () => {
  const classes = useStyle();
  return (
    <div className={classes.sideBar}>
      <Typography className={classes.text} noWrap>
        <strong>
          CENTRAL
          <br />
          DE
          <br />
          VENTILADORES
        </strong>
      </Typography>
      <figure className={classes.image}>
        <DoctorsSidebar />
      </figure>
    </div>
  );
};

export default Sidebar;
