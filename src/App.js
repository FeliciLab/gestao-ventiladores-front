import React from "react";
import "./global.css";
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
