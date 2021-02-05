import React, { useState, useEffect, useRef } from 'react';
import ResultadoFarmacia from './ResultadoFarmacia'
import { getCantidad_ModuloFarmacia, getModulo_actualizado } from './utils';

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
        var cant = x.cantidad;// getCantidad_ModuloFarmacia(x.modulo, x.farmacia);
        if (cant <= 0) {
          isNotFind = false;
          break;
        }
        if (l_farmaciaModulos_array[i].farmacia.id === x.farmacia.id) {
          l_farmaciaModulos_array[i].modulos.push(getModuloActualizado(x.modulo));
          isNotFind = false;
          break;
        }
      }
      if (isNotFind) {
        var cant = x.cantidad;// getCantidad_ModuloFarmacia(x.modulo, x.farmacia);
        if (cant > 0) {
          let modulos_temp = [];
          modulos_temp.push(getModuloActualizado(x.modulo));
          var f_m = {
            farmacia: x.farmacia,
            modulos: modulos_temp
          };
          l_farmaciaModulos_array.push(f_m);
        }
      }
    })
    l_farmaciaModulos_array.forEach(element => {
      pedidosFarmaciasRefs.set(element.farmacia.id, React.createRef());
    });
    setFarmaciaModulosArray(l_farmaciaModulos_array);

  }, []);
  function getModuloActualizado(pModulo) {
    var mod = getModulo_actualizado(pModulo);
    if (mod === null) {
      return pModulo;
    }
    return mod;
  }
  function onClickEnviarTodosPedidos(e) {
    e.preventDefault();

    var url = 'https://api.kellerhoff.com.ar/api/';
    var data = {};
    data.promotor = 'Perez, Nestor';
    data.pedidoModulos = [];
    farmaciaModulosArray.map((farmaciaModulos, i) => {

      farmaciaModulos.modulos.map((modulo, i) => {
        var cant = getCantidad_ModuloFarmacia(modulo, farmaciaModulos.farmacia);
        var p = {
          idModulo: modulo.id,
          idFarmacia: farmaciaModulos.farmacia.id,
          cantidad: cant
        };
        data.pedidoModulos.push(p);
      })
    })

    var json = JSON.stringify(data);
    fetch(url + 'Pedido', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: json
    })
      .then(results => results.json())
      .then(data => {
        if (!data || data === '00000000-0000-0000-0000-000000000000') {
          alert('Guid ' + data);
        } else {
          localStorage.setItem('l_pedidos', JSON.stringify([]));
          window.location.reload(false);
        }

      });
  }
  return (
    <div className="app container-fluid">
      <div className="alert alert-primary text-center  text-uppercase" ><h2>Pedidos por farmacias</h2></div>
      <div className="float-right">
        <button className="btn btn-success" onClick={(e) => onClickEnviarTodosPedidos(e)}>Enviar Todos los Pedidos</button>
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
