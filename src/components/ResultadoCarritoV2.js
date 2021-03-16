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
    function onClickEnviarPedidos(e, pIdFarmacia) {
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
        /*fetch(url + 'Pedido', {
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
                    //localStorage.setItem('l_pedidos', JSON.stringify([]));
                   // arr = arr.filter(item => item !== value)
                    var l_pendiente = localStorage.getItem('l_pedidos') || '';
                    //var isAgregar = true;
                    if (l_pendiente !== '') {
                        l_pendiente = JSON.parse(l_pendiente);
                    }
                    if (Array.isArray(l_pendiente)) {
                        l_pendiente = l_pendiente.filter(item => item.farmacia.id !==  props.farmaciaModulos.farmacia.id);
                        localStorage.setItem('l_pedidos', JSON.stringify(l_pendiente));
                    } 
                    //
                    window.location.reload(false);
                }

            });*/
    }
    return (
        <>
            <br></br>
            <div className="card">
                <div className="card-header pedidoFarmacia-header">
                    <h5 className="card-title">{String(props.farmaciaModulos.farmacia.id) + " - " + props.farmaciaModulos.farmacia.nombre}</h5>
                </div>
                <div className="card-body card-body-box-sizing">
                    <ResultadoV2 ref={refResultado} modulos={props.farmaciaModulos.modulos} farmacia={props.farmaciaModulos.farmacia} refreshMontoAhorroGeneral={refreshMontoAhorroGeneral_pedidos}  ></ResultadoV2>
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
