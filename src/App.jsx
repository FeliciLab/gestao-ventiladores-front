import React from 'react';
import './global.css';
import './pages/_common/print/print.css';
import './pages/_common/print/portraitCss.css';
import './pages/_common/print/landscapeCss.css';
import Routes from './routes/Routes';
import { AuthProvider } from './contexts/AuthContext';
import { AlertProvider } from './contexts/AlertContext';
import { LoadingProvider } from './contexts/LoadingContext';

function App() {
  return (
    <AuthProvider>
      <AlertProvider>
        <LoadingProvider>
          <Routes />
        </LoadingProvider>
      </AlertProvider>
    </AuthProvider>
  );
}

export default App;
