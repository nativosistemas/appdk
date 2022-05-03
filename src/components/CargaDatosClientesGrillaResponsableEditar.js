import React, { useState, useEffect, useRef } from 'react';
import { Redirect,Link,useHistory,useSearchParams } from "react-router-dom";
import { isLoggedIn,getDatosCliente_util,setDatosCliente_util ,getDatosCliente_Responsable_util} from './utils';

function CargaDatosClientesGrillaResponsableEditar(props) {
    // const { listaResponsable } = props.listaResponsable;
    const [state, setState] = useState( getDatosCliente_Responsable_util());
    const history = useHistory();
    //const [searchParams, setSearchParams] = useSearchParams();

    function handleChange(e) {
        const { name, value } = e.target

        setState(prev => ({ ...prev, [name]: value }));
        //searchParams.get("__firebase_request_key")
    }

    function onClickGrabar(e) {
        const { name, value } = e.target

        var o = getDatosCliente_util();
        if (o.listaResponsable == null){
            o.listaResponsable = [];
        }
        var nro = o.listaResponsable.length;

        //var oResponsable = getDatosCliente_Responsable_util();
        //oResponsable.cdr_NombreApellido = '   ' + nro;
        o.listaResponsable.push(state);
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
                <div className="alert alert-primary text-center  text-uppercase" ><h2>IDENTIFICACIÓN DEL RESPONSABLE</h2></div>
                <div className="float-end">
                    <button className="btn btn-success"  onClick={(e) => onClickGrabar(e)}>Agregar</button>
                    <Link className="nav-link" to="/cargadatosclientes" data-toggle="collapse" data-target=".navbar-collapse.show"  >  <button className="btn btn-success" >Volver</button></Link>
                </div>
                <br></br>
                <div class="mb-3">
                    <label className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="cdr_NombreApellido" value={state.cdr_NombreApellido} onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label className="form-label">Dirección</label>
                    <input type="text" className="form-control"  name="cdr_Direccion" value={state.cdr_Direccion}  onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label className="form-label">Localidad</label>
                    <input type="text" className="form-control"  name="cdr_Localidad" value={state.cdr_Localidad}  onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label className="form-label">Provincia</label>
                    <input type="text" className="form-control"  name="cdr_Provincia" value={state.cdr_Provincia}  onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label className="form-label">CPA</label>
                    <input type="text" className="form-control"  name="cdr_CPA" value={state.cdr_CPA}  onChange={handleChange}></input>
                </div>                
                <div class="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input type="text" className="form-control"  name="cdr_Telefono" value={state.cdr_Telefono}  onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control"  name="cdr_Email" value={state.cdr_Email}  onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label className="form-label">CUIT</label>
                    <input type="text" className="form-control"  name="cdr_CUIT" value={state.cdr_CUIT}  onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label className="form-label">DNI</label>
                    <input type="text" className="form-control"  name="cdr_DNI" value={state.cdr_DNI}  onChange={handleChange}></input>
                </div>    
                <div class="mb-3">
                    <label className="form-label">Fecha Nacimiento</label>
                    <input type="text" className="form-control"  name="cdr_FechaNacimiento" value={state.cdr_FechaNacimiento}  onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label className="form-label">Estado Civil</label>
                    <input type="text" className="form-control"  name="cdr_EstadoCivil" value={state.cdr_EstadoCivil}  onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label className="form-label">Nombre Conyuge</label>
                    <input type="text" className="form-control"  name="cdr_NombreConyuge" value={state.cdr_NombreConyuge}  onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label className="form-label">Nacionalidad</label>
                    <input type="text" className="form-control"  name="cdr_Nacionalidad" value={state.cdr_Nacionalidad}  onChange={handleChange}></input>
                </div>           
                <div class="mb-3">
                    <label className="form-label">Cargo Ocupa</label>
                    <input type="text" className="form-control"  name="cdr_CargoOcupa" value={state.cdr_CargoOcupa}  onChange={handleChange}></input>
                </div>                                           
            </div>
        </>
    );
}


export default CargaDatosClientesGrillaResponsableEditar;