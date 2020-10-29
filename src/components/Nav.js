import React, { Component, useRef  } from "react";
import logo from '../logo.svg';

function Nav(props) {
    let textInput = useRef(null);
    function filtradoModulo(e) {
        e.preventDefault();
        const texto = textInput.current.value;
        props.filtrarModulosApp (texto);
      }
    /*obtenerDatos = (e) => {
        e.preventDefault();
        const termino = textInput.current;
        this.props.datosBusqueda (termino);
        //console.log(this.busquedaRef.current.value);
    }*/
    return (
        <>

            <nav className="navbar navbar-light bg-light">
                <form onSubmit={filtradoModulo}>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Farmacia</label>
                        <div className="col-sm-10">
                            <select className="form-control " onChange={props.handleChange}>
                                <option disabled selected value="0"> -- seleccione una opción -- </option>
                                {props.farmacias.map(farmacia => <option key={farmacia.id} value={farmacia.id}>{farmacia.nombre}</option>)}
                            </select>
                        </div>
            
                    </div>

                    <div className="form-inline">
                            <input ref={textInput} className="form-control mr-sm-2 inputUppercase" type="search" placeholder="Filtro" aria-label="Filtro"></input>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Busqueda</button>
                        </div>
                </form>

            </nav>

            <div className="jumbotron">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"></img>
                <span className="navbar-text">
                    NativoSistemas  </span>
            </div>



        </>
    );
}

export default Nav;