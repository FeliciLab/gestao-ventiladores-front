import React from 'react';
import './global.css';
import './pages/_common/print/print.css';
import './pages/_common/print/portraitCss.css';
import './pages/_common/print/landscapeCss.css';
import Routes from './routes/Routes';
import { AuthProvider } from './contexts/AuthContext';
import { AlertProvider } from './contexts/AlertContext';
import { LoadingProvider } from './contexts/LoadingContext';
import Loading from './components/Loading/Loading';

function App() {
  return (
    <AuthProvider>
      <AlertProvider>
        <LoadingProvider>
          <Routes />

          <Loading />
        </LoadingProvider>
      </AlertProvider>
    </AuthProvider>
  );
}

export default App;
