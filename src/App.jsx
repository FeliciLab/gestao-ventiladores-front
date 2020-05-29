import React from 'react';
import './global.css';
import './pages/_common/print/print.css';
import './pages/_common/print/portraitCss.css';
import './pages/_common/print/landscapeCss.css';
import getRoutes, { mainMenuRoutes } from './router';
import Routes from './components/Routes/Routes';
import Header from './pages/_layout/Header';

function App() {
  return (
    <>
      <Routes routes={getRoutes()}>
        <Header menuRoutes={mainMenuRoutes()} />
      </Routes>
    </>
  );
}

export default App;
