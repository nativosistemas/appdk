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
export function getModulo_actualizado(pModulo) {
    var l_modulos = localStorage.getItem('l_modulos') || '';
    if (l_modulos !== '') {
        l_modulos = JSON.parse(l_modulos);
    }
    if (!Array.isArray(l_modulos)) {
        l_modulos = [];
    }
    var modulo = l_modulos.find(element => String(pModulo.id) === String(element.id));
    if (modulo) {
        return modulo;
    } else {
        return null;
    }
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
    var precio = 0;// pModuloDetalle.objProducto.pro_preciofarmacia;
    if (pFarmacia !== undefined && pFarmacia !== null && pFarmacia !== '')//
        return ObtenerPrecioFinal(pModuloDetalle.objProducto.pro_preciofarmacia, pFarmacia.objCliente, pModuloDetalle);
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
    return resultado;
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
                l_pedidos_farmacia.push(x);
            }
        });
        l_pedidos_farmacia.forEach(elementPedidos_farmacia => {
            let montoTotal_detalle = 0;
            let montoTotalDescuento_detalle = 0;
            elementPedidos_farmacia.modulo.moduloDetalle.forEach(element => {
                var cantidadUnidades = element.cantidadUnidades;
                if (cantidadUnidades == 0) {
                    cantidadUnidades = 1;
                }
                if (element.objProducto.pro_preciofarmacia > 0) {
                    montoTotal_detalle += getPrecioModuloHabitual(element, farmaciaCurrent) * cantidadUnidades;
                }
                if (element.precioDescuento > 0) {
                    montoTotalDescuento_detalle += getPrecioModuloDesc(element, farmaciaCurrent) * cantidadUnidades;
                }
            });

            if (elementPedidos_farmacia.cantidad > 0) {
                var montoTotal_aux = montoTotal_detalle * elementPedidos_farmacia.cantidad;
                montoTotal += montoTotal_aux;
                ahorroTotal += montoTotal_aux - (montoTotalDescuento_detalle * elementPedidos_farmacia.cantidad);
            }
        });
    }
    var result = {
        ahorroTotal: ahorroTotal,
        montoTotal: montoTotal
    };
    return result;
}
