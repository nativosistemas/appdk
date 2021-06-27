import React, { Component } from 'react';
import { withRouter, Redirect } from "react-router-dom";
import Resultado from './Resultado'
import Nav from './Nav'
import { isLoggedIn, getName, getUrl, getToken, getFarmaciaCurrent, setFarmaciaCurrent, getMontoAhorroMontoTotalGeneral_farmacia } from './utils';

class Promociones extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modulosOriginal: [],
      modulos: [],
      farmacias: [],
      farmaciaSeleccionada: '',
      filtrado: '',
      totalAhorroGeneral_promociones: 0,
      montoTotalGeneral_promociones: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.elementResultadoModulo = React.createRef();
    this.elementNav = React.createRef();
  }

  componentWillMount() {
    this.cargarDatosInicio_DesdeLocalStorage();
    if (navigator.onLine) {
      this.cargarDatosInicio_DesdeApi();
    }
  }
  cargarDatosInicio_DesdeApi = () => {
    this.cargarDatosInicio_DesdeLocalStorage();
  }
  cargarDatosInicio_DesdeLocalStorage = () => {
    var l_farmacias = localStorage.getItem('l_farmacias') || '';
    if (l_farmacias !== null && l_farmacias !== undefined && l_farmacias !== '') {
      l_farmacias = JSON.parse(l_farmacias);
    }
    if (!Array.isArray(l_farmacias)) {
      l_farmacias = [];
    }
    this.setState({ farmacias: l_farmacias });
    var l_modulos = localStorage.getItem('l_modulos') || '';
    if (l_modulos !== null && l_modulos !== undefined && l_modulos !== '') {
      l_modulos = JSON.parse(l_modulos);
    }
    if (!Array.isArray(l_modulos)) {
      l_modulos = [];
    }
    var cuit = this.props.match.params.cuit;
    let l_modulos_filtro = [];
    if (cuit === undefined) {
      l_modulos_filtro = l_modulos;
    } else {
      l_modulos_filtro = l_modulos.filter(element => String(cuit) === String(element.idLaboratorio));
    }
    this.setState({ modulosOriginal: l_modulos_filtro }, () => {
      //
      let farma = getFarmaciaCurrent();
      if (farma !== null && farma !== undefined && farma !== '') {
        this.setState({ farmaciaSeleccionada: farma }, () => {
          //this.elementNav.setTextInputFarmacia(farma);
          //
        });
      }
      //
      this.filtrarModulosApp('');
    })
  }
  handleChange(event) {
    let farma = this.state.farmacias.find(element => String(element.id) + " - " + element.nombre === String(event.target.value));
    setFarmaciaCurrent(farma);
    this.setState({ farmaciaSeleccionada: farma }, () => {
      this.elementResultadoModulo.current.actualizarCantidadEnLosModulos();
    });
  }
  filtrarModulosApp = (pTexto) => {
    this.setState({
      filtrado: pTexto
    }, () => {
      if (this.state.filtrado === '') {
        this.setState({ modulos: this.state.modulosOriginal })

      } else {
        let modulosFiltrado = this.state.modulosOriginal.filter(m =>
          m.moduloDetalle.find(e => { return String(e.producto).toUpperCase().includes(String(this.state.filtrado).toUpperCase()) }) !== undefined
        );
        this.setState({ modulos: modulosFiltrado })
      }
    });
  }
  refreshMontoAhorroGeneral_promociones = () => {
    var oMontos = getMontoAhorroMontoTotalGeneral_farmacia();
    this.setState({ totalAhorroGeneral_promociones: oMontos.ahorroTotal }, this.setState({ montoTotalGeneral_promociones: oMontos.montoTotal }))
  }
  onClickSeguirComprando = (e) => {
    e.preventDefault();
    // window.location.href = "./";
    // window.location.reload(true);

    let path = `/laboratorio`;
    //let history = useHistory();
    //history.push(path);
    this.props.history.push(path);
  }
  onClickVolver = (e) => {
    e.preventDefault();
    //this.elementNav.current.textInput.current.value = 'hola';
    //this.filtrarModulosApp('');
    window.location.reload(false);
  }
  render() {
    if (!isLoggedIn()) {
      return <Redirect to="/sign-in" />;
    }
    return (
      <>
        <div className="app container-fluid">
          <div className="alert alert-primary text-center  text-uppercase" ><h2>Pedidos</h2></div>
          <Nav ref={this.elementNav} handleChange={this.handleChange} filtrarModulosApp={this.filtrarModulosApp} getTotalAhorroGeneral={this.state.totalAhorroGeneral_promociones} getMontoTotalGeneral={this.state.montoTotalGeneral_promociones} farmacias={this.state.farmacias} farmacia={this.state.farmaciaSeleccionada} ></Nav>
          <div className="float-end">
            <button className="btn btn-success" onClick={this.onClickSeguirComprando}>Seguir Comprando</button></div>
          <br></br> <br></br>
          <Resultado ref={this.elementResultadoModulo} modulos={this.state.modulos} farmacia={this.state.farmaciaSeleccionada} refreshMontoAhorroGeneral={this.refreshMontoAhorroGeneral_promociones} isPromociones={true} ></Resultado>
          {/*(this.state.modulos.length === 0 && this.state.modulosOriginal.length > 0) &&
            <div className="float-right"><br></br> <button className="btn btn-success" onClick={this.onClickVolver}>Volver</button></div>*/}
          {this.state.modulos.length > 0 &&
            <div className="float-end"><br></br> <button className="btn btn-success" onClick={this.onClickSeguirComprando}>Seguir Comprando</button></div>}


        </div>
      </>
    )
  };
}

export default Promociones;
