import React, { useState, useEffect, useRef } from 'react';
import ResultadoFarmacia from './ResultadoFarmacia'
import { getCantidad_ModuloFarmacia } from './utils';

function Pedidos() {
  const [farmaciaModulosArray, setFarmaciaModulosArray] = useState([]);
  const pedidosFarmaciasRefs = new Map();

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
        var cant = getCantidad_ModuloFarmacia(x.modulo, x.farmacia);
        if (cant <= 0) {
          isNotFind = false;
          break;
        }
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
    });
    setFarmaciaModulosArray(l_farmaciaModulos_array);

  }, []);

  return (
    <div className="app container-fluid">
      <div className="alert alert-primary text-center  text-uppercase" ><h2>Pedidos por farmacias</h2></div>
      <div className="float-right">
        <button className="btn btn-success">Enviar Todos los Pedidos</button>
      </div>
      <br></br>
      {farmaciaModulosArray.map((farmaciaModulos, i) => {
        return (
            <ResultadoFarmacia key={i} ref={pedidosFarmaciasRefs.get(farmaciaModulos.farmacia.id)} farmaciaModulos={farmaciaModulos} ></ResultadoFarmacia>
        );
      })}
    </div>

  );
}

export default Pedidos;
