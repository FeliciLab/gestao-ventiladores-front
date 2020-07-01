import React from 'react';
import './global.css';
import './pages/_common/print/print.css';
import './pages/_common/print/portraitCss.css';
import './pages/_common/print/landscapeCss.css';
import { ROUTES_CONFIG } from './routes/routesConfig';
import Routes from './routes/Routes';
import { AlertProvider } from './context/AlertContext';


function App() {
  return (
    <AlertProvider>
      <Routes routes={ROUTES_CONFIG} />
    </AlertProvider>
  );
}

export default App;
