import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from "react-router-dom";
//import ResultadoCarritoV2 from './ResultadoCarritoV2'
import ResultadoV2 from './ResultadoV2'
import { isLoggedIn, getFormattedDateTime, getCantidad_ModuloFarmacia, getModulo_actualizado, getFarmaciaCurrent,getFarmaciaActualizada } from './utils';

function PedidosHistorial() {
    const [farmaciaModulosArray, setFarmaciaModulosArray] = useState([]);
    const pedidosFarmaciasRefs = new Map();

    useEffect(() => {
        var l_farmaciaModulos_array = [];

        var l_pedidosHistorial = window.localStorage.getItem('l_pedidosHistorial') || '';
        if (l_pedidosHistorial !== null && l_pedidosHistorial !== undefined && l_pedidosHistorial !== '') {
            l_pedidosHistorial = JSON.parse(l_pedidosHistorial);
        }
        if (!Array.isArray(l_pedidosHistorial)) {
            l_pedidosHistorial = [];
        }


        /* var l_guid = [];
         var l_farma = [];
         var l_mod = [];*/

        let nuevoObjeto = [];
        //Recorremos el arreglo 
        l_pedidosHistorial.forEach(x => {
            //Si la ciudad no existe en nuevoObjeto entonces
            //la creamos e inicializamos el arreglo de profesionales. 


            /*if (!nuevoObjeto.hasOwnProperty(x.guid)) {
                nuevoObjeto[x.guid] = {
                    guid: x.guid,
                    farmacias: []
                }
            }*/
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
            //Agregamos los datos de profesionales. 
            /*nuevoObjeto[x.guid].farmacias.push({
                nombre: x.Nombre,
                descripcion: x.Descripcion
            })*/

        })

        l_farmaciaModulos_array = nuevoObjeto;//l_pedidosHistorial;

        /* l_farmaciaModulos_array.forEach(element => {
             pedidosFarmaciasRefs.set(element.gud, React.createRef());
         });*/
        //}
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
            {/* <div className="float-right">
                <button className="btn btn-success" onClick={(e) => onClickUpdateInfoPedidos(e)}><svg height="28" viewBox="0 0 512 512" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m61.496094 279.609375c-.988282-8.234375-1.496094-16.414063-1.496094-23.609375 0-107.402344 88.597656-196 196-196 50.097656 0 97 20.199219 131.5 51.699219l-17.300781 17.601562c-3.898438 3.898438-5.398438 9.597657-3.898438 15 1.800781 5.097657 6 9 11.398438 10.199219 3.019531.605469 102.214843 32.570312 95.898437 31.300781 8.035156 2.675781 19.917969-5.894531 17.703125-17.699219-.609375-3.023437-22.570312-113.214843-21.300781-106.902343-1.199219-5.398438-5.101562-9.898438-10.5-11.398438-5.097656-1.5-10.800781 0-14.699219 3.898438l-14.699219 14.398437c-45.300781-42.296875-107.503906-68.097656-174.101562-68.097656-140.699219 0-256 115.300781-256 256v.597656c0 8.457032.386719 14.992188.835938 19.992188.597656 6.625 5.480468 12.050781 12.003906 13.359375l30.816406 6.160156c10.03125 2.007813 19.050781-6.402344 17.839844-16.5zm0 0"/><path d="m499.25 222.027344-30.90625-6.296875c-10.042969-2.046875-19.125 6.371093-17.890625 16.515625 1.070313 8.753906 1.546875 17.265625 1.546875 23.753906 0 107.398438-88.597656 196-196 196-50.097656 0-97-20.199219-131.5-52l17.300781-17.300781c3.898438-3.898438 5.398438-9.597657 3.898438-15-1.800781-5.101563-6-9-11.398438-10.199219-3.019531-.609375-102.214843-32.570312-95.898437-31.300781-5.101563-.898438-10.203125.601562-13.5 4.199219-3.601563 3.300781-5.101563 8.699218-4.203125 13.5.609375 3.019531 22.574219 112.210937 21.304687 105.898437 1.195313 5.402344 5.097656 9.902344 10.496094 11.398437 6.261719 1.570313 11.488281-.328124 14.699219-3.898437l14.402343-14.398437c45.296876 42.300781 107.5 69.101562 174.398438 69.101562 140.699219 0 256-115.300781 256-256v-.902344c0-6.648437-.242188-13.175781-.796875-19.664062-.570313-6.628906-5.433594-12.074219-11.953125-13.40625zm0 0"/></svg></button>
            </div>
    <br></br>*/}
            {farmaciaModulosArray.map((pedidoFarmaciaModulos, i) => {
                return (
                    <>
                        <div className="card">
                            <div className="card-header">
                                <h3 className="panel-title">{pedidoFarmaciaModulos.fecha != null && "Fecha del pedido: " + getFormattedDateTime(new Date(pedidoFarmaciaModulos.fecha)) + " " /*getFormattedDate(new Date())*/}

                                    {/* Pedido: {pedidoFarmaciaModulos.guid }*/}  </h3>
                            </div>
                            <div className="card-body">
                                {pedidoFarmaciaModulos.farmacias.map((farmaciaModulos, y) => {
                                    // var l_m = [];
                                    //l_m.push(farmaciaModulos.modulo);
                                    return (
                                        <>
                                            <br></br>
                                            <div className="card">
                                                <div className="card-header pedidoFarmacia-header">
                                                    <h5 className="card-title">{String(farmaciaModulos.farmacia.id) + " - " + farmaciaModulos.farmacia.nombre}</h5>
                                                </div>
                                                <div className="card-body card-body-box-sizing">
                                                    <ResultadoV2 modulos={farmaciaModulos.modulos} farmacia={farmaciaModulos.farmacia} refreshMontoAhorroGeneral={refreshMontoAhorroGeneral_pedidos}  ></ResultadoV2>
                                                </div>
                                                {/*  <div className="card-footer text-muted pedidoFarmacia-footer">
                      
                                        </div>*/}
                                            </div>
                                            <br></br>
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
