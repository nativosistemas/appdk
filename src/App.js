import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap'
import Login from './components/Login'
import Farmacia from './Farmacia'
import About from './components/About'
import {Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Gestion Promociones</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link><Link to="/login">Login</Link></Nav.Link>
            <Nav.Link><Link to="/farmacia">Farmacia</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
        <Route path="/login" component={Login} ></Route>
        <Route path="/farmacia" component={Farmacia} ></Route>
        <Route path="/about" component={About} ></Route>
        <Route path="/" component={Login} ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;