import React, { useState, useEffect, useRef } from 'react';
import { useHistory, Redirect } from "react-router-dom";
import ResultadoCarrito from './ResultadoCarrito'
import { isLoggedIn, getCantidad_ModuloFarmacia, getModuloActualizado, getFarmaciaCurrent ,setFarmaciaCurrent} from './utils';

function Carrito() {
    const [farmaciaModulosArray, setFarmaciaModulosArray] = useState([]);
    const pedidosFarmaciasRefs = new Map();
    let history = useHistory();
    useEffect(() => {
        var l_farmaciaModulos_array = [];
        let farma = getFarmaciaCurrent();
        if (farma !== null && farma !== undefined && farma !== '') {
            var l_pedidos = window.localStorage.getItem('l_pedidos') || '';
            if (l_pedidos !== null && l_pedidos !== undefined && l_pedidos !== '') {
                l_pedidos = JSON.parse(l_pedidos);
            }
            if (!Array.isArray(l_pedidos)) {
                l_pedidos = [];
            }

            l_pedidos.forEach(x => {
                if (farma.id === x.farmacia.id) {
                    var isNotFind = true;
                    for (var i = 0; i < l_farmaciaModulos_array.length; i++) {
                        var cant = x.cantidad;
                        if (cant <= 0) {
                            isNotFind = false;
                            break;
                        }
                        if (l_farmaciaModulos_array[i].farmacia.id === x.farmacia.id) {
                            l_farmaciaModulos_array[i].modulos.push(getModuloActualizado(x.modulo));
                            isNotFind = false;
                            break;
                        }
                    }
                    if (isNotFind) {
                        var cant = x.cantidad;
                        if (cant > 0) {
                            let modulos_temp = [];
                            modulos_temp.push(getModuloActualizado(x.modulo));
                            var f_m = {
                                farmacia: farma,
                                modulos: modulos_temp
                            };
                            l_farmaciaModulos_array.push(f_m);
                        }
                    }
                }
            })
            l_farmaciaModulos_array.forEach(element => {
                pedidosFarmaciasRefs.set(element.farmacia.id, React.createRef());
            });
        }
        setFarmaciaModulosArray(l_farmaciaModulos_array);

    }, []);
    /*function getModuloActualizado(pModulo) {
        var mod = getModulo_actualizado(pModulo);
        if (mod === null) {
            return pModulo;
        }
        return mod;
    }*/
    function onClickGrabarPedidos(e) {
        e.preventDefault();

        if (farmaciaModulosArray.length > 0) {
            var l_pendienteGrabados = localStorage.getItem('l_pendienteGrabados') || '';
            if (l_pendienteGrabados !== null && l_pendienteGrabados !== undefined && l_pendienteGrabados !== '') {
                l_pendienteGrabados = JSON.parse(l_pendienteGrabados);
            }
            if (!Array.isArray(l_pendienteGrabados)) {
                l_pendienteGrabados = [];
            }
            for (var y = 0; y < farmaciaModulosArray.length; y++) {
                var mod_cant = [];
                for (var y2 = 0; y2 < farmaciaModulosArray[y].modulos.length; y2++) {
                    //    
                    var isNoFindIn_pendienteGrabados = true;
                    for (var y3 = 0; y3 < l_pendienteGrabados.length; y3++) {
                        if (farmaciaModulosArray[y].farmacia.id === l_pendienteGrabados[y3].farmacia.id) {
                            for (var y4 = 0; y4 < l_pendienteGrabados[y3].modulos.length; y4++) {
                                if (farmaciaModulosArray[y].modulos[y2].id === l_pendienteGrabados[y3].modulos[y4].modulo.id) {
                                    l_pendienteGrabados[y3].modulos[y4].cantidad = getCantidad_ModuloFarmacia(farmaciaModulosArray[y].modulos[y2], farmaciaModulosArray[y].farmacia);
                                    isNoFindIn_pendienteGrabados = false;
                                    break;
                                }
                            }
                            break;
                        }
                    }
                    //    
                    if (isNoFindIn_pendienteGrabados) {
                        var m_c = {
                            modulo: farmaciaModulosArray[y].modulos[y2],
                            cantidad: getCantidad_ModuloFarmacia(farmaciaModulosArray[y].modulos[y2], farmaciaModulosArray[y].farmacia)
                        };
                        mod_cant.push(m_c);
                    }
                }
                if (mod_cant.length > 0) {
                    var f_m = {
                        farmacia: farmaciaModulosArray[y].farmacia,
                        modulos: mod_cant,
                        fecha_grabado: Date.now()//,
                        // fecha_enviado: null,
                        //guid: null
                    };
                    l_pendienteGrabados.push(f_m);
                }
            }
            localStorage.setItem('l_pendienteGrabados', JSON.stringify(l_pendienteGrabados));
        }
        let farma = getFarmaciaCurrent();
        if (farma !== null && farma !== undefined && farma !== '') {
            var l_pendiente = localStorage.getItem('l_pedidos') || '';
            if (l_pendiente !== '') {
                l_pendiente = JSON.parse(l_pendiente);
            }
            if (Array.isArray(l_pendiente)) {
                l_pendiente = l_pendiente.filter(item => item.farmacia.id !== farma.id);
                localStorage.setItem('l_pedidos', JSON.stringify(l_pendiente));
                //window.location.reload(false);
                setFarmaciaCurrent(null);
                irLaboratorio();
            }
        }
    }
    function irLaboratorio() {
        let path = `/laboratorio`;
        history.push(path);
    }
    function onClickSeguirComprando(e) {
        e.preventDefault();
        irLaboratorio();
    }
    if (!isLoggedIn()) {
        return <Redirect to="/sign-in" />;
    }
    return (
        <div className="app container-fluid">
            <div className="alert alert-primary text-center  text-uppercase" ><h2>Carrito</h2></div>
            <div className="float-end px-4">
                <button className="btn btn-success" onClick={(e) => onClickGrabarPedidos(e)}>Grabar Pedido</button>
            </div>
    
            <div className="float-end">
                <button className="btn btn-success" onClick={(e) => onClickSeguirComprando(e)}>Seguir Comprando</button></div>
            <br></br>
            {farmaciaModulosArray.map((farmaciaModulos, i) => {
                return (
                    <ResultadoCarrito key={i} ref={pedidosFarmaciasRefs.get(farmaciaModulos.farmacia.id)} farmaciaModulos={farmaciaModulos} isCarrito={true} ></ResultadoCarrito>
                );
            })}
        </div>

    );
}

export default Carrito;
