import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import Login from "./components/Login";
import Promociones from './components/Promociones'
import Pedidos from './components/Pedidos'
import PedidosHistorial from './components/PedidosHistorial'
import Laboratorio from './components/Laboratorio'
import Carrito from './components/Carrito'
import Config from './components/Config'

import { apiLoadDataAsync, getUltimaSincronizacion, getFormattedDateTime, getTiempoUltimaSincronizacion, loggedOut, getName } from './components/utils';

function App() {
  function onClickActualizar(e) {
    e.preventDefault();
    // window.location.href = "./";
    // window.location.reload(true);
    apiLoadDataAsync().then(() => {
      window.location.reload(false);
    });
  }
  function onClickSalir(e) {
    loggedOut();
  }

  function getClassBtn() {
    var result = 'btn-light';
    if (getUltimaSincronizacion() != null) {
      var segundos = getTiempoUltimaSincronizacion();
      if (segundos > 60) {//86400 //86400 segundos son 24 horas
        result = 'btn-danger';
      }
    }
    return result;
  }
  return (
    <Router>
      <div className="app container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            {/*<img src="img/logo2.png" alt="" width="213" height="47" className="d-inline-block align-top"></img>*/}
            <img src={`data:image/jpeg;base64,${"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"}`} alt="" width="213" height="47" className="d-inline-block align-top"></img>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item" activeClassName="active">
                <Link className="nav-link" to="/laboratorio" data-toggle="collapse" data-target=".navbar-collapse.show">Laboratorios</Link>
              </li>
               {/*<li className="nav-item " activeClassName="active">
                <Link className="nav-link" to={"/promociones"} data-toggle="collapse" data-target=".navbar-collapse.show">Promociones <span class="sr-only">(current)</span></Link>
              </li>*/}
              <li className="nav-item " activeClassName="active">
                <Link className="nav-link" to={"/carrito"} data-toggle="collapse" data-target=".navbar-collapse.show">Carrito </Link>
              </li>
              <li className="nav-item " activeClassName="active">
                <Link className="nav-link" to={"/pedidos"} data-toggle="collapse" data-target=".navbar-collapse.show">Pedidos </Link>
              </li>
              <li className="nav-item" activeClassName="active">
                <Link className="nav-link" to="/pedidoshistorial" data-toggle="collapse" data-target=".navbar-collapse.show">Historial de pedidos</Link>
              </li>
              <li className="nav-item" activeClassName="active">
                <Link className="nav-link" to="/config" data-toggle="collapse" data-target=".navbar-collapse.show"  ><svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></Link>
              </li>
              {/*<li className="nav-item" activeClassName="active">
                <Link className="nav-link" to="/sign-in" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={onClickSalir} ><svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-power"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg></Link>
              </li>*/}
              <li className="nav-item" activeClassName="active">
                <button className={"btn " + getClassBtn()} onClick={(e) => onClickActualizar(e)}><span className="ultimaActualizacion">Sincronizar&nbsp;</span>&nbsp;<svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-ccw"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg></button>
                {/*Actualizar */}
                {getUltimaSincronizacion() != null &&  <span className="navbar-text ultimaActualizacion">&nbsp;Última actualización:&nbsp;{getFormattedDateTime(new Date(parseFloat(getUltimaSincronizacion())))}   </span> /**/}
              </li>

            </ul>
            <span className="navbar-text">
              {getName() != '' && <u>Promotor/a:</u>} {getName() != '' && getName()}
            </span>
            
          </div>

        </nav>
        <Switch>
          <Route exact path='/' component={Laboratorio} />
          <Route path="/sign-in" component={Login} />
          <Route path="/promociones/:cuit" component={Promociones} />
          <Route path="/promociones" component={Promociones} />
          <Route path="/carrito" component={Carrito} />
          <Route path="/pedidos" component={Pedidos} />
          <Route path="/pedidoshistorial" component={PedidosHistorial} />
          <Route path="/laboratorio" component={Laboratorio} />
          <Route path="/config" component={Config} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

