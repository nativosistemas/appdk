import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from "react-router-dom";
import ResultadoV2 from './ResultadoV2'
import Accordion from './Accordion'
import PedidosHistorialBusqueda from './PedidosHistorialBusqueda'
import { isLoggedIn,getFormattedDateTime, getPedidosHistorial,ActualizarPedidosHistorial_borrarViejosRegistros} from './utils';

function PedidosHistorial() {
    const [farmaciaModulosArray, setFarmaciaModulosArray] = useState([]);
    const pedidosFarmaciasRefs = new Map();
    const itemsEls = useRef(new Array());

    useEffect(() => {
        ActualizarPedidosHistorial_borrarViejosRegistros();
        setFarmaciaModulosArray(getPedidosHistorial('',''));
    }, []);

    function refreshMontoAhorroGeneral_pedidos() {

    }
    function onClickUpdateInfoPedidos(e) {
        e.preventDefault();
        //apiInfoPedidos();
    }
    function filtrarFarmaciaFecha(pFarmacia, pFecha) {
        //var tt = 0;
        setFarmaciaModulosArray(getPedidosHistorial(pFarmacia, pFecha));
    }
    if (!isLoggedIn()) {
        return <Redirect to="/sign-in" />;
    }
    return (
        <div className="app container-fluid">
            <div className="alert alert-primary text-center  text-uppercase" ><h2>Historial Pedidos</h2></div>
            <PedidosHistorialBusqueda filtrarFarmaciaFecha={filtrarFarmaciaFecha}></PedidosHistorialBusqueda>

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
