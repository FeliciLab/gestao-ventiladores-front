import React from 'react';
import './global.css';
import './pages/_common/print/print.css';
import './pages/_common/print/portraitCss.css';
import './pages/_common/print/landscapeCss.css';
import getRoutes from './routes/routesConfig';
import Routes from './routes/Routes';

function App() {
  return (
    <>
      <Routes routes={getRoutes()} />
    </>
  );
}

export default App;
