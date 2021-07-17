import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from "react-router-dom";
import { isLoggedIn, getFormattedDateTime, getHistorialCliente } from './utils';

function PedidosHistorialClienteComponente(props) {
    const [historialClienteArray, setHistorialClienteArray] = useState([]);
    const [activeCollapse, setActiveCollapse] = useState(false);
    useEffect(() => {
        var lista = getHistorialCliente(props.farmaciaHistorial);
        
        setHistorialClienteArray(lista.sort(condicionParaOrdenar));
    }, [props.farmaciaHistorial]);
    function condicionParaOrdenar(prodA, prodB) {
        return prodB.cantidad - prodA.cantidad;
      }
    function onClickCollapseAccordion(e) {
        e.preventDefault();
        setActiveCollapse(!activeCollapse);
    }
    return (
        historialClienteArray.length > 0 &&
        <div className="accordion" >
            <div className="accordion-item">
                <h2 className="accordion-header" >
                    <button className={"accordion-button accordion-button-historial " + (activeCollapse ? "" : "collapsed")} type="button" onClick={onClickCollapseAccordion} >
                        <svg xmlns="http://www.w3.org/2000/svg"  width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        &nbsp;&nbsp;Historial Cliente
                    </button>
                </h2>
                <div id="collapseOne" class={"accordion-collapse collapse " + (activeCollapse ? "show" : "")} >
                    <div className="accordion-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {historialClienteArray.map((historialCliente, i) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{i}</th>
                                                <td>{getFormattedDateTime(new Date(historialCliente.fecha))}</td>
                                                <td>{historialCliente.producto}</td>
                                                <td>{historialCliente.cantidad}</td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PedidosHistorialClienteComponente;
