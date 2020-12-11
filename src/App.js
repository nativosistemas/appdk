import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login.component";
//import SignUp from "./components/signup.component";
import Promociones from './components/Promociones'
import Pedidos from './components/Pedidos'
import PedidosHistorial from './components/PedidosHistorial'

function App() {
  return (<Router>
    <div className="app container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item " activeClassName="active">
              <Link className="nav-link" to={"/promociones"} data-toggle="collapse" data-target=".navbar-collapse.show">Promociones <span class="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item " activeClassName="active">
              <Link className="nav-link" to={"/pedidos"} data-toggle="collapse" data-target=".navbar-collapse.show">Pedidos </Link>
            </li>
            <li className="nav-item" activeClassName="active">
              <Link className="nav-link" to="/pedidoshistorial" data-toggle="collapse" data-target=".navbar-collapse.show">Historial de pedidos</Link>
            </li>
            <li className="nav-item" activeClassName="active">
              <Link className="nav-link" to="/sign-in" data-toggle="collapse" data-target=".navbar-collapse.show">Salir</Link>
            </li>
          </ul>
          <span className="navbar-text">
            <u> Promotor/a: </u>Juan Perez
    </span>
        </div>
      </nav>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path="/sign-in" component={Login} />
        <Route path="/promociones" component={Promociones} />
        <Route path="/pedidos" component={Pedidos} />
        <Route path="/pedidoshistorial" component={PedidosHistorial} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;