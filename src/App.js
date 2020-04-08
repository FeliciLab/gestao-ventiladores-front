import React from "react";
import "./global.css";
import Routes from "./router";
import {BrowserRouter} from "react-router-dom";
import Layout from "./pages/_layout/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </>
  );
}
export default App;
