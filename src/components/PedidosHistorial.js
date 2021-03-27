import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from "react-router-dom";
//import ResultadoCarritoV2 from './ResultadoCarritoV2'
import ResultadoV2 from './ResultadoV2'
import { isLoggedIn, getCantidad_ModuloFarmacia, getModulo_actualizado, getFarmaciaCurrent } from './utils';

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

        l_farmaciaModulos_array = l_pedidosHistorial;

        /* l_farmaciaModulos_array.forEach(element => {
             pedidosFarmaciasRefs.set(element.gud, React.createRef());
         });*/
        //}
        setFarmaciaModulosArray(l_farmaciaModulos_array)

    }, []);

    function refreshMontoAhorroGeneral_pedidos() {

    }
    if (!isLoggedIn()) {
        return <Redirect to="/sign-in" />;
    }
    return (
        <div className="app container-fluid">
            <div className="alert alert-primary text-center  text-uppercase" ><h2>Historial Pedidos</h2></div>
            {/* <div className="float-right">
                <button className="btn btn-success" onClick={(e) => onClickEnviarTodosPedidos(e)}>Enviar Todos los Pedidos</button>
            </div>
            <br></br>*/}
            {farmaciaModulosArray.map((farmaciaModulos, i) => {
                var l_m = [];
                l_m.push(farmaciaModulos.modulo);
                return (
                    <>
                        <br></br>
                        <div className="card">
                            <div className="card-header pedidoFarmacia-header">
                                <h5 className="card-title">{String(farmaciaModulos.farmacia.id) + " - " + farmaciaModulos.farmacia.nombre}</h5>
                            </div>
                            <div className="card-body card-body-box-sizing">
                                <ResultadoV2 modulos={l_m} farmacia={farmaciaModulos.farmacia} refreshMontoAhorroGeneral={refreshMontoAhorroGeneral_pedidos}  ></ResultadoV2>
                            </div>
                            <div className="card-footer text-muted pedidoFarmacia-footer">
                                <div className="input-group input-group-lg">
                                    <span className="input-group-text" id="inputGroup-sizing-lg">Procesado</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value={farmaciaModulos.procesado == null?'No':'Si'} readOnly></input>
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

export default PedidosHistorial;
