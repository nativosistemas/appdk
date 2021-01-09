import React, { useState, useRef } from 'react';
import Resultado from './Resultado'
import { currencyFormat } from './utils';

function ResultadoFarmacia(props) {
    var refResultado = React.createRef();
    const [montoTotalGeneral_Farmacia, setMontoTotalGeneral_Farmacia] = useState(0);
    const [totalAhorroGeneral_Farmacia, setTotalAhorroGeneral_Farmacia] = useState(0);

    function refreshMontoAhorroGeneral_pedidos() {
        setMontoTotalGeneral_Farmacia(refResultado.current.state.montoTotalGeneral);
        setTotalAhorroGeneral_Farmacia(refResultado.current.state.totalAhorroGeneral);
    }
    return (
        <>
            <br></br>
            <div className="card">
                <div className="card-header pedidoFarmacia-header">
                    <h5 className="card-title">{String(props.farmaciaModulos.farmacia.id) + " - " + props.farmaciaModulos.farmacia.nombre}</h5>
                </div>
                <div className="card-body card-body-box-sizing">
                    <Resultado ref={refResultado} modulos={props.farmaciaModulos.modulos} farmacia={props.farmaciaModulos.farmacia} refreshMontoAhorroGeneral={refreshMontoAhorroGeneral_pedidos}  ></Resultado>
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
                    <div className="float-right">
                        <button className="btn btn-success">Enviar Pedido</button>
                    </div>
                </div>
            </div>
            <br></br>
        </>

    );
}

export default ResultadoFarmacia;
