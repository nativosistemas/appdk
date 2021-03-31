import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from "react-router-dom";
import { isLoggedIn ,clear_localStorage,loggedOut} from './utils';

function Config() {


    useEffect(() => {


    }, []);
    function onClickLimpiar(e) {
        e.preventDefault();
        clear_localStorage();
        window.location.reload(false);
    }
    function onClickSalir(e) {
        loggedOut();
      }
    if (!isLoggedIn()) {
        return <Redirect to="/sign-in" />;
    }
    return (
        <div className="app container-fluid">
            <div className="alert alert-primary text-center  text-uppercase" ><h2>Configuración</h2></div>
            <div class="jumbotron">
                <h1 className="display-4">Borrar datos</h1>
                <p className="lead">Al borrarlas, se restaura a la versión original de la app.</p>
                <hr className="my-4"></hr>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button" onClick={(e) => onClickLimpiar(e)}>Limpiar datos</a>
                </p>
            </div>
            <div class="jumbotron">
                <h1 className="display-4">Cerrar sesión</h1>
                <hr className="my-4"></hr>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button" onClick={(e) => onClickSalir(e)}><svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-power"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg></a>
                </p>
            </div>
        </div>

    );
}

export default Config;
