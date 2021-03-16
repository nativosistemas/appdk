import React, { useState, useRef, useEffect } from 'react';
import Modulo from "./Modulo";
import { getFarmaciaCurrent } from './utils';

function ResultadoV2(props) {
    const [totalAhorroGeneral, setTotalAhorroGeneral] = useState(0);
    const [montoTotalGeneral, setMontoTotalGeneral] = useState(0);

    const miMapaRefs = new Map();
    useEffect(() => {

        //this.miMapaRefs = new Map();
        props.modulos.forEach(element => {
            miMapaRefs.set(element.id, React.createRef());
        });

    }, []);
    function getCantidad(pModulo) {
        var cantidad = 0;
        const farmacia = props.farmacia;
        if (farmacia === '')
            return cantidad;
        return cantidad;//cantidad={cantidad} setCantidad={setCantidad} refreshMontoAhorroGeneral={refreshMontoAhorroGeneral} 
    }
    function setCantidad(pModulo, pCantidad) {

    }
   /* function getMontoTotalGeneral() {
        var MontoTotalGeneral = 0;
        miMapaRefs.forEach(element => {
            if (element.current != null) {
                MontoTotalGeneral += element.current.state.montoTotal;
            }
        });
        return MontoTotalGeneral;
    }
    function getTotalAhorroGeneral() {
        var TotalAhorroGeneral = 0;
        miMapaRefs.forEach(element => {
            if (element.current != null) {
                TotalAhorroGeneral += element.current.state.ahorroTotal;
            }
        });
        return TotalAhorroGeneral;
    }*/
    function refreshMontoAhorroGeneral() {
      //  setTotalAhorroGeneral(getTotalAhorroGeneral());
        // setMontoTotalGeneral(getMontoTotalGeneral());
        //props.refreshMontoAhorroGeneral();
        //this.setState({ totalAhorroGeneral: this.getTotalAhorroGeneral() }, () => { this.setState({ montoTotalGeneral: this.getMontoTotalGeneral() }, () => { this.props.refreshMontoAhorroGeneral() }) })
    }
    return (
        <>
            <React.Fragment>
                {props.modulos.map((modulo, i) => {
                    return (<>
                        <Modulo key={modulo.id} ref={miMapaRefs.get(modulo.id)} isPar={parseInt(i) % 2} farmacia={props.farmacia}
                            modulo={modulo} getCantidad={getCantidad} setCantidad={setCantidad} refreshMontoAhorroGeneral={refreshMontoAhorroGeneral} ></Modulo>
                    </>);
                })}
            </React.Fragment>
        </>
    );
}

export default ResultadoV2;
