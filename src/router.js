import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";

import Profile from "./pages/Profile";
import ListaOrdemServicos from "./pages/ListaOrdemServicos";
import OsPrint from "./pages/OsPrint";
import FormTriagem from "./pages/FormTriagem";
import FormDiagnostico from "./pages/FormDiagnostico";
import {isAutenticated} from "./services/auth";
import Manutencao from "./pages/Manutencao";
import Avaliacao from "./pages/Avaliacao";

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={(props) =>
      isAutenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{pathname: "/", state: {from: props.location}}} />
      )
    }
  />
);

const Routes = () => (
  <Switch>
    <Route path="/" exact component={FormTriagem} />
    <Route path="/Diagnostico" exact component={FormDiagnostico} />
    <Route path="/listagem-ordem-servico" component={ListaOrdemServicos} />
    <Route path="/manutencao" component={Manutencao} />
    <Route path="/avaliacao" component={Avaliacao} />
    <Route path="/osprint" component={OsPrint} />
    <PrivateRoute path="/profile" component={Profile} />
  </Switch>
);

export default Routes;
