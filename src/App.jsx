import React from 'react';
import './global.css';
import './pages/_common/print/print.css';
import './pages/_common/print/portraitCss.css';
import './pages/_common/print/landscapeCss.css';
import { ROUTES_CONFIG } from './routes/routesConfig';
import Routes from './routes/Routes';

function App() {
  return (
    <>
      <Routes routes={ROUTES_CONFIG} />
    </>
  );
}

export default App;
