import React, { useRef } from "react";

function Nav(props) {
    let textInput = useRef(null);
    function filtradoModulo(e) {
        e.preventDefault();
        const texto = textInput.current.value;
        props.filtrarModulosApp(texto);
    }
    return (
        <>
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
           {/*props.farmacia !== '' &&
                <div className="jumbotron">
                    <span className="navbar-text">
                        <b>Dirección: </b> {props.farmacia.direccion}  </span>
                </div>
    */}
        </>
    );
}
export default Nav;