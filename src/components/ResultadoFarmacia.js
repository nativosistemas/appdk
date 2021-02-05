import React, { useState, useRef } from 'react';
import Resultado from './Resultado'
import { currencyFormat, getCantidad_ModuloFarmacia } from './utils';

function ResultadoFarmacia(props) {
    var refResultado = React.createRef();
    const [montoTotalGeneral_Farmacia, setMontoTotalGeneral_Farmacia] = useState(0);
    const [totalAhorroGeneral_Farmacia, setTotalAhorroGeneral_Farmacia] = useState(0);

    function refreshMontoAhorroGeneral_pedidos() {
        setMontoTotalGeneral_Farmacia(refResultado.current.state.montoTotalGeneral);
        setTotalAhorroGeneral_Farmacia(refResultado.current.state.totalAhorroGeneral);
    }
    function onClickEnviarPedidos(e) {
        e.preventDefault();

        var url = 'https://api.kellerhoff.com.ar/api/';
        var data = {};
        data.promotor = 'Perez, Nestor';
        data.pedidoModulos = [];
        props.farmaciaModulos.modulos.map((modulo, i) => {
            var cant = getCantidad_ModuloFarmacia(modulo, props.farmaciaModulos.farmacia);
            var p = {
                idModulo: modulo.id,
                idFarmacia: props.farmaciaModulos.farmacia.id,
                cantidad: cant
            };
            data.pedidoModulos.push(p);
        })

        var json = JSON.stringify(data);
        fetch(url + 'Pedido', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: json
        })
            .then(results => results.json())
            .then(data => {
                if (!data || data === '00000000-0000-0000-0000-000000000000') {
                    alert('Guid ' + data);
                } else {
                    localStorage.setItem('l_pedidos', JSON.stringify([]));
                    window.location.reload(false);
                }

            });
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
                        <button className="btn btn-success" onClick={(e) => onClickEnviarPedidos(e)}>Enviar Pedido</button>
                    </div>
                </div>
            </div>
            <br></br>
        </>

    );
}

export default ResultadoFarmacia;
