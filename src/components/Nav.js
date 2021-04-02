import React, { useRef, useState,useEffect } from "react";
import { currencyFormat,getFarmaciaCurrent } from './utils';

function Nav(props) {
    let textInput = useRef(null);
    let textInputFarmacia = useRef(null);
    //const [inputFarmacia, setInputFarmacia] = useState();

    useEffect(() => {
        let farma = getFarmaciaCurrent();
        if (farma !== null && farma !== undefined && farma !== '') {
            textInputFarmacia.current.value = String(farma.id) + " - " + farma.nombre;
        }
        /*if (props.farmacia !== null && props.farmacia !== undefined && props.farmacia !== '') {
            textInputFarmacia.current.value = String(props.farmacia.id) + " - " + props.farmacia.nombre;
        }*/
    }, []);

    function filtradoModulo(e) {
        e.preventDefault();
        const texto = textInput.current.value;
        props.filtrarModulosApp(texto);
    }
    function onClickFarmacias(e) {
        e.preventDefault();
       // e.target.value = '';
       // props.handleChange(e);
    }
    /*function setTextInputFarmacia(pFarmacia) {
        let nameFarmacia = String(pFarmacia.id) + " - " + pFarmacia.nombre;
        this.textInputFarmacia.current.value = nameFarmacia;
    }*/
    return (
        <>
            <nav className="navbar navbar-light bg-gradient-info">
                <div className="row rowNavbar">    <div className="col-lg-6 col-md-12">
                    <form onSubmit={filtradoModulo}>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Farmacia</label>
                            <div className="col-sm-10">
                                <input ref={textInputFarmacia} type="text" list="listaFarmacias" className="form-control" onClick={onClickFarmacias} onChange={props.handleChange} readOnly></input>
                                <datalist id="listaFarmacias">
                                    <select className="form-control "   >
                                        {props.farmacias.map(farmacia => <option key={farmacia.id} >{String(farmacia.id) + " - " + farmacia.nombre}</option>)}
                                    </select>
                                </datalist>
                            </div>
                        </div>
                        <div className="input-group ">
                            <input ref={textInput} type="search" className="form-control inputUppercase mr-sm-2" placeholder="Filtro" aria-label="Filtro"></input>
                            <div className="input-group-btn">
                                <button className="btn btn-outline-success" type="submit">Busqueda</button>
                            </div>
                        </div>
                        {/* <div className="form-inline">
                            <input ref={textInput} className="form-control mr-sm-2 inputUppercase" type="search" placeholder="Filtro" aria-label="Filtro"></input>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Busqueda</button>
                        </div>*/}
                    </form>
                </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="input-group ">
                            <div className="input-group-prepend">
                                <span className="input-group-text font-weight-bold" >MONTO TOTAL GENERAL</span>

                            </div>
                            <input type="text" className="form-control" aria-describedby="basic-addon1" readOnly value={currencyFormat(props.getMontoTotalGeneral)}></input>
                        </div>
                        <div className="input-group ">
                            <div className="input-group-prepend">
                                <span className="input-group-text font-weight-bold" >TOTAL GENERAL AHORRO</span>
                            </div>
                            <input type="text" className="form-control" aria-describedby="basic-addon1" readOnly value={currencyFormat(props.getTotalAhorroGeneral)}></input>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
}
export default Nav;