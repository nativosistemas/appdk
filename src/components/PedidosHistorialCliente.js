import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from "react-router-dom";
import PedidosHistorialClienteComponente from './PedidosHistorialClienteComponente'
import { isLoggedIn, getFormattedDateTime, getPedidosHistorialCliente } from './utils';

function PedidosHistorialCliente() {
    const [historialClienteArray, setHistorialClienteArray] = useState([]);

    useEffect(() => {
        setHistorialClienteArray(getPedidosHistorialCliente());
    }, []);


   /* function onClickUpdateInfoPedidos(e) {
        e.preventDefault();
    }*/

    if (!isLoggedIn()) {
        return <Redirect to="/sign-in" />;
    }
    return (
        <div className="app container-fluid">
            <div className="alert alert-primary text-center  text-uppercase" ><h2>Historial Pedidos Clientes</h2></div>
            <PedidosHistorialClienteComponente></PedidosHistorialClienteComponente>
        </div>

    );
}

export default PedidosHistorialCliente;
