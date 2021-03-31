import React, { useState, useRef, useEffect } from 'react';
import Modulo from "./Modulo";
import { getFarmaciaCurrent } from './utils';

function ResultadoV3(props) {
    const [totalAhorroGeneral, setTotalAhorroGeneral] = useState(0);
    const [montoTotalGeneral, setMontoTotalGeneral] = useState(0);

    const miMapaRefs = new Map();
    useEffect(() => {
        props.modulos.forEach(element => {
            miMapaRefs.set(element.id, React.createRef());
        });

    }, []);
    function getCantidad(pModulo) {
        var cantidad = 0;
        const farmacia = props.farmacia;
        if (farmacia === '')
            return cantidad;
        return cantidad;
    }
    function setCantidad(pModulo, pCantidad) {

    }
    function refreshMontoAhorroGeneral() {
     }
    return (
        <>
            <React.Fragment>
                {props.modulos.map((modulo, i) => {
                    return (<>
                        <Modulo key={modulo.id} ref={miMapaRefs.get(modulo.id)} isPar={parseInt(i) % 2} farmacia={props.farmacia}
                            modulo={modulo} getCantidad={getCantidad} setCantidad={setCantidad} refreshMontoAhorroGeneral={refreshMontoAhorroGeneral} isPedido={props.isPedido} ></Modulo>
                    </>);
                })}
            </React.Fragment>
        </>
    );
}

export default ResultadoV3;
