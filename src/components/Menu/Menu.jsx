import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import AssignmentSharpIcon from '@material-ui/icons/AssignmentSharp';
import SubtitlesSharpIcon from '@material-ui/icons/SubtitlesSharp';
import LibraryBooksSharpIcon from '@material-ui/icons/LibraryBooksSharp';
import LocalMallSharpIcon from '@material-ui/icons/LocalMallSharp';
import UnarchiveSharpIcon from '@material-ui/icons/UnarchiveSharp';
import AssignmentTurnedInSharpIcon from '@material-ui/icons/AssignmentTurnedInSharp';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(() => ({
  mainMenu: {
    background: '#2e7d32',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  label: {
    display: 'flex',
    padding: 16,
    opacity: '0.5',
    boxSizing: 'border-box',
    color: 'white',
    textDecoration: 'none',
    fontSize: 18,
    '& span': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: 5,
      textTransform: 'uppercase',
    },
  },
  activeLabel: {
    borderBottom: '4px solid white',
    opacity: 1,
    paddingBottom: 12,
  },
}));

export default function Header() {
  const classes = useStyles();

  const menuRoutes = [
    {
      label: 'ordens de serviço',
      path: '/ordens-servicos',
      icon: <LibraryBooksSharpIcon font="small" />,
    },
    {
      label: 'triagem',
      path: '/triagens',
      icon: <AssignmentSharpIcon font="small" />,
    },
    {
      label: 'diagnóstico',
      path: '/diagnosticos',
      icon: <SubtitlesSharpIcon font="small" />,
    },
    {
      label: 'demanda',
      path: '/demandas',
      icon: <LocalMallSharpIcon font="small" />,
    },
    {
      label: 'calibragem',
      path: '/calibragem',
      icon: <AssignmentTurnedInSharpIcon font="small" />,
    },
    {
      label: 'entrega',
      path: '/entregas',
      icon: <UnarchiveSharpIcon font="small" />,
    },
  ];

  return (
    <nav className={classes.mainMenu}>
      <Container className={classes.container}>
        {menuRoutes.map((item) => (
          <NavLink
            to={item.path}
            activeClassName={classes.activeLabel}
            // eslint-disable-next-line react/jsx-closing-bracket-location
            className={classes.label}>
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </Container>
    </nav>
  );
}
