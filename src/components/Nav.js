import React, { useRef, useState } from "react";
import { currencyFormat } from './utils';

function Nav(props) {
    let textInput = useRef(null);
    //const [montoTotalGeneral, setMontoTotalGeneral] = useState(0);
    //const [totalAhorroGeneral, setTotalAhorroGeneral] = useState(0);

    function filtradoModulo(e) {
        e.preventDefault();
        const texto = textInput.current.value;
        props.filtrarModulosApp(texto);
    }


    /*
              <nav className="navbar navbar-light bg-gradient-info">
                <form onSubmit={filtradoModulo}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Farmacia</label>
                        <div className="col-sm-10">
                            <select className="form-control " onChange={props.handleChange}>
                                <option disabled selected value="0"> -- seleccione una opción -- </option>
                                {props.farmacias.map(farmacia => <option key={farmacia.id} value={farmacia.id}>{String(farmacia.id) + " - " + farmacia.nombre}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="form-inline">
                        <input ref={textInput} className="form-control mr-sm-2 inputUppercase" type="search" placeholder="Filtro" aria-label="Filtro"></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Busqueda</button>
                    </div>
                </form>
            </nav>
    */
    /*
                            <div className="form-group row">
                             <label className="col-sm-2 col-form-label">Farmacia</label>
                             <div className="col-sm-10">
                                 <input type="text" list="listaFarmacias" className="form-control "></input>
                                 <datalist id="listaFarmacias">
                                     <select className="form-control " onChange={props.handleChange} >
                                         {props.farmacias.map(farmacia => <option key={farmacia.id} >{String(farmacia.id) + " - " + farmacia.nombre}</option>)}
                                     </select>
                                 </datalist>
                             </div>
                         </div>
    */
    return (
        <>
            <nav className="navbar navbar-light bg-gradient-info">
                <div className="row">    <div className="col">
                    <form onSubmit={filtradoModulo}>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Farmacia</label>
                            <div className="col-sm-10">
                                <select className="form-control " onChange={props.handleChange}>
                                    <option disabled selected value="0"> -- seleccione una opción -- </option>
                                    {props.farmacias.map(farmacia => <option key={farmacia.id} value={farmacia.id}>{String(farmacia.id) + " - " + farmacia.nombre}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="form-inline">
                            <input ref={textInput} className="form-control mr-sm-2 inputUppercase" type="search" placeholder="Filtro" aria-label="Filtro"></input>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Busqueda</button>
                        </div>
                    </form>
                </div>
                    <div className="col">
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