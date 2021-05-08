//import React from 'react';
//import { useHistory, Redirect } from "react-router-dom";
var url = 'https://api.kellerhoff.com.ar/api/';//'https://localhost:5001/api/';//

export function FormatoDecimalConDivisorMiles(pValor) {
    var valor = pValor.toFixed(2);
    var resultado = pValor.toFixed(2);
    var isNroNegativo = false;
    if (valor) {
        if (valor.toString().indexOf('-') !== -1) {
            isNroNegativo = true;
        }
        var nroBase = valor.toString().replace('-', '').split('.');
        if (nroBase.length > 0) {
            var cant = nroBase[0].length;
            var parteDecimalAUX = '';
            var numeroPorParte = nroBase[0];
            while (numeroPorParte.length > 3) {
                parteDecimalAUX = '.' + numeroPorParte.substr(numeroPorParte.length - 3) + parteDecimalAUX;
                numeroPorParte = numeroPorParte.substring(0, numeroPorParte.length - 3);
            }
            parteDecimalAUX = numeroPorParte + parteDecimalAUX;
            if (nroBase[1] == undefined) {
                resultado = parteDecimalAUX;
            } else {
                resultado = parteDecimalAUX + ',' + nroBase[1];
            }
        }
        if (isNroNegativo) {
            resultado = '-' + resultado;
        }
    }
    return resultado;
}
export function currencyFormat(num) {
    return '$' + FormatoDecimalConDivisorMiles(num);
}
export function getFormattedDate(date) {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return day + '/' + month + '/' + year;
}
export function getFormattedDateTime(date) {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    var hour = date.getHours().toString();
    hour = hour.length > 1 ? hour : '0' + hour;

    var minutes = date.getMinutes().toString();
    minutes = minutes.length > 1 ? minutes : '0' + minutes;

    var seconds = date.getSeconds().toString();
    seconds = seconds.length > 1 ? seconds : '0' + seconds;

    return day + '/' + month + '/' + year + ' ' + hour + ':' + minutes + ':' + seconds;
}
export function getFarmaciaActualizada(pFarmacia) {
    var farma = private_getFarmacia_actualizada(pFarmacia);
    if (farma === null) {
        return pFarmacia;
    }
    return farma;
}
export function private_getFarmacia_actualizada(pFarmacia) {
    var l_farmacias = localStorage.getItem('l_farmacias') || '';
    if (l_farmacias !== null && l_farmacias !== undefined && l_farmacias !== '') {
        l_farmacias = JSON.parse(l_farmacias);
    }
    if (!Array.isArray(l_farmacias)) {
        l_farmacias = [];
    }
    var farma = l_farmacias.find(element => String(pFarmacia.id) === String(element.id));
    if (farma !== undefined && farma !== null && farma !== '') {
        return farma;
    } else {
        return null;
    }
}
export function private_getModulo_actualizado(pModulo) {
    var l_modulos = localStorage.getItem('l_modulos') || '';
    if (l_modulos !== undefined && l_modulos !== null && l_modulos !== '') {
        l_modulos = JSON.parse(l_modulos);
    }
    if (!Array.isArray(l_modulos)) {
        l_modulos = [];
    }
    var modulo = l_modulos.find(element => String(pModulo.id) === String(element.id));
    if (modulo !== undefined && modulo !== null && modulo !== '') {
        return modulo;
    } else {
        return null;
    }
}
export function getModuloActualizado(pModulo) {
    var mod = private_getModulo_actualizado(pModulo);
    if (mod === null) {
        return pModulo;
    }
    return mod;
}
export function getCantidad_ModuloFarmacia(pModulo, pFarmacia) {
    var cantidad = 0;
    if (pFarmacia === null || pFarmacia === undefined || pFarmacia === '')
        return cantidad;
    var l_pendiente = localStorage.getItem('l_pedidos') || '';
    if (l_pendiente !== '') {
        l_pendiente = JSON.parse(l_pendiente);
        if (Array.isArray(l_pendiente)) {
            for (var i = 0; i < l_pendiente.length; i++) {
                if (String(l_pendiente[i].modulo.id) === String(pModulo.id) && String(l_pendiente[i].farmacia.id) === String(pFarmacia.id)) {
                    cantidad = l_pendiente[i].cantidad;
                    break;
                }
            }
        }
    }
    return cantidad;
}
export function getPrecioModuloDesc(pModuloDetalle, pFarmacia) {
    var precio = 0;//pModuloDetalle.precioDescuento;
    if (pFarmacia !== undefined && pFarmacia !== null && pFarmacia !== '') {
        precio = pModuloDetalle.precioDescuento;
        if (pModuloDetalle.isTieneEnCuentaDescuentoCliente) {
            return ObtenerPrecioFinal(pModuloDetalle.precioDescuento, pFarmacia.objCliente, pModuloDetalle);
        }
    }
    return precio;
}
export function getPrecioModuloHabitual(pModuloDetalle, pFarmacia) {
    var precio = 0;
    if (pFarmacia !== undefined && pFarmacia !== null && pFarmacia !== '') {
        return ObtenerPrecioFinal(pModuloDetalle.objProducto.pro_PrecioBase, pFarmacia.objCliente, pModuloDetalle);
    }
    return precio;
}
export function getPrecioBaseConDescuento(pPrecioBase, pProductos, pDescuentoRestar) {
    var descuento = pDescuentoRestar - pProductos.pro_PorcARestarDelDtoDeCliente;
    if (descuento < 0)
        descuento = 0;
    var resultado = pPrecioBase;
    resultado = resultado * (parseFloat(1) - (descuento / parseFloat(100)));
    return resultado;
}
export function ObtenerPrecioFinal(pPrecioBase, pClientes, pModuloDetalle) {
    var resultado = 0.0;
    var pProductos = pModuloDetalle.objProducto;
    if (pProductos.pro_neto) {
        switch (pProductos.pro_codtpopro) {
            case "M": // medicamento
                resultado = getPrecioBaseConDescuento(pPrecioBase, pProductos, pClientes.cli_pordesbetmed);
                break;
            case "P": // Perfumeria
            case "A": // Accesorio
            case "V": // Accesorio
                resultado = getPrecioBaseConDescuento(pPrecioBase, pProductos, pClientes.cli_pordesnetos);
                break;
            default:
                break;
        }
    }
    else {  // No neto   
        resultado = getPrecioBaseConDescuento(pPrecioBase, pProductos, pClientes.cli_PorcentajeDescuentoDeEspecialidadesMedicinalesDirecto);
    }
    return parseFloat(parseFloat(resultado).toFixed(2));
}
export function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
export function getFarmaciaCurrent() {
    var farmaciaCurrent = localStorage.getItem('farmaciaCurrent') || '';
    if (farmaciaCurrent !== null && farmaciaCurrent !== undefined && farmaciaCurrent !== '') {
        try {
            farmaciaCurrent = JSON.parse(farmaciaCurrent);
        } catch { farmaciaCurrent = null; }
    } else {
        farmaciaCurrent = null;
    }
    if (farmaciaCurrent !== null) {
        farmaciaCurrent = getFarmaciaActualizada(farmaciaCurrent);
    }
    return farmaciaCurrent;
}
export function setFarmaciaCurrent(pValue) {
    localStorage.setItem('farmaciaCurrent', JSON.stringify(pValue));
}
export function getMontoAhorroMontoTotalGeneral_farmacia() {
    let montoTotal = 0;
    let ahorroTotal = 0;
    var farmaciaCurrent = getFarmaciaCurrent();
    if (farmaciaCurrent !== null && farmaciaCurrent !== undefined && farmaciaCurrent !== '') {
        var l_pedidos = window.localStorage.getItem('l_pedidos') || '';
        if (l_pedidos !== null && l_pedidos !== undefined && l_pedidos !== '') {
            l_pedidos = JSON.parse(l_pedidos);
        }
        if (!Array.isArray(l_pedidos)) {
            l_pedidos = [];
        }
        var l_pedidos_farmacia = [];
        l_pedidos.forEach(x => {
            if (x.cantidad > 0 && x.farmacia.id === farmaciaCurrent.id) {
                let oPedido = { fechaCreacion: x.fechaCreacion, farmacia: getFarmaciaActualizada(x.farmacia), modulo: getModuloActualizado(x.modulo), cantidad: x.cantidad };
                l_pedidos_farmacia.push(oPedido);
            }
        });
        l_pedidos_farmacia.forEach(elementPedidos_farmacia => {
            let montoTotal_PrecioModuloDesc = 0;
            let montoTotal_PrecioModuloHabitual = 0;

            elementPedidos_farmacia.modulo.moduloDetalle.forEach(element => {
                var cantidadUnidades = element.cantidadUnidades;
                if (cantidadUnidades == 0) {
                    cantidadUnidades = 1;
                }
                if (element.objProducto.pro_PrecioBase > 0) {
                    montoTotal_PrecioModuloHabitual += getPrecioModuloHabitual(element, farmaciaCurrent) * cantidadUnidades;
                }
                if (element.precioDescuento > 0) {
                    montoTotal_PrecioModuloDesc += getPrecioModuloDesc(element, farmaciaCurrent) * cantidadUnidades;
                }
            });

            if (elementPedidos_farmacia.cantidad > 0) {
                //var montoTotal_aux = montoTotal_detalle * elementPedidos_farmacia.cantidad;
                //montoTotal += montoTotal_aux;
                //ahorroTotal += montoTotal_aux - (montoTotalDescuento_detalle * elementPedidos_farmacia.cantidad);
                var PrecioModuloHabitual_aux = montoTotal_PrecioModuloHabitual * elementPedidos_farmacia.cantidad;
                var PrecioModuloDesc_aux = montoTotal_PrecioModuloDesc * elementPedidos_farmacia.cantidad;
                montoTotal += PrecioModuloDesc_aux;
                ahorroTotal += PrecioModuloHabitual_aux - PrecioModuloDesc_aux;
            }
        });
    }
    var result = {
        ahorroTotal: ahorroTotal,
        montoTotal: montoTotal
    };
    return result;
}
export function getMontoAhorroMontoTotal_Modulo(pModulo, pFarmacia, pCantidad) {
    let montoTotal_PrecioModuloDesc = 0;
    let montoTotal_PrecioModuloHabitual = 0;

    pModulo.moduloDetalle.forEach(element => {
        var cantidadUnidades = element.cantidadUnidades;
        if (cantidadUnidades == 0) {
            cantidadUnidades = 1;
        }
        if (element.objProducto.pro_PrecioBase > 0) {
            montoTotal_PrecioModuloHabitual += getPrecioModuloHabitual(element, pFarmacia) * cantidadUnidades;
        }
        if (element.precioDescuento > 0) {
            montoTotal_PrecioModuloDesc += getPrecioModuloDesc(element, pFarmacia) * cantidadUnidades;
        }
    });
    let montoTotal = 0;
    let ahorroTotal = 0;
    if (pCantidad > 0) {
        montoTotal = montoTotal_PrecioModuloDesc * pCantidad;
        ahorroTotal = (montoTotal_PrecioModuloHabitual * pCantidad) - montoTotal;
    }
    var result = {
        ahorroTotal: ahorroTotal,
        montoTotal: montoTotal
    };
    return result;
}
export async function ajaxLogin(pName, pPass) {
    var isLogin = true;
    var data = {};
    data.login = pName;
    data.pass = pPass;
    var json = JSON.stringify(data);
    fetch(url + 'Authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })
        .then(results => results.json())
        .then(data => {

            if (data.apNombre !== null && data.apNombre !== undefined && data.apNombre !== '') {
                localStorage.setItem('login_ApNombre', data.apNombre);
                isLogin = true;

                var ApNombre_anterior = getApNombre_anterior();
                if (ApNombre_anterior != '' && ApNombre_anterior != data.apNombre) {
                    clear_localStorage();
                }
            }
            if (data.token !== null && data.token !== undefined && data.token !== '') {
                localStorage.setItem('login_Token', data.token);
            }
        }).then(data => {
            if (isLoggedIn()) {
                apiLoadDataAsync().then(() => {
                    window.location.reload(false);
                })
            }
        });
    return isLogin;
}
export function clear_localStorage() {
    localStorage.clear();
}
export function loggedOut() {
    localStorage.removeItem('login_ApNombre');

    localStorage.removeItem('ultimaSincronizacion');


    //localStorage.clear();
    //localStorage.setItem('login_ApNombre', null);
}
export function isLoggedIn() {
    var isLogin = false;
    var login_ApNombre = localStorage.getItem('login_ApNombre') || '';
    if (login_ApNombre !== null && login_ApNombre !== undefined && login_ApNombre !== '') {
        isLogin = true;
    }
    return isLogin;
}
function getApNombre_anterior() {
    var name = '';
    var login_ApNombre = localStorage.getItem('login_ApNombre_anterior') || '';
    if (login_ApNombre !== null && login_ApNombre !== undefined && login_ApNombre !== '') {
        name = login_ApNombre;
    }
    return name;
}
export function getName() {
    var name = '';
    var login_ApNombre = localStorage.getItem('login_ApNombre') || '';
    if (login_ApNombre !== null && login_ApNombre !== undefined && login_ApNombre !== '') {
        name = login_ApNombre;
    }
    return name;
}
export function getUrl() {
    return url;
}
export function getToken() {
    var token = '';
    var login_Token = localStorage.getItem('login_Token') || '';
    if (login_Token !== null && login_Token !== undefined && login_Token !== '') {
        token = login_Token;
    }
    return token;
}
/*function isSecurityToken() {
    return true;
}
export async function apiFarmaciaAsync() {
    const response = await fetch(getUrl() + 'farmacia?' + new URLSearchParams({ ApNombre: getName() }),
    headers: { "Authorization": getToken(), });
    const reader = response.json();
    var l_farmacias = await reader;
    if (l_farmacias !== null && l_farmacias !== undefined && l_farmacias !== '' && Array.isArray(l_farmacias)) {
        localStorage.setItem('l_farmacias', JSON.stringify(l_farmacias))
    }
}
export async function apiModuloAsync() {
    const response = await fetch(getUrl() + 'modulo', { headers: { "Authorization": getToken(), } });
    const reader = response.json();
    var l_modulos = await reader;
    if (l_modulos !== null && l_modulos !== undefined && l_modulos !== '' && Array.isArray(l_modulos)) {
        localStorage.setItem('l_modulos', JSON.stringify(l_modulos));
    }
}
export async function apiLaboratorioAsync() {
    const response = await fetch(getUrl() + 'Laboratorio', { headers: { "Authorization": getToken(), } });
    const reader = response.json();
    var l_laboratorios = await reader;
    if (l_laboratorios !== null && l_laboratorios !== undefined && l_laboratorios !== '' && Array.isArray(l_laboratorios)) {
        localStorage.setItem('l_laboratorios', JSON.stringify(l_laboratorios));
    }
}*/
export async function apiInfoPedidosAsync() {
    const response = await fetch(getUrl() + 'Pedido?' + new URLSearchParams({ ApNombre: getName() }), { headers: { "Authorization": getToken(), } });
    const reader = response.json();
    var l_InfoPedidos = await reader;
    if (l_InfoPedidos !== null && l_InfoPedidos !== undefined && l_InfoPedidos !== '' && Array.isArray(l_InfoPedidos)) {
        var l_pedidosHistorial = window.localStorage.getItem('l_pedidosHistorial') || '';
        if (l_pedidosHistorial !== null && l_pedidosHistorial !== undefined && l_pedidosHistorial !== '') {
            l_pedidosHistorial = JSON.parse(l_pedidosHistorial);
        }
        if (!Array.isArray(l_pedidosHistorial)) {
            l_pedidosHistorial = [];
        }
        l_InfoPedidos.forEach(element => {
            for (var i = 0; i < l_pedidosHistorial.length; i++) {
                if (String(l_pedidosHistorial[i].guid) === String(element.pea_guid)
                    && parseInt(l_pedidosHistorial[i].modulo.id) === parseInt(element.pea_numeroModulo)
                    && parseInt(l_pedidosHistorial[i].farmacia.id) === parseInt(element.pea_codCliente)) {
                    //l_pedidosHistorial[i].fecha = element.pea_fecha;
                    l_pedidosHistorial[i].procesado = element.pea_procesado;
                    l_pedidosHistorial[i].procesado_fecha = element.pea_procesado_fecha;
                    l_pedidosHistorial[i].procesado_cantidad = element.pea_procesado_cantidad;
                    l_pedidosHistorial[i].procesado_descripcion = element.pea_procesado_descripcion;
                }
            }

        });
        localStorage.setItem('l_pedidosHistorial', JSON.stringify(l_pedidosHistorial));
    }
}
export async function apiLoadDataAsync() {
    if (getName() != '') {


        const response = await fetch(getUrl() + 'SincronizadorApp?' + new URLSearchParams({ ApNombre: getName() }));
        const reader = response.json();
        var oSincronizadorApp = await reader;

        if (oSincronizadorApp !== null && oSincronizadorApp !== undefined && oSincronizadorApp !== '') {
            localStorage.setItem('ultimaSincronizacion', Date.now());

            // farmacia    
            var l_farmacias = oSincronizadorApp.listaFarmacia;
            if (l_farmacias !== null && l_farmacias !== undefined && l_farmacias !== '' && Array.isArray(l_farmacias)) {
                localStorage.setItem('l_farmacias', JSON.stringify(l_farmacias))
            }

            // modulo
            var l_modulos = oSincronizadorApp.listaModulo;
            if (l_modulos !== null && l_modulos !== undefined && l_modulos !== '' && Array.isArray(l_modulos)) {
                localStorage.setItem('l_modulos', JSON.stringify(l_modulos));
            }

            // laboratorio
            var l_laboratorios = oSincronizadorApp.listaLaboratorio;
            if (l_laboratorios !== null && l_laboratorios !== undefined && l_laboratorios !== '' && Array.isArray(l_laboratorios)) {
                localStorage.setItem('l_laboratorios', JSON.stringify(l_laboratorios));
            }

            // AppInfoPedido
            var l_InfoPedidos = oSincronizadorApp.listaAppInfoPedido;
            if (l_InfoPedidos !== null && l_InfoPedidos !== undefined && l_InfoPedidos !== '' && Array.isArray(l_InfoPedidos)) {
                var l_pedidosHistorial = window.localStorage.getItem('l_pedidosHistorial') || '';
                if (l_pedidosHistorial !== null && l_pedidosHistorial !== undefined && l_pedidosHistorial !== '') {
                    l_pedidosHistorial = JSON.parse(l_pedidosHistorial);
                }
                if (!Array.isArray(l_pedidosHistorial)) {
                    l_pedidosHistorial = [];
                }
                l_InfoPedidos.forEach(element => {
                    for (var i = 0; i < l_pedidosHistorial.length; i++) {
                        if (String(l_pedidosHistorial[i].guid) === String(element.pea_guid)
                            && parseInt(l_pedidosHistorial[i].modulo.id) === parseInt(element.pea_numeroModulo)
                            && parseInt(l_pedidosHistorial[i].farmacia.id) === parseInt(element.pea_codCliente)) {
                            l_pedidosHistorial[i].procesado = element.pea_procesado;
                            l_pedidosHistorial[i].procesado_fecha = element.pea_procesado_fecha;
                            l_pedidosHistorial[i].procesado_cantidad = element.pea_procesado_cantidad;
                            l_pedidosHistorial[i].procesado_descripcion = element.pea_procesado_descripcion;
                        }
                    }

                });
                localStorage.setItem('l_pedidosHistorial', JSON.stringify(l_pedidosHistorial));
            }
        }
    }
}
export function getUltimaSincronizacion() {
    var ultimaSincronizacion = window.localStorage.getItem('ultimaSincronizacion') || '';
    if (ultimaSincronizacion !== null && ultimaSincronizacion !== undefined && ultimaSincronizacion !== '') {
        return ultimaSincronizacion;
    }
    return null;
}
export function getTiempoUltimaSincronizacion() {
    var fechaNow = Date.now();
    var ultimaSincronizacion = getUltimaSincronizacion();
    const diffTime = Math.abs(fechaNow - ultimaSincronizacion);
    const diffSegundos = Math.ceil(diffTime / (1000));
    //const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffSegundos;
}
export function delete_PendienteGrabados_ModuloFarmacia(pModulo, pFarmacia) {
    var l_pendienteGrabados = window.localStorage.getItem('l_pendienteGrabados') || '';
    if (l_pendienteGrabados !== null && l_pendienteGrabados !== undefined && l_pendienteGrabados !== '') {
        l_pendienteGrabados = JSON.parse(l_pendienteGrabados);
    }
    if (Array.isArray(l_pendienteGrabados)) {
        for (var i = 0; i < l_pendienteGrabados.length; i++) {
            if (l_pendienteGrabados[i].farmacia.id === pFarmacia.id) {
                l_pendienteGrabados[i].modulos = l_pendienteGrabados[i].modulos.filter(item => item.modulo.id !== pModulo.id);
            }
        }
        localStorage.setItem('l_pendienteGrabados', JSON.stringify(l_pendienteGrabados));
    }
}
