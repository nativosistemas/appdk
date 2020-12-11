import React, { useState, useEffect, useRef } from 'react';
import Resultado from './Resultado'

function Pedidos() {
  const [farmaciaModulosArray, setFarmaciaModulosArray] = useState([]);
  //const revealRefs = useRef([]);
  const pedidosFarmaciasRefs = new Map();
  /*revealRefs.current = [];
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }*/

  useEffect(() => {
    var l_farmaciaModulos_array = []
    var l_pedidos = window.localStorage.getItem('l_pedidos') || '';
    if (l_pedidos !== '') {
      l_pedidos = JSON.parse(l_pedidos);
    }
    if (!Array.isArray(l_pedidos)) {
      l_pedidos = [];
    }
    l_pedidos.forEach(x => {
      var isNotFind = true;
      for (var i = 0; i < l_farmaciaModulos_array.length; i++) {
        if (l_farmaciaModulos_array[i].farmacia.id === x.farmacia.id) {
          l_farmaciaModulos_array[i].modulos.push(x.modulo);
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
        l_farmaciaModulos_array.push(f_m);
      }
    })
    l_farmaciaModulos_array.forEach(element => {
      pedidosFarmaciasRefs.set(element.farmacia.id, React.createRef());
      // revealRefs.current.push(React.createRef());
    });
    setFarmaciaModulosArray(l_farmaciaModulos_array);

  });

  return (
    <div className="app container-fluid">
      <div className="alert alert-primary text-center  text-uppercase" ><h2>Pedidos por farmacias</h2></div>
      <div className="float-right">
        <button className="btn btn-success">Enviar Todos los Pedidos</button>
      </div>
      <br></br>
      {farmaciaModulosArray.map((farmaciaModulos, i) => {
        return (
          <>
            <br></br>
            <div className="card">
              <div className="card-header pedidoFarmacia-header">
                <h5 className="card-title">{String(farmaciaModulos.farmacia.id) + " - " + farmaciaModulos.farmacia.nombre}</h5>
              </div>
              <div className="card-body card-body-box-sizing">
                <Resultado key={i} ref={pedidosFarmaciasRefs.get(farmaciaModulos.farmacia.id)} modulos={farmaciaModulos.modulos} farmacia={farmaciaModulos.farmacia} ></Resultado>
              </div>
              <div className="card-footer text-muted pedidoFarmacia-footer">
                <div className="float-right">
                  <button className="btn btn-success">Enviar Pedido</button>
                </div>
              </div>
            </div>
            <br></br>
          </>
        );
      })}
    </div>

  );
}

export default Pedidos;
