import React, { useRef, useState, useEffect } from "react";
import { currencyFormat, setFarmaciaCurrent, getFarmaciaCurrent, getMontoAhorroMontoTotalGeneral_farmacia } from './utils';

function NavPrincipal(props) {
    //let textInput = useRef(null);
    let textInputFarmacia = useRef(null);
    let inputMontoTotalGeneral = useRef(null);
    const [listFarmacias, setListFarmacias] = useState([]);
    const [montoTotalGeneral, setMontoTotalGeneral] = useState(0);
    const [totalAhorroGeneral, setTotalAhorroGeneral] = useState(0);

    useEffect(() => {
        cargarDatosInicio_DesdeLocalStorage();
        RefrescarMontos();
    }, []);
    function RefrescarMontos() {
        let farma = getFarmaciaCurrent();
        if (farma !== null && farma !== undefined && farma !== '') {
            textInputFarmacia.current.value = String(farma.id) + " - " + farma.nombre;
        }
        var oMontos = getMontoAhorroMontoTotalGeneral_farmacia();
        setMontoTotalGeneral(oMontos.montoTotal);
        setTotalAhorroGeneral(oMontos.ahorroTotal);
        
    }
    function cargarDatosInicio_DesdeLocalStorage() {
        var l_farmacias = localStorage.getItem('l_farmacias') || '';
        if (l_farmacias !== null && l_farmacias !== undefined && l_farmacias !== '') {
            l_farmacias = JSON.parse(l_farmacias);
        }
        if (!Array.isArray(l_farmacias)) {
            l_farmacias = [];
        }
        setListFarmacias(l_farmacias);
    }
    function onClickFarmacias(e) {
        e.preventDefault();
        e.target.value = '';
        handleChange(e);
        
        
    }
    function handleChange(e) {
        e.preventDefault();
        let valueInput = e.target.value;
        if (valueInput !== null && valueInput !== undefined && valueInput !== '') {
            let farma = listFarmacias.find(element => String(element.id) + " - " + element.nombre === String(valueInput));
            if (farma !== null && farma !== undefined && farma !== '') {
                setFarmaciaCurrent(farma);
                RefrescarMontos(); 
                inputMontoTotalGeneral.current.focus();
                return;
            }
        }
        setFarmaciaCurrent(null);

        RefrescarMontos(); 
        
        /*this.setState({ farmaciaSeleccionada: farma }, () => {
          this.elementResultadoModulo.current.actualizarCantidadEnLosModulos();
        });*/
    }
    return (
        <>
            <nav className="navbar navbar-light bg-gradient-info">
                <div className="row rowNavbar">    <div className="col-lg-6 col-md-12">
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Farmacia</label>
                        <div className="col-sm-10">
                            <input ref={textInputFarmacia} type="text" list="listaFarmacias" className="form-control" onClick={onClickFarmacias} onChange={handleChange}></input>
                            <datalist id="listaFarmacias">
                                <select className="form-control "   >
                                    {listFarmacias.map(farmacia => <option key={farmacia.id} >{String(farmacia.id) + " - " + farmacia.nombre}</option>)}
                                </select>
                            </datalist>
                        </div>
                    </div>
                </div>
                    <div className="col-lg-6  col-md-12">
                        <div className="input-group ">
                            <div className="input-group-prepend">
                                <span className="input-group-text font-weight-bold" >MONTO TOTAL GENERAL</span>

                            </div>
                            <input type="text"  ref={inputMontoTotalGeneral} className="form-control" aria-describedby="basic-addon1" readOnly value={currencyFormat(montoTotalGeneral)}></input>
                        </div>
                        <div className="input-group ">
                            <div className="input-group-prepend">
                                <span className="input-group-text font-weight-bold" >TOTAL GENERAL AHORRO</span>
                            </div>
                            <input type="text" className="form-control" aria-describedby="basic-addon1" readOnly value={currencyFormat(totalAhorroGeneral)}></input>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default NavPrincipal;