import React, { useRef, useState, useEffect } from "react";
import { currencyFormat, getFarmaciaCurrent } from './utils';

function PedidosHistorialBusqueda(props) {
    let textInput = useRef(null);
    let textInputFarmacia = useRef(null);
    let textInputFecha = useRef(null);
    const [lista_farmacias, setLista_farmacias] = useState([]);

    useEffect(() => {
        var l_farmacias = localStorage.getItem('l_farmacias') || '';
        if (l_farmacias !== null && l_farmacias !== undefined && l_farmacias !== '') {
            l_farmacias = JSON.parse(l_farmacias);
        }
        if (!Array.isArray(l_farmacias)) {
            l_farmacias = [];
        }
        setLista_farmacias(l_farmacias);
    }, []);

    function filtradoModulo(e) {
        e.preventDefault();
   
    }
    function onClickBusqueda(e) {
        e.preventDefault();
        const farmacia = textInputFarmacia.current.value;
        const fecha = textInputFecha.current.value;
        props.filtrarFarmaciaFecha(farmacia,fecha);
    }
    function onClickFarmacias(e) {
        e.preventDefault();
        e.target.value = '';
        //handleChange(e);


    }
    return (
        <>
            <nav className="navbar navbar-light bg-gradient-info">
                <div className="row rowNavbar">

                    <div className="col-lg-5 col-md-12">
                        <form onSubmit={filtradoModulo}>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Farmacia</label>
                                <div className="col-sm-10">
                                    <input ref={textInputFarmacia} type="text" list="listaFarmacias" className="form-control"  onClick={onClickFarmacias} ></input>
                                    <datalist id="listaFarmacias">
                                        <select className="form-control "   >
                                            {lista_farmacias.map(farmacia => <option key={farmacia.id} >{String(farmacia.id) + " - " + farmacia.nombre}</option>)}
                                        </select>
                                    </datalist>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="input-group row">
                            <label className="col-sm-2 col-form-label">Desde</label>
                            <div className="col-sm-10">
                                <input ref={textInputFecha} type="Date" className="form-control inputUppercase mr-sm-2 " placeholder="Fecha" aria-label="Filtro"></input>
                         
                            </div>
                        </div>
                    </div>
                    <div className="input-group-btn col-lg-2 col-md-12">
                                    <button className="btn btn-outline-success" type="submit" onClick={onClickBusqueda}>Busqueda</button>
                                </div>
                </div>


            </nav>

        </>
    );
}
export default PedidosHistorialBusqueda;