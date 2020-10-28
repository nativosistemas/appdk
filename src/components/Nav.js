import React, { Component } from "react";
import logo from '../logo.svg';

function Nav(props) {
    return (
        <>

            <nav className="navbar navbar-light bg-light">
                <form className=" ">

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
                            <input className="form-control mr-sm-2" type="search" placeholder="Filtro" aria-label="Filtro"></input>
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