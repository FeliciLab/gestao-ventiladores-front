import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as DoctorsSidebar } from '../../assets/doctors-sidebar.svg';
import NomeLogo from './NomeLogo';

const useStyle = makeStyles(() => ({
  sideBar: {
    background: '#63B967',
    color: 'white',
    paddingRight: '48px',
    paddingBottom: '16px',
  },
  image: {
    width: '472px',
  },
}));

const Sidebar = () => {
  const { sideBar, image } = useStyle();
  return (
    <div className={sideBar}>
      <NomeLogo />
      <figure className={image}>
        <DoctorsSidebar />
      </figure>
    </div>
  );
};

export default Sidebar;
