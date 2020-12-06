import React, { Component } from 'react';
import Resultado from './Resultado'

class Pedidos extends Component {

  constructor(props) {
    super(props);
    this.l_farmaciaModulos_array = []
    this.pedidosFarmaciasRefs = new Map();
    var l_pedidos = localStorage.getItem('l_pedidos') || '';
    if (l_pedidos !== '') {
      l_pedidos = JSON.parse(l_pedidos);
    }
    if (!Array.isArray(l_pedidos)) {
      l_pedidos = [];
    }


    l_pedidos.forEach(x => {
      var isNotFind = true;
      for (var i = 0; i < this.l_farmaciaModulos_array.length; i++) {
        if (this.l_farmaciaModulos_array[i].farmacia.id === x.farmacia.id) {
          this.l_farmaciaModulos_array[i].modulos.push(x.modulo);
          isNotFind = false;
          break;
        }
      }
      if (isNotFind) {
        let modulos_temp = [];
        modulos_temp.push(x.modulo);
        var f_m = {
          farmacia: x.farmacia,
          modulos: modulos_temp
        };
        this.l_farmaciaModulos_array.push(f_m);
      }
    })
    this.l_farmaciaModulos_array.forEach(element => {
      this.pedidosFarmaciasRefs.set(element.farmacia.id, React.createRef());
    });
  }
  componentDidMount() {
    this.pedidosFarmaciasRefs.forEach(element => {
      element.current.actualizarCantidadEnLosModulos();
    });
  }
  render() {

    return (

      <div className="app container-fluid">
        <h2><p className="text-center">Pedidos por farmacias</p></h2>
        <div className="float-right">
          <button className="btn btn-success">Enviar Todos los Pedidos</button>
        </div>
        <br></br>
        {this.l_farmaciaModulos_array.map((farmaciaModulos, i) => {
          return (
            <>
              <h4>{String(farmaciaModulos.farmacia.id) + " - " + farmaciaModulos.farmacia.nombre}</h4>
            
              <Resultado key={i}  ref={this.pedidosFarmaciasRefs.get(farmaciaModulos.farmacia.id)} modulos={farmaciaModulos.modulos} farmacia={farmaciaModulos.farmacia} ></Resultado>
              <br></br>
              <div className="float-right">
                <button className="btn btn-success">Enviar Pedido</button>
              </div>
            </>
          );
        })}
      </div>

    )
  };
}

export default Pedidos;
