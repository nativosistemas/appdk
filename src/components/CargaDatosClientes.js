import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from "react-router-dom";
import { isLoggedIn, apiCargaDatosClientePostAsync,getDatosCliente_util } from './utils';
import CargaDatosClientesDetalle from './CargaDatosClientesDetalle'

function CargaDatosClientes() {
   // const localUser = JSON.parse(localStorage.getItem('userData')) || {};
    //let [userData, setUserData] = useState(localUser);
    //const localUser = getDatosCliente() || {};
    const [datosCliente, setDatosCliente] = useState(getDatosCliente_util());

    function onClickEnviarDatosClientes(e) {
        e.preventDefault();
        apiCargaDatosClientePostAsync();
    }
    if (!isLoggedIn()) {
        return <Redirect to="/sign-in" />;
    }
    return (
        <div className="app container-fluid">
            <div className="alert alert-primary text-center  text-uppercase" ><h2>CARGA DE DATOS DEL CLIENTE</h2></div>
            <div className="float-end">
                <button className="btn btn-success" onClick={(e) => onClickEnviarDatosClientes(e)}>Enviar Formulario</button>
            </div>
            <br></br>
            <CargaDatosClientesDetalle datosCliente={datosCliente} setDatosCliente={setDatosCliente} ></CargaDatosClientesDetalle>
        </div>

    );
}


export default CargaDatosClientes;