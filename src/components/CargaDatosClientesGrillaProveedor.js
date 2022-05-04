import React, { useState, useEffect, useRef } from 'react';
import { Redirect, useHistory } from "react-router-dom";
import { isLoggedIn } from './utils';
import { setDatosCliente_urlEditar_util, getDatosCliente_util,setDatosCliente_util } from './utils';

function CargaDatosClientesGrillaProveedor(props) {

    const [state, setState] = useState(props.listaProveedor);
    const history = useHistory();
    function onClickEliminarClienteProveedor(e, i) {
        var o = getDatosCliente_util();
        if (o.listaProveedor == null) {
            o.listaProveedor = [];
        }
        const index = i;
        if (index > -1) {
             o.listaProveedor.splice(index, 1);
        }
        setDatosCliente_util(o);
        window.location.href = window.location.href;
    }
    function onClickEditarClienteProveedor(e, i) {
        setDatosCliente_urlEditar_util(i);
        let path = 'cargadatosclientesgrillaproveedoreditar';
        history.push(path);
    }
    if (!isLoggedIn()) {
        return <Redirect to="/sign-in" />;
    }
    return (
        <>
            {state.length > 0 && 
                <table className="table textTable">
                    <thead>
                        <tr>
                            <th className="col" scope="col">Nombre</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.map((detalle, i) => {
                            return (
                                <tr key={i}>
                                    <td>{detalle.cdc_Proveedor_Nombre}</td>
                                    <td>
                                        <button className="btn btn-success" onClick={(e) => onClickEliminarClienteProveedor(e, i)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-success" onClick={(e) => onClickEditarClienteProveedor(e, i)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 24 24" fill="currentColor" class="bi bi-pencil" ><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" /></svg>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            }
        </>
    );
}


export default CargaDatosClientesGrillaProveedor;