import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AssignmentSharpIcon from '@material-ui/icons/AssignmentSharp';
import SubtitlesSharpIcon from '@material-ui/icons/SubtitlesSharp';
import LibraryBooksSharpIcon from '@material-ui/icons/LibraryBooksSharp';
import LocalMallSharpIcon from '@material-ui/icons/LocalMallSharp';
import UnarchiveSharpIcon from '@material-ui/icons/UnarchiveSharp';
import AssignmentTurnedInSharpIcon from '@material-ui/icons/AssignmentTurnedInSharp';
import Container from '@material-ui/core/Container';
import { green } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';


export default function Header() {
  const classes = useStyles();

  const menuRoutes = [
    { label: 'ORDENS DE SERVIÇO', pathname: '/ordens-servicos', icon: <LibraryBooksSharpIcon font="small" /> },
    { label: 'TRIAGEM', pathname: '/triagens', icon: <AssignmentSharpIcon font="small" /> },
    { label: 'DIAGNÓSTICO', pathname: '/diagnosticos', icon: <SubtitlesSharpIcon font="small" /> },
    { label: 'DEMANDA', pathname: '/demandas', icon: <LocalMallSharpIcon font="small" /> },
    { label: 'CALIBRAGEM', pathname: '/calibragem', icon: <AssignmentTurnedInSharpIcon font="small" /> },
    { label: 'ENTREGA', pathname: '/entregas', icon: <UnarchiveSharpIcon font="small" /> },
  ];

  const currentPathname = window.location.pathname;

  return (
    <header>
      <AppBar
        position="absolute"
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.divTitle}>
            <Typography
              className={classes.text}
              noWrap
            >
              <strong>
                CENTRAL
                <br />
                {' '}
                DE
                <br />
                {' '}
                VENTILADORES
              </strong>
            </Typography>
          </div>
          <div className={classes.divUser}>
            <Typography
              className={classes.textUser}
              noWrap
            >
              {/* usuario, joe */}
            </Typography>
          </div>
        </Toolbar>
        <div className={classes.appBarFooter}>
          <Container>
            <div className={classes.divTextFooter}>
              <Grid container alignItems="center" spacing={4}>
                {menuRoutes.map((item, index) => (
                  <Grid item key={index} className={currentPathname === item.pathname ? classes.currentLink : ''}>
                    <Link
                      to={item.pathname}
                      className={classes.link}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        {item.icon}
                        {' '}
                        <span style={{ marginLeft: '0.5rem' }}>{item.label}</span>
                      </div>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Container>
        </div>
      </AppBar>
    </header>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    height: 300,
    background: green[500],
  },
  toolbar: {
    marginTop: 20,
    justifyContent: 'space-between',
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1200 + theme.spacing(2) * 2)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  appBarFooter: {
    width: '100%',
    background: green['800'],
    height: 60,
    position: 'absolute',
    bottom: 0,
  },
  divTextFooter: {
    height: 60,
    display: 'flex',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1200 + theme.spacing(2) * 2)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    flexDirection: 'row',
  },
  divTitle: {
    flexDirection: 'row',
  },
  textUser: {
    fontSize: 20,
  },
  textFooter: {
    fontSize: 20,
    // alignSelf: "center",
    color: '#fff',
  },
  text: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    // marginRight: "2rem",
    fontSize: 18,
    // alignSelf: "center",
    color: '#fff',
    textDecoration: 'none',
  },
  currentLink: {
    borderBottom: '4px white solid',
  },
}));
