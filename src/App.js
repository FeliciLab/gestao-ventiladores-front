import React from "react";
import "./global.css";
import Routes from "./router";
import Layout from "./pages/_layout/Layout";
function App() {
  return (
    <>
      <Layout>
        <Routes />
      </Layout>
    </>
  );
}
export default App;
