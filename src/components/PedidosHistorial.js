import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from "react-router-dom";
import ResultadoV2 from './ResultadoV2'
import Accordion from './Accordion'
import { isLoggedIn, getFormattedDateTime, getCantidad_ModuloFarmacia, getModulo_actualizado, getFarmaciaCurrent, getFarmaciaActualizada } from './utils';

function PedidosHistorial() {
    const [farmaciaModulosArray, setFarmaciaModulosArray] = useState([]);
    const pedidosFarmaciasRefs = new Map();
    const itemsEls = useRef(new Array());

    useEffect(() => {
        var l_farmaciaModulos_array = [];

        var l_pedidosHistorial = window.localStorage.getItem('l_pedidosHistorial') || '';
        if (l_pedidosHistorial !== null && l_pedidosHistorial !== undefined && l_pedidosHistorial !== '') {
            l_pedidosHistorial = JSON.parse(l_pedidosHistorial);
        }
        if (!Array.isArray(l_pedidosHistorial)) {
            l_pedidosHistorial = [];
        }



        let nuevoObjeto = [];
        //Recorremos el arreglo 
        l_pedidosHistorial.forEach(x => {
            var index = 0;
            var isNotFindGuid = true;
            for (var i = 0; i < nuevoObjeto.length; i++) {
                if (nuevoObjeto[i].guid === x.guid) {
                    index = i;
                    isNotFindGuid = false;
                    break;
                }
            }
            if (isNotFindGuid) {
                var g = {
                    guid: x.guid,
                    fecha: x.fecha,
                    farmacias: []
                };
                nuevoObjeto.push(g);
                index = nuevoObjeto.length - 1;
            }
            var isAddFarma = true;
            for (var i = 0; i < nuevoObjeto[index].farmacias.length; i++) {
                if (nuevoObjeto[index].farmacias[i].farmacia.id === x.farmacia.id) {
                    x.modulo.guid = x.guid;
                    x.modulo.procesado = x.procesado;
                    x.modulo.procesado_fecha = x.procesado_fecha;
                    x.modulo.procesado_cantidad = x.procesado_cantidad;
                    x.modulo.procesado_descripcion = x.procesado_descripcion;
                    nuevoObjeto[index].farmacias[i].modulos.push(x.modulo);
                    isAddFarma = false;
                }
            }
            if (isAddFarma) {
                var l_modulos_aux = [];
                x.modulo.guid = x.guid;
                x.modulo.procesado = x.procesado;
                x.modulo.procesado_fecha = x.procesado_fecha;
                x.modulo.procesado_cantidad = x.procesado_cantidad;
                x.modulo.procesado_descripcion = x.procesado_descripcion;
                l_modulos_aux.push(x.modulo);
                var p = {
                    farmacia: getFarmaciaActualizada(x.farmacia),
                    modulos: l_modulos_aux
                };
                nuevoObjeto[index].farmacias.push(p);
            }
        })
        l_farmaciaModulos_array = nuevoObjeto;
        setFarmaciaModulosArray(l_farmaciaModulos_array)
    }, []);

    function refreshMontoAhorroGeneral_pedidos() {

    }
    function onClickUpdateInfoPedidos(e) {
        e.preventDefault();
        //apiInfoPedidos();
    }

    if (!isLoggedIn()) {
        return <Redirect to="/sign-in" />;
    }
    return (
        <div className="app container-fluid">
            <div className="alert alert-primary text-center  text-uppercase" ><h2>Historial Pedidos</h2></div>
            {farmaciaModulosArray.map((pedidoFarmaciaModulos, i) => {
                return (
                    <>
                        <div className="card">
                            <div className="card-header">
                                <h3 className="panel-title">{pedidoFarmaciaModulos.fecha != null && "Fecha del pedido: " + getFormattedDateTime(new Date(pedidoFarmaciaModulos.fecha)) + " " /*getFormattedDate(new Date())*/} </h3>
                            </div>
                            <div className="card-body">
                                {pedidoFarmaciaModulos.farmacias.map((farmaciaModulos, y) => {
                                    const getRef = (element) => (itemsEls.current.push(element));
                                    return (
                                        <>
                                            <Accordion farmaciaModulos={farmaciaModulos} ></Accordion>
                                            {/*<br></br>
                                            <div className="card">
                                                <div className="card-header pedidoFarmacia-header">
                                                    <h5 className="card-title">{String(farmaciaModulos.farmacia.id) + " - " + farmaciaModulos.farmacia.nombre}</h5>
                                                </div>
                                                <div className="card-body card-body-box-sizing">
                                                    <ResultadoV2 modulos={farmaciaModulos.modulos} farmacia={farmaciaModulos.farmacia} refreshMontoAhorroGeneral={refreshMontoAhorroGeneral_pedidos}  ></ResultadoV2>
                                                </div>
                                            </div>
                                            <br></br>*/}
                                        </>
                                    );
                                })}
                            </div>
                        </div>
                    </>
                )
            })}
        </div>

    );
}

export default PedidosHistorial;
