import React, { Component } from 'react';
import './App.css';
//import './clases.js';
import ResultadoModulo from './components/ResultadoModulo'
import Nav from './components/Nav'

class AppModulo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modulos: [{ id: 1, nombre: 'aspirina', moduloDetalle: [{ id: 100, nombre: '3%', producto: 'curitas' }, { id: 101, nombre: '5%', producto: 'red' }] }, { id: 2, nombre: 'b', moduloDetalle: [{ id: 103, nombre: '3%', producto: 'curitas' }, { id: 104, nombre: '10%', producto: 'red' }] }, { id: 3, nombre: 'c', moduloDetalle: [{ id: 105, nombre: '8%', producto: 'red' }] }, { id: 4, nombre: 'd', moduloDetalle: [{ id: 106, nombre: '3%', producto: 'curitas' }, { id: 107, nombre: '5%', producto: 'red' }] }, { id: 5, nombre: 'ae', moduloDetalle: [{ id: 108, nombre: '3%', producto: 'curitas' }] }],
      farmacias: [{ id: 1, nombre: 'La red', direccion: 'san juan 314' }, { id: 2, nombre: 'Mi remedio', direccion: 'urquiza 444' }],
      farmaciaSeleccionada: ''

    }

    this.handleChange = this.handleChange.bind(this);
    this.elementResultadoModulo = React.createRef();
  }
  componentWillMount() {
    fetch('http://www.kellerhoff.com.ar:84/api/farmacia')
      .then((response) => {
        return response.json()
      })
      .then((pFarmacias) => {
        this.setState({ farmacias: pFarmacias })
      })    
  }
  handleChange(event) {
    let farma = this.state.farmacias.find(element => String(element.id) === String(event.target.value));
    this.setState({ farmaciaSeleccionada: farma }, () => {
      this.elementResultadoModulo.current.changeCambo();
    });
  }
  render() {
    return (
      <div className="app container">
        <Nav handleChange={this.handleChange} farmacias={this.state.farmacias}></Nav>

        <ResultadoModulo ref={this.elementResultadoModulo} modulos={this.state.modulos} farmacia={this.state.farmaciaSeleccionada} ></ResultadoModulo>
      </div>
    )
  };
}

export default AppModulo;
