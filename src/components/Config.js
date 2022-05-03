import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from "react-router-dom";
import { isLoggedIn, clear_localStorage, loggedOut } from './utils';

function Config() {
    let pass = React.createRef()

    useEffect(() => {


    }, []);
    function onClickLimpiar(e) {
        e.preventDefault();
        if (pass.current.value === '1554') {
            clear_localStorage();
            window.location.reload(false);
        }
    }
    function onClickSalir(e) {
        loggedOut();
    }
    if (!isLoggedIn()) {
        return <Redirect to="/sign-in" />;
    }
    return (
        <>
            <div className="app container-fluid">
                <div className="alert alert-primary text-center  text-uppercase" ><h2>Configuración</h2></div>
                <div class="bg-light p-5 mb-5 shadow-lg">
                    <h1 className="display-4">Borrar datos</h1>
                    <p className="lead">Al borrarlas, se restaura a la versión original de la app.</p>
                    <hr className="my-4"></hr>
                    <p className="lead">
                        <div className="mb-3">
                            <a className="btn btn-primary btn-lg" href="#" role="button" onClick={(e) => onClickLimpiar(e)}><svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></a>
                        </div>
                        <div className="mb-3">
                            <input ref={pass} className="form-control form-control-lg" type="password" placeholder="token" aria-label=".form-control-lg example"></input>
                        </div>
                    </p>
                </div>

                <div class="bg-light p-5  mb-5 shadow-lg">
                    <h1 className="display-4">Cerrar sesión</h1>
                    <hr className="my-4"></hr>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button" onClick={(e) => onClickSalir(e)}><svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-power"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg></a>
                    </p>
                </div>
            </div>

            <footer className="footer">
                <div className="container">
                    <span className="text-muted">Versión 1.0.3</span>
                </div>
            </footer>
        </>
    );
}

export default Config;
