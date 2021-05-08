import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from "react-router-dom";
import ResultadoCarritoV2 from './ResultadoCarritoV2'
import { isLoggedIn, getName, getUrl, getToken, getCantidad_ModuloFarmacia, getFarmaciaCurrent,getFarmaciaActualizada,getModuloActualizado } from './utils';

function Pedidos() {
    const [farmaciaModulosArray, setFarmaciaModulosArray] = useState([]);
    const pedidosFarmaciasRefs = new Map();

    useEffect(() => {
        var l_farmaciaModulos_array = [];
        //let farma = getFarmaciaCurrent();
        // if (farma !== null && farma !== undefined && farma !== '') {
        var l_pendienteGrabados = window.localStorage.getItem('l_pendienteGrabados') || '';
        if (l_pendienteGrabados !== null && l_pendienteGrabados !== undefined && l_pendienteGrabados !== '') {
            l_pendienteGrabados = JSON.parse(l_pendienteGrabados);
        }
        if (!Array.isArray(l_pendienteGrabados)) {
            l_pendienteGrabados = [];
        }

        l_pendienteGrabados.forEach(x => {
            for (var y = 0; y < x.modulos.length; y++) {
                var isNotFind = true;
                for (var i = 0; i < l_farmaciaModulos_array.length; i++) {
                    if (l_farmaciaModulos_array[i].farmacia.id === x.farmacia.id) {
                        var mod = getModuloActualizado(x.modulos[y].modulo);
                        mod.cantidadGrabado = x.modulos[y].cantidad;
                        l_farmaciaModulos_array[i].modulos.push(mod);
                        isNotFind = false;
                        break;
                    }
                }
                if (isNotFind) {
                    let modulos_temp = [];
                    //x.modulos[y].modulo.cantidadGrabado = x.modulos[y].cantidad;
                    //modulos_temp.push(getModuloActualizado(x.modulos[y].modulo));
                    var mod = getModuloActualizado(x.modulos[y].modulo);
                    mod.cantidadGrabado = x.modulos[y].cantidad;
                    modulos_temp.push(mod);
                    var f_m = {
                        farmacia: getFarmaciaActualizada(x.farmacia),
                        modulos: modulos_temp
                    };
                    l_farmaciaModulos_array.push(f_m);
                }

            }
        })
        l_farmaciaModulos_array.forEach(element => {
            pedidosFarmaciasRefs.set(element.farmacia.id, React.createRef());
        });
        //}
        setFarmaciaModulosArray(l_farmaciaModulos_array);

    }, []);
    /*function getModuloActualizado(pModulo) {
        var mod = getModulo_actualizado(pModulo);
        if (mod === null) {
            return pModulo;
        }
        return mod;
    }*/
    function onClickEnviarTodosPedidos(e) {
        e.preventDefault();
        var l_post_ok = [];
        //var url = 'https://api.kellerhoff.com.ar/api/';
        var fechaNow = Date.now();
        var data = {};
        data.promotor = getName();
        data.pedidoModulos = [];
        farmaciaModulosArray.map((farmaciaModulos, i) => {

            farmaciaModulos.modulos.map((modulo, i) => {
                //var cant = getCantidad_ModuloFarmacia(modulo, farmaciaModulos.farmacia);
                var post_ok = {
                    modulo: modulo,
                    farmacia: farmaciaModulos.farmacia,
                    cantidad: modulo.cantidadGrabado,
                    fecha:fechaNow,
                    guid: null,
                    procesado: null,
                    procesado_fecha: null,
                    procesado_cantidad: null,
                    procesado_descripcion: null
                };
                l_post_ok.push(post_ok);
                var p = {
                    idModulo: modulo.id,
                    idFarmacia: farmaciaModulos.farmacia.id,
                    cantidad: modulo.cantidadGrabado
                };
                data.pedidoModulos.push(p);
            })
        });

        var json = JSON.stringify(data);
        fetch(getUrl() + 'Pedido', {
            method: 'POST',
            headers: {
                'Authorization': getToken(),
                'Content-Type': 'application/json'
            },
            body: json
        })
            .then(results => results.json())
            .then(data => {         
                if (data === null || data === undefined || data === '' || !data || data === '00000000-0000-0000-0000-000000000000') {
                    alert('Guid ' + data);
                } else {

                    var l_pedidosHistorial = window.localStorage.getItem('l_pedidosHistorial') || '';
                    if (l_pedidosHistorial !== null && l_pedidosHistorial !== undefined && l_pedidosHistorial !== '') {
                        l_pedidosHistorial = JSON.parse(l_pedidosHistorial);
                    }
                    if (!Array.isArray(l_pedidosHistorial)) {
                        l_pedidosHistorial = [];
                    }
                    l_post_ok.forEach(element => {
                        element.guid = data;
                    });
                    var l_pedidosHistorial_new = l_pedidosHistorial.concat(l_post_ok);
                    localStorage.setItem('l_pedidosHistorial', JSON.stringify(l_pedidosHistorial_new));

                    localStorage.setItem('l_pendienteGrabados', JSON.stringify([]));
                    window.location.reload(false);
                }

            });
    }
    if (!isLoggedIn()) {
        return <Redirect to="/sign-in" />;
    }
    return (
        <div className="app container-fluid">
            <div className="alert alert-primary text-center  text-uppercase" ><h2>Pedidos</h2></div>
            <div className="float-right">
                <button className="btn btn-success" onClick={(e) => onClickEnviarTodosPedidos(e)}>Enviar Todos los Pedidos</button>
            </div>
            <br></br>
            {farmaciaModulosArray.map((farmaciaModulos, i) => {
                return (
                    <ResultadoCarritoV2 key={i} ref={pedidosFarmaciasRefs.get(farmaciaModulos.farmacia.id)} farmaciaModulos={farmaciaModulos} isPedido={true} ></ResultadoCarritoV2>
                );
            })}
        </div>

    );
}


export default Pedidos;
