import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Nav} from 'react-bootstrap'
import Login from "./components/login.component";
//import SignUp from "./components/signup.component";
import Farmacia from './Farmacia'

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">

          <Link className="navbar-brand" to={"/sign-in"}>Gestion Pedidos</Link>
          <Nav className="mr-auto">
            <Nav.Link><Link to="/farmacia">Farmacia</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
          </Nav>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
          </Switch>
        </div>
        <div>
          <Switch>
            <Route path="/farmacia" component={Farmacia} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;