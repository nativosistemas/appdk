import React, { useState, useRef, useEffect } from 'react';
import ResultadoV2 from './ResultadoV2'
import { currencyFormat, getCantidad_ModuloFarmacia, getMontoAhorroMontoTotal_Modulo } from './utils';

function ResultadoCarritoV2(props) {
    var refResultado = React.createRef();
    const [montoTotalGeneral_Farmacia, setMontoTotalGeneral_Farmacia] = useState(0);
    const [totalAhorroGeneral_Farmacia, setTotalAhorroGeneral_Farmacia] = useState(0);
    useEffect(() => {
        var montoTotalGeneral = 0;
        var totalAhorroGeneral = 0;
        props.farmaciaModulos.modulos.forEach(element => {
            var result = getMontoAhorroMontoTotal_Modulo(element, props.farmaciaModulos.farmacia, element.cantidadGrabado);
            montoTotalGeneral += result.montoTotal;
            totalAhorroGeneral += result.ahorroTotal;
        });
        setMontoTotalGeneral_Farmacia(montoTotalGeneral);
        setTotalAhorroGeneral_Farmacia(totalAhorroGeneral);
    }, []);
    function refreshMontoAhorroGeneral_pedidos() {
        //setMontoTotalGeneral_Farmacia(refResultado.current.state.montoTotalGeneral);
        //setTotalAhorroGeneral_Farmacia(refResultado.current.state.totalAhorroGeneral);
    }
    return (
        <>
            <br></br>
            <div className="card">
                <div className="card-header pedidoFarmacia-header">
                    <h5 className="card-title">{String(props.farmaciaModulos.farmacia.id) + " - " + props.farmaciaModulos.farmacia.nombre}</h5>
                </div>
                <div className="card-body card-body-box-sizing">
                    <ResultadoV2 ref={refResultado} modulos={props.farmaciaModulos.modulos} farmacia={props.farmaciaModulos.farmacia} refreshMontoAhorroGeneral={refreshMontoAhorroGeneral_pedidos} isPedido={props.isPedido}  ></ResultadoV2>
                </div>
                <div className="card-footer text-muted pedidoFarmacia-footer">
                    <div className="float-left">                <div className="input-group ">
                        <div className="input-group-prepend">
                            <span className="input-group-text font-weight-bold" >MONTO TOTAL GENERAL</span>

                        </div>
                        <input type="text" className="form-control" aria-describedby="basic-addon1" readOnly value={currencyFormat(montoTotalGeneral_Farmacia)}></input>
                    </div>
                        <div className="input-group ">
                            <div className="input-group-prepend">
                                <span className="input-group-text font-weight-bold" >TOTAL GENERAL AHORRO</span>
                            </div>
                            <input type="text" className="form-control" aria-describedby="basic-addon1" readOnly value={currencyFormat(totalAhorroGeneral_Farmacia)}></input>
                        </div></div>
                </div>
            </div>
            <br></br>
        </>

    );
}

export default ResultadoCarritoV2;
