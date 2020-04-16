import React from "react";
import "./global.css";
import "./pages/_common/print/print.css";
import "./pages/_common/print/portraitCss.css";
import "./pages/_common/print/landscapeCss.css";
import Routes from "./router";
import {BrowserRouter} from "react-router-dom";

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </>
  );
}

export default App;
