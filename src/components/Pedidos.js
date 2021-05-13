import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from "react-router-dom";
import ResultadoCarritoV2 from './ResultadoCarritoV2'
import { isLoggedIn, getPedidosEnviar, apiSincronizadorAppPostAsync } from './utils';

function Pedidos() {
    const [farmaciaModulosArray, setFarmaciaModulosArray] = useState([]);
    const pedidosFarmaciasRefs = new Map();

    useEffect(() => {
        var l_farmaciaModulos_array = getPedidosEnviar();
        l_farmaciaModulos_array.forEach(element => {
            pedidosFarmaciasRefs.set(element.farmacia.id, React.createRef());
        });
        setFarmaciaModulosArray(l_farmaciaModulos_array);
    }, []);

    function onClickEnviarTodosPedidos(e) {
        e.preventDefault();
        apiSincronizadorAppPostAsync().then(() => {
            window.location.reload(false);
        });
    }
    if (!isLoggedIn()) {
        return <Redirect to="/sign-in" />;
    }
    return (
        <div className="app container-fluid">
            <div className="alert alert-primary text-center  text-uppercase" ><h2>Pedidos</h2></div>
            <div className="float-end">
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
