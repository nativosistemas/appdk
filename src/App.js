import React, { Component } from 'react';
import './App.css';
import Buscador from './components/Buscador'
import Resultado from './components/Resultado'
//import Paginacion from './components/Paginacion'

class App extends Component {
  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  }
  scroll =()=>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start');
  }
  paginaAnterior = () => {
    let pagina = this.state.pagina;
    if (pagina === 1)
      return null;
    pagina -= 1;
    this.setState({ pagina }, () => { this.consultarApi();this.scroll();});
  }
  paginaSiguiente = () => {
    let pagina = this.state.pagina;
    pagina += 1;
    this.setState({ pagina }, () => { this.consultarApi();this.scroll(); });

  }
  consultarApi = () => {
    const pagina = this.state.pagina;
    const termino =  this.state.termino;
    const url = `https://pixabay.com/api/?key=18792298-34063b6f96e5003b336477f0d&q=${termino}&per_page=20&page=${pagina}`;
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }))

  }
  datosBusqueda = (termino) => {
    this.setState({
      termino: termino,
      pagina: 1
    }, () => { this.consultarApi();
     });
  }
  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador </p>
          <Buscador datosBusqueda={this.datosBusqueda}></Buscador>
        </div>
        <div className="row justify-content-center">
          <Resultado imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}></Resultado>
        </div>
      </div>
    )
  };
}

export default App;
