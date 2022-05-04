import React, { useState, useEffect, useRef } from 'react';
import { Redirect, Link, useHistory, useSearchParams } from "react-router-dom";
import { isLoggedIn, getDatosCliente_util, setDatosCliente_util, getDatosCliente_Proveedor_util, getDatosCliente_urlEditar_util } from './utils';

function CargaDatosClientesGrillaProveedorEditar(props) {
    const [state, setState] = useState(get_state());
    const history = useHistory();
    function get_state() {
        var result = getDatosCliente_Proveedor_util();
        var paramsURL = getDatosCliente_urlEditar_util();
        if (paramsURL != -1) {
            var o = getDatosCliente_util();
            result = o.listaProveedor[paramsURL]         
        }
        return result;
    }
    function handleChange(e) {
        const { name, value } = e.target
        setState(prev => ({ ...prev, [name]: value }));
    }

    function onClickGrabar(e) {
        const { name, value } = e.target

        var o = getDatosCliente_util();
        if (o.listaProveedor == null) {
            o.listaProveedor = [];
        }
        var paramsURL = getDatosCliente_urlEditar_util();
        if (paramsURL == -1) {
            o.listaProveedor.push(state);         
        }else{
            o.listaProveedor[paramsURL] = state;
        }

        setDatosCliente_util(o);
        let path = 'cargadatosclientes';
        history.push(path);
    }
    if (!isLoggedIn()) {
        return <Redirect to="/sign-in" />;
    }
    return (
        <>
            <div className="app container-fluid">
                <div className="alert alert-primary text-center  text-uppercase" ><h2>IDENTIFICACIÓN DEL PROVEEDOR</h2></div>
                <div className="float-end">
                    <button className="btn btn-success" onClick={(e) => onClickGrabar(e)}>Agregar</button>
                    <Link className="nav-link" to="/cargadatosclientes" data-toggle="collapse" data-target=".navbar-collapse.show"  >  <button className="btn btn-success" >Volver</button></Link>
                </div>
                <br></br>
                <div class="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="cdc_Proveedor_Nombre" value={state.cdc_Proveedor_Nombre} onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="cdc_Proveedor_Direccion" value={state.cdc_Proveedor_Direccion} onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label className="form-label">C.P.</label>
                    <input type="text" className="form-control" name="cdc_Proveedor_CPA" value={state.cdc_Proveedor_CPA} onChange={handleChange}></input>
                </div>                
                <div class="mb-3">
                    <label className="form-label">Localidad</label>
                    <input type="text" className="form-control" name="cdc_Proveedor_Localidad" value={state.cdc_Proveedor_Localidad} onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input type="text" className="form-control" name="cdc_Proveedor_Telefono" value={state.cdc_Proveedor_Telefono} onChange={handleChange}></input>
                </div>
            </div>
        </>
    );
}


export default CargaDatosClientesGrillaProveedorEditar;