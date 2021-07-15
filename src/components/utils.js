var url = 'https://api.kellerhoff.com.ar/api/';//'https://localhost:5001/api/';//
var apiNameSincronizadorApp = 'SincronizadorAppTest'; // 'SincronizadorApp';// 
var msgNoInternet = 'No hay conexion de internet. Vuelva a intentarlo mas tarde.';
var msgVuelvaIntentarlo = 'Vuelva a intentarlo mas tarde.';

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
    var result = null;
    if (pFarmacia !== null) {
        var l_farmacias = localStorage.getItem('l_farmacias') || '';
        if (l_farmacias !== null && l_farmacias !== undefined && l_farmacias !== '') {
            l_farmacias = JSON.parse(l_farmacias);
        }
        if (!Array.isArray(l_farmacias)) {
            l_farmacias = [];
        }
        var farma = l_farmacias.find(element => String(pFarmacia.id) === String(element.id));
        if (farma !== undefined && farma !== null && farma !== '') {
            result = farma;
        } 
    }
    return result;
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
    CerrarAlert();
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
                var ApNombre_anterior = getApNombre_anterior();
                if (ApNombre_anterior != '' && ApNombre_anterior != data.apNombre) {
                    clear_localStorage();
                }
                setApNombre_anterior(data.apNombre);
                localStorage.setItem('login_ApNombre', data.apNombre);
                isLogin = true;
            }
            if (data.token !== null && data.token !== undefined && data.token !== '') {
                localStorage.setItem('login_Token', data.token);
            }
        }).then(data => {
            if (isLoggedIn()) {
                apiSincronizadorAppPostAsync().then(() => {
                    window.location.reload(false);
                })
            } else {
                AbrirAlert("Usuario y contraseña incorrectos.");
                window.location.reload();
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
export function setApNombre_anterior(pValue) {
    localStorage.setItem('login_ApNombre_anterior', pValue);
}
export function getName() {
    var name = '';
    var login_ApNombre = localStorage.getItem('login_ApNombre') || '';
    if (login_ApNombre !== null && login_ApNombre !== undefined && login_ApNombre !== '') {
        name = login_ApNombre;
    }
    return name;
}
export function isAlertVisible() {
    var isResult = false;
    var isAlertVisible = localStorage.getItem('isAlertVisible') || '';
    if (isAlertVisible !== null && isAlertVisible !== undefined && isAlertVisible !== '' && (isAlertVisible == 'true')) {
        isResult = true;
    }
    return isResult;
}
export function setAlertVisible(pValue) {
    localStorage.setItem('isAlertVisible', pValue);
}
export function getMsgAlert() {
    var result = '';
    var MsgAlert = localStorage.getItem('MsgAlert') || '';
    if (MsgAlert !== null && MsgAlert !== undefined && MsgAlert !== '') {
        result = MsgAlert;
    }
    return result;
}
export function setMsgAlert(pValue) {
    localStorage.setItem('MsgAlert', pValue);
}
export function AbrirAlert(pValue) {
    setMsgAlert(pValue);
    setAlertVisible(true);
}
export function CerrarAlert() {
    setMsgAlert('');
    setAlertVisible(false);
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
export function getPedidosEnviar() {
    var l_farmaciaModulos_array = [];

    var l_pendienteGrabados = window.localStorage.getItem('l_pendienteGrabados') || '';
    if (l_pendienteGrabados !== null && l_pendienteGrabados !== undefined && l_pendienteGrabados !== '') {
        l_pendienteGrabados = JSON.parse(l_pendienteGrabados);
    }
    if (!Array.isArray(l_pendienteGrabados)) {
        l_pendienteGrabados = [];
    }

    l_pendienteGrabados.forEach(x => {
        for (var y = 0; y < x.modulos.length; y++) {
            if (x.modulos[y].cantidad > 0) {//
                var isNotFind = true;
                for (var i = 0; i < l_farmaciaModulos_array.length; i++) {
                    if (l_farmaciaModulos_array[i].farmacia.id === x.farmacia.id) {
                        var mod = getModuloActualizado(x.modulos[y].modulo);
                        mod.cantidadGrabado = x.modulos[y].cantidad;
                        l_farmaciaModulos_array[i].modulos.push(mod);
                        isNotFind = false;
                        break;
                    }
                }
                if (isNotFind) {
                    let modulos_temp = [];
                    var mod = getModuloActualizado(x.modulos[y].modulo);
                    mod.cantidadGrabado = x.modulos[y].cantidad;
                    modulos_temp.push(mod);
                    var f_m = {
                        farmacia: getFarmaciaActualizada(x.farmacia),
                        modulos: modulos_temp
                    };
                    l_farmaciaModulos_array.push(f_m);
                }
            }//
        }
    })
    return l_farmaciaModulos_array;
}
export function isSincronizadorApp() {
    var result = false;
    var apiSincronizadorAppPost = localStorage.getItem('apiSincronizadorAppPost') || '';
    if (apiSincronizadorAppPost !== null && apiSincronizadorAppPost !== undefined && apiSincronizadorAppPost !== '') {
        result = true;
    }
    return result;
}
export function setSincronizadorApp(pValue) {
    localStorage.setItem('apiSincronizadorAppPost', pValue);
    // localStorage.removeItem('apiSincronizadorAppPost');
}
export async function apiSincronizadorAppPostAsync() {
    if (getName() != '' && !isSincronizadorApp()) {
        setSincronizadorApp('true');
        CerrarAlert();
        if (navigator.onLine) {

            var farmaciaModulosArray = getPedidosEnviar();
            var l_post_ok = [];
            var fechaNow = Date.now();
            var data = {};
            data.promotor = getName();
            data.pedidoModulos = [];
            farmaciaModulosArray.map((farmaciaModulos, i) => {
                farmaciaModulos.modulos.map((modulo, i) => {
                    var post_ok = {
                        modulo: modulo,
                        farmacia: farmaciaModulos.farmacia,
                        cantidad: modulo.cantidadGrabado,
                        fecha: fechaNow,
                        guid: null,
                        procesado: null,
                        procesado_fecha: null,
                        procesado_cantidad: null,
                        procesado_descripcion: null
                    };
                    l_post_ok.push(post_ok);
                    var p = {
                        idModulo: modulo.id,
                        idFarmacia: farmaciaModulos.farmacia.id,
                        cantidad: modulo.cantidadGrabado
                    };
                    data.pedidoModulos.push(p);
                })
            });
            var json = JSON.stringify(data);
            /* */
            try {
                const response = await fetch(getUrl() + apiNameSincronizadorApp, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: json
                });
                if (response.status >= 400 && response.status < 600) {
                    localStorage.removeItem('apiSincronizadorAppPost');
                    AbrirAlert(msgNoInternet);
                    window.location.reload();
                } else {
                    const reader = response.json();
                    var oSincronizadorApp = await reader;
                    if (oSincronizadorApp === null || oSincronizadorApp === undefined || oSincronizadorApp === '') {
                        localStorage.removeItem('apiSincronizadorAppPost');
                        AbrirAlert(msgVuelvaIntentarlo);
                        window.location.reload();
                    } else {


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
                        /*
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
                        */

                        // historial
                        var l_appPedidoModuloHistorial = oSincronizadorApp.listaAppPedidoModuloHistorial;
                        if (l_appPedidoModuloHistorial !== null && l_appPedidoModuloHistorial !== undefined && l_appPedidoModuloHistorial !== '' && Array.isArray(l_appPedidoModuloHistorial)) {
                            var l_historial = [];
                            l_appPedidoModuloHistorial.map((pedidoModuloHistorial, i) => {

                                var farma = null;
                                if (l_farmacias !== null && l_farmacias !== undefined && l_farmacias !== '' && Array.isArray(l_farmacias)) {
                                    farma = l_farmacias.find(element => String(pedidoModuloHistorial.pea_codCliente) === String(element.id));
                                    if (!(farma !== undefined && farma !== null && farma !== '')) {
                                        farma = null;
                                    }
                                }
                                var post_ok = {
                                    modulo: pedidoModuloHistorial,
                                    farmacia: farma, //pea_codCliente
                                    pea_codCliente: pedidoModuloHistorial.pea_codCliente, //pea_codCliente
                                    pea_cantidad: pedidoModuloHistorial.pea_cantidad,
                                    cantidad: pedidoModuloHistorial.pea_cantidad,
                                    fecha: Date.parse(pedidoModuloHistorial.pea_fecha),
                                    guid: pedidoModuloHistorial.pea_guid,
                                    procesado: pedidoModuloHistorial.pea_procesado,
                                    procesado_fecha: pedidoModuloHistorial.pea_procesado_fecha,
                                    procesado_cantidad: pedidoModuloHistorial.pea_procesado_cantidad,
                                    procesado_descripcion: pedidoModuloHistorial.pea_procesado_descripcion
                                };
                                l_historial.push(post_ok);
                            });
                            localStorage.setItem('l_historial', JSON.stringify(l_historial));
                        }

                        // pedido Guid
                        var pedidoGuid = oSincronizadorApp.pedidoGuid;
                        if (pedidoGuid === null || pedidoGuid === undefined || pedidoGuid === '' || !pedidoGuid || pedidoGuid === '00000000-0000-0000-0000-000000000000') {
                            // no se envio pedido     
                        } else {
                            /*
                            var l_pedidosHistorial = window.localStorage.getItem('l_pedidosHistorial') || '';
                            if (l_pedidosHistorial !== null && l_pedidosHistorial !== undefined && l_pedidosHistorial !== '') {
                                l_pedidosHistorial = JSON.parse(l_pedidosHistorial);
                            }
                            if (!Array.isArray(l_pedidosHistorial)) {
                                l_pedidosHistorial = [];
                            }
                            l_post_ok.forEach(element => {
                                element.guid = pedidoGuid;
                            });
                            var l_pedidosHistorial_new = l_pedidosHistorial.concat(l_post_ok);
                            localStorage.setItem('l_pedidosHistorial', JSON.stringify(l_pedidosHistorial_new));
                            */
                            localStorage.setItem('l_pendienteGrabados', JSON.stringify([]));
                        }



                        /// final ok
                        localStorage.removeItem('apiSincronizadorAppPost');
                        localStorage.setItem('ultimaSincronizacion', Date.now());
                        window.location.reload();
                    }
                }
            } catch {
                localStorage.removeItem('apiSincronizadorAppPost');
                AbrirAlert(msgNoInternet);
                window.location.reload();
            }
            /* */
        } else {
            localStorage.removeItem('apiSincronizadorAppPost');
            AbrirAlert(msgNoInternet);
            window.location.reload();
        }
    }
}
export function getHistorial(pFarmacia, pFecha) {
    var l_farmaciaModulos_array = [];

    var l_historial = window.localStorage.getItem('l_historial') || '';
    if (l_historial !== null && l_historial !== undefined && l_historial !== '') {
        l_historial = JSON.parse(l_historial);
    }
    if (!Array.isArray(l_historial)) {
        l_historial = [];
    }
    l_historial = l_historial.filter(element => element.farmacia  !== null);

    if (pFarmacia !== null && pFarmacia !== undefined && pFarmacia !== '') {
        l_historial = l_historial.filter(element => String(element.farmacia.id) + " - " + element.farmacia.nombre === String(pFarmacia));
    }
    if (pFecha !== null && pFecha !== undefined && pFecha !== '') {
        var fechaDesde = Date.parse(pFecha + ' 00:00:00');
        l_historial = l_historial.filter(element => element.fecha >= fechaDesde);
    }
    let nuevoObjeto = [];
    //Recorremos el arreglo 
    l_historial.forEach(x => {
        var index = 0;
        var isNotFindGuid = true;
        for (var i = 0; i < nuevoObjeto.length; i++) {
            if (nuevoObjeto[i].guid === x.guid) {
                index = i;
                isNotFindGuid = false;
                break;
            }
        }
        if (isNotFindGuid) {
            var g = {
                guid: x.guid,
                fecha: x.fecha,
                farmacias: []
            };
            nuevoObjeto.push(g);
            index = nuevoObjeto.length - 1;
        }
        var isAddFarma = true;
        for (var i = 0; i < nuevoObjeto[index].farmacias.length; i++) {
            if (nuevoObjeto[index].farmacias[i].farmacia.id === x.farmacia.id) {
                x.modulo.guid = x.guid;
                x.modulo.procesado = x.procesado;
                x.modulo.procesado_fecha = x.procesado_fecha;
                x.modulo.procesado_cantidad = x.procesado_cantidad;
                x.modulo.procesado_descripcion = x.procesado_descripcion;
                x.modulo.cantidadGrabado = x.pea_cantidad;
                nuevoObjeto[index].farmacias[i].modulos.push(x.modulo);
                isAddFarma = false;
            }
        }
        if (isAddFarma) {
            var l_modulos_aux = [];
            x.modulo.guid = x.guid;
            x.modulo.procesado = x.procesado;
            x.modulo.procesado_fecha = x.procesado_fecha;
            x.modulo.procesado_cantidad = x.procesado_cantidad;
            x.modulo.procesado_descripcion = x.procesado_descripcion;
            x.modulo.cantidadGrabado = x.pea_cantidad;
            l_modulos_aux.push(x.modulo);
            var p = {
                farmacia: getFarmaciaActualizada(x.farmacia),
                modulos: l_modulos_aux
            };
            nuevoObjeto[index].farmacias.push(p);
        }
    })
    l_farmaciaModulos_array = nuevoObjeto;
    return l_farmaciaModulos_array;
}
export function getHistorialCliente(farmacia) {
    var l_HistorialCliente_array = [];
    if (farmacia !== null && farmacia !== undefined && farmacia !== '') {
        var l_historial = window.localStorage.getItem('l_historial') || '';
        if (l_historial !== null && l_historial !== undefined && l_historial !== '') {
            l_historial = JSON.parse(l_historial);
        }
        if (!Array.isArray(l_historial)) {
            l_historial = [];
        }

        l_historial = l_historial.filter(element => element.farmacia !== null && element.farmacia.id === farmacia.id);

        l_historial.forEach(x => {

            for (var i = 0; i < x.modulo.moduloDetalle.length; i++) {

                var oHistorialCliente = {
                    guid: x.guid,
                    fecha: x.fecha,
                    modulo: x.modulo,
                    moduloDetalle: x.modulo.moduloDetalle[i],
                    producto: x.modulo.moduloDetalle[i].producto,
                    cantidad: x.pea_cantidad * x.modulo.moduloDetalle[i].cantidadUnidades
                };
                l_HistorialCliente_array.push(oHistorialCliente);

            }
        })
    }
    return l_HistorialCliente_array;
}
export function add_months(dt, n) {
    return new Date(dt.setMonth(dt.getMonth() + n));
}
export function ActualizarPedidosHistorial_borrarViejosRegistros() {

    var fechaActual = new Date(Date.now());
    var fechaActualMenos6meses = add_months(fechaActual, -6);
    //var fechaActualMenos4meses = add_months(fechaActual, -4);
    //var fechaActualMenos5meses = add_months(fechaActual, -5);
    var l_pedidosHistorial = window.localStorage.getItem('l_pedidosHistorial') || '';
    if (l_pedidosHistorial !== null && l_pedidosHistorial !== undefined && l_pedidosHistorial !== '') {
        l_pedidosHistorial = JSON.parse(l_pedidosHistorial);
    }
    if (!Array.isArray(l_pedidosHistorial)) {
        l_pedidosHistorial = [];
    }
    /*l_pedidosHistorial.forEach(x => {
        x.fecha = fechaActualMenos6meses;  
if ( x.fecha < fechaActualMenos4meses.getTime()) {
      // x.fecha = fechaActualMenos6meses;
    }else{
        x.fecha = fechaActualMenos6meses;  
    }
    })
    localStorage.setItem('l_pedidosHistorial', JSON.stringify(l_pedidosHistorial));*/

    var l_pedidosHistorial_new = l_pedidosHistorial.filter(element => element.fecha >= fechaActualMenos6meses.getTime());

    localStorage.setItem('l_pedidosHistorial', JSON.stringify(l_pedidosHistorial_new));
}