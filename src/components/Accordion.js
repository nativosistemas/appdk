import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from "react-router-dom";
import ResultadoV2 from './ResultadoV2'
import { isLoggedIn, getFormattedDateTime, getCantidad_ModuloFarmacia, getModulo_actualizado, getFarmaciaCurrent, getFarmaciaActualizada } from './utils';

function Accordion(props) {
    const [activeCollapse, setActiveCollapse] = useState(false);
    useEffect(() => {

    }, []);
    function onClickCollapseAccordion(e) {
        e.preventDefault();
        setActiveCollapse(!activeCollapse);
    }

    return (
        <>
            <div className="accordion" >
                <div className="accordion-item">
                    <h2 className="accordion-header" >
                        <button className={"accordion-button " + (activeCollapse?"":"collapsed")} type="button"  onClick={onClickCollapseAccordion} >
                        <h5 >  {String(props.farmaciaModulos.farmacia.id) + " - " + props.farmaciaModulos.farmacia.nombre}</h5>  
                        </button>
                    </h2>
                    <div id="collapseOne" class={"accordion-collapse collapse " + (activeCollapse?"show":"")} >
                        <div className="accordion-body">
                            <ResultadoV2 modulos={props.farmaciaModulos.modulos} farmacia={props.farmaciaModulos.farmacia}   ></ResultadoV2>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Accordion;
