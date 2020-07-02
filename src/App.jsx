import React from 'react';
import './global.css';
import './pages/_common/print/print.css';
import './pages/_common/print/portraitCss.css';
import './pages/_common/print/landscapeCss.css';
import Routes from './routes/Routes';
import { AuthProvider } from './contexts/auth';
import { AlertProvider } from './context/AlertContext';

function App() {
  return (
    <AuthProvider>
      <AlertProvider>
        <Routes />
      </AlertProvider>
    </AuthProvider>
  );
}

export default App;
