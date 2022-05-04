import React, { useState, useEffect, useRef } from 'react';
import { Redirect, Link,useHistory } from "react-router-dom";
import { setDatosCliente_util } from './utils';
import CargaDatosClientesGrillaResponsable from './CargaDatosClientesGrillaResponsable'
import CargaDatosClientesGrillaProveedor from './CargaDatosClientesGrillaProveedor'
import {  setDatosCliente_urlEditar_util } from './utils';
function CargaDatosClientesDetalle(props) {

    const [state, setState] = useState(props.datosCliente);
    const history = useHistory();
    useEffect(() => {
        setDatosCliente_util(state);
    }, [state]);
    function handleChange(e) {
        const { name, value } = e.target
        setState(prev => ({ ...prev, [name]: value }));
    }
    function onClickRedirectResponsableEditar(e) {
        e.preventDefault();;
        return <Redirect to="/cargadatosclientesgrillaresponsableeditar" />;
    }
    function onClickStearUrlEditar(e) {
        setDatosCliente_urlEditar_util(-1);
        let path = 'cargadatosclientesgrillaresponsableeditar';
        history.push(path);
    }
    function onClickStearUrlEditar_proveedor(e) {
        setDatosCliente_urlEditar_util(-1);
        let path = 'cargadatosclientesgrillaproveedoreditar';
        history.push(path);
    }
    return (
        <>
            <br></br>
            <div className="card">
                <div className="card-header ">
                    <h5 className="card-title">DATOS DE LA FARMACIA</h5>
                </div>
                <div className="card-body card-body-box-sizing">
                    <div class="mb-3">
                        <label className="form-label">Nombre de fantasía</label>
                        <input type="text" className="form-control" name="cdc_NombreFantasia" value={state.cdc_NombreFantasia} onChange={handleChange}></input>
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Nombre del farmacéutico</label>
                        <input type="text" className="form-control" name="cdc_NombreFarmaceutico" value={state.cdc_NombreFarmaceutico} onChange={handleChange}></input>
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Matricula N°</label>
                        <input type="text" className="form-control" name="cdc_NumeroMatricula" value={state.cdc_NumeroMatricula} onChange={handleChange}></input>
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Domicilio comercial</label>
                        <input type="text" className="form-control" name="cdc_Direccion" value={state.cdc_Direccion} onChange={handleChange}></input>
                    </div>
                    <div class="mb-3">
                        <label className="form-label">C.P.</label>
                        <input type="text" className="form-control" name="cdc_CPA" value={state.cdc_CPA} onChange={handleChange}></input>
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Localidad</label>
                        <input type="text" className="form-control" name="cdc_Localidad" value={state.cdc_Localidad} onChange={handleChange}></input>
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Provincia</label>
                        <input type="text" className="form-control" name="cdc_Provincia" value={state.cdc_Provincia} onChange={handleChange}></input>
                    </div>
                    <div class="mb-3">
                        <label className="form-label">CUIT</label>
                        <input type="text" className="form-control" name="cdc_CUIT" value={state.cdc_CUIT} onChange={handleChange}></input>
                    </div>
                    <div class="mb-3">
                        <label className="form-label">IVA</label>
                        {/*  <input type="text" className="form-control" name="cdc_IVA" value={state.cdc_IVA} onChange={handleChange}></input>*/}
                        <select className="custom-select form-control" name="cdc_IVA" value={state.cdc_IVA} onChange={handleChange}>
                            <option value="Inscr">Inscr</option>
                            <option value="Monot">Monot</option>
                            <option value="Exento">Exento</option>
                            <option value="No reps">No reps</option>
                            <option value="No Categ">No Categ</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label className="form-label">N° inscripción D.G.R.</label>
                        <input type="text" className="form-control" name="cdc_NroInscripcionDGR" value={state.cdc_NroInscripcionDGR} onChange={handleChange}></input>
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Código de PAMI</label>
                        <input type="text" className="form-control" name="cdc_CodigoPAMI" value={state.cdc_CodigoPAMI} onChange={handleChange}></input>
                    </div>
                    <div class="mb-3">
                        <label className="form-label">GLN</label>
                        <input type="text" className="form-control" name="cdc_GLN" value={state.cdc_GLN} onChange={handleChange}></input>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="card">
                <div className="card-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-10">
                                <h5 className="card-title">IDENTIFICACIÓN DEL/LOS RESPONSABLES</h5>
                            </div>
                            <div className="col-2">

                                <button className="btn btn-success" onClick={(e) => onClickStearUrlEditar(e)}>
                                    {/* <Link className="nav-link" to="/cargadatosclientesgrillaresponsableeditar" data-toggle="collapse" data-target=".navbar-collapse.show"  >  */}
                                    <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 24 24" fill="currentColor" class="bi bi-plus-circle" ><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" /><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" /></svg>

                                    {/*</Link> */}
                                </button>
                                {/*  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => onClickRedirectResponsableEditar(e)}>  </button> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body card-body-box-sizing">
                    <CargaDatosClientesGrillaResponsable listaResponsable={state.listaResponsable}></CargaDatosClientesGrillaResponsable>
                </div>
            </div>
            <br></br>
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">DATOS DE VENTAS</h5>
                </div>
                <div className="card-body card-body-box-sizing">
                    <div class="mb-3">
                        <label className="form-label">Descuento/plazo pago</label>
                        <input type="text" className="form-control" name="cdc_DescuentoPlazoPago" value={state.cdc_DescuentoPlazoPago} onChange={handleChange}></input>
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Monto de crédito acordado</label>
                        <input type="text" className="form-control" name="cdc_MontoDeCreditoAcordado" value={state.cdc_MontoDeCreditoAcordado} onChange={handleChange}></input>
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Período</label>
                        {/*<input type="text" className="form-control" name="cdc_MontoDeCreditoAcordado_Periodo" value={state.cdc_MontoDeCreditoAcordado_Periodo} onChange={handleChange}></input>*/}
                        <select className="custom-select form-control" name="cdc_MontoDeCreditoAcordado_Periodo" value={state.cdc_MontoDeCreditoAcordado_Periodo} onChange={handleChange}>
                            <option value="Semanal">Semanal</option>
                            <option value="Total">Total</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Reparto</label>
                        <input type="text" className="form-control" name="cdc_Reparto" value={state.cdc_Reparto} onChange={handleChange}></input>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="card">
                <div className="card-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-10">
                                <h5 className="card-title">PRINCIPALES PROVEEDORES</h5>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-success" onClick={(e) => onClickStearUrlEditar_proveedor(e)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 24 24" fill="currentColor" class="bi bi-plus-circle" ><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" /><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" /></svg>
                                </button>                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body card-body-box-sizing">
                    <CargaDatosClientesGrillaProveedor listaProveedor={state.listaProveedor}></CargaDatosClientesGrillaProveedor>
                </div>
            </div>
        </>
    );
}


export default CargaDatosClientesDetalle;