import React, { Component } from 'react';
import Resultado from './Resultado'
import Nav from './Nav'

class Promociones extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modulosOriginal:[],// [{ "id": 1, "nombre_laboratorio": "ROEMMERS", "descripcion": null, "cantidadMinimos": 2, "idLaboratorio": 1, "laboratorio": null, "moduloDetalle": [{ "objProducto": { "pro_codigo": "A000013", "pro_nombre": "COLBERT US DEO AER X 250 ML", "pro_precio": 0.00, "pro_preciofarmacia": 170.37, "pro_ofeunidades": 0, "pro_ofeporcentaje": 0, "pro_neto": true, "pro_codtpopro": "P", "pro_descuentoweb": 0.00, "pro_laboratorio": "CANNON", "pro_monodroga": null, "pro_codtpovta": null, "pro_codigobarra": "7791600087234", "pro_troquel": null, "pro_codigoalfabeta": null, "precioFinal": 0, "precioConDescuentoOferta": 0, "pro_isTrazable": false, "pro_isCadenaFrio": false, "pro_canmaxima": null, "pro_entransfer": false, "pro_vtasolotransfer": false, "pro_acuerdo": 0, "pri_nombreArchivo": null, "pro_NoTransfersEnClientesPerf": false, "pro_AceptaVencidos": false, "isMostrarTransfersEnClientesPerf": true, "isPermitirPedirProducto": true, "pro_Familia": null, "pro_PackDeVenta": null, "pro_PorcARestarDelDtoDeCliente": 0.00, "pro_PrecioBase": 170.37, "pro_ProductoRequiereLote": false }, "id": 1, "idModulo": 1, "orden": 1, "producto": "COLBERT US DEO AER X 250 ML", "descripcion": "50%\r\n", "precio": 159.24, "precioDescuento": 150.24, "cantidadUnidades": 2, "isTieneEnCuentaDescuentoCliente": false }, { "objProducto": { "pro_codigo": "A000028", "pro_nombre": "MB FITME BASE Nº 118 X 30ML", "pro_precio": 0.00, "pro_preciofarmacia": 519.32, "pro_ofeunidades": 0, "pro_ofeporcentaje": 0, "pro_neto": true, "pro_codtpopro": "P", "pro_descuentoweb": 0.00, "pro_laboratorio": "LA ROCHE POSAY", "pro_monodroga": null, "pro_codtpovta": null, "pro_codigobarra": "3600531369392", "pro_troquel": null, "pro_codigoalfabeta": null, "precioFinal": 0, "precioConDescuentoOferta": 0, "pro_isTrazable": false, "pro_isCadenaFrio": false, "pro_canmaxima": null, "pro_entransfer": false, "pro_vtasolotransfer": false, "pro_acuerdo": 0, "pri_nombreArchivo": null, "pro_NoTransfersEnClientesPerf": false, "pro_AceptaVencidos": false, "isMostrarTransfersEnClientesPerf": true, "isPermitirPedirProducto": true, "pro_Familia": null, "pro_PackDeVenta": null, "pro_PorcARestarDelDtoDeCliente": 0.00, "pro_PrecioBase": 519.32, "pro_ProductoRequiereLote": false }, "id": 2, "idModulo": 1, "orden": 2, "producto": "MB FITME BASE Nº 118 X 30ML", "descripcion": "3 x 1\r\n", "precio": 423.45, "precioDescuento": 403, "cantidadUnidades": 1, "isTieneEnCuentaDescuentoCliente": false }] }, { "id": 2, "nombre_laboratorio": "GENOMMA", "descripcion": null, "cantidadMinimos": 1, "idLaboratorio": 2, "laboratorio": null, "moduloDetalle": [{ "objProducto": { "pro_codigo": "A053096", "pro_nombre": "ARCELIGASOL CAP BLANDAS X 60", "pro_precio": 1099.90, "pro_preciofarmacia": 627.40, "pro_ofeunidades": 0, "pro_ofeporcentaje": 0, "pro_neto": true, "pro_codtpopro": "M", "pro_descuentoweb": 0.00, "pro_laboratorio": "GEZZI", "pro_monodroga": "GARCINIA CAMBOGIA", "pro_codtpovta": null, "pro_codigobarra": "7792369337141", "pro_troquel": null, "pro_codigoalfabeta": "54480", "precioFinal": 0, "precioConDescuentoOferta": 0, "pro_isTrazable": false, "pro_isCadenaFrio": false, "pro_canmaxima": null, "pro_entransfer": false, "pro_vtasolotransfer": false, "pro_acuerdo": 0, "pri_nombreArchivo": null, "pro_NoTransfersEnClientesPerf": false, "pro_AceptaVencidos": false, "isMostrarTransfersEnClientesPerf": true, "isPermitirPedirProducto": true, "pro_Familia": null, "pro_PackDeVenta": null, "pro_PorcARestarDelDtoDeCliente": 0.00, "pro_PrecioBase": 627.40, "pro_ProductoRequiereLote": false }, "id": 10, "idModulo": 2, "orden": 1, "producto": "ARCELIGASOL CAP BLANDAS X 60", "descripcion": "50%\r\n", "precio": 1504, "precioDescuento": 1400, "cantidadUnidades": 0, "isTieneEnCuentaDescuentoCliente": false }, { "objProducto": { "pro_codigo": "A053152", "pro_nombre": "GOICOECHEA CR ULTRA NUTRITIVA X 400 ML", "pro_precio": 502.43, "pro_preciofarmacia": 302.29, "pro_ofeunidades": 0, "pro_ofeporcentaje": 0, "pro_neto": true, "pro_codtpopro": "P", "pro_descuentoweb": 0.00, "pro_laboratorio": "GENOMMA", "pro_monodroga": "CASTAÑA DE INDIA", "pro_codtpovta": null, "pro_codigobarra": "7798140251583", "pro_troquel": null, "pro_codigoalfabeta": "41385", "precioFinal": 0, "precioConDescuentoOferta": 0, "pro_isTrazable": false, "pro_isCadenaFrio": false, "pro_canmaxima": null, "pro_entransfer": false, "pro_vtasolotransfer": false, "pro_acuerdo": 0, "pri_nombreArchivo": null, "pro_NoTransfersEnClientesPerf": false, "pro_AceptaVencidos": false, "isMostrarTransfersEnClientesPerf": true, "isPermitirPedirProducto": true, "pro_Familia": null, "pro_PackDeVenta": null, "pro_PorcARestarDelDtoDeCliente": 0.00, "pro_PrecioBase": 302.29, "pro_ProductoRequiereLote": false }, "id": 11, "idModulo": 2, "orden": 2, "producto": "GOICOECHEA CR ULTRA NUTRITIVA X 400 ML", "descripcion": "2 x 1\r\n", "precio": 403, "precioDescuento": 400, "cantidadUnidades": 0, "isTieneEnCuentaDescuentoCliente": false }, { "objProducto": { "pro_codigo": "A051302", "pro_nombre": "LEVO TIROXINA 112 MCG CPR X 50", "pro_precio": 1027.07, "pro_preciofarmacia": 823.92, "pro_ofeunidades": 0, "pro_ofeporcentaje": 0, "pro_neto": false, "pro_codtpopro": "M", "pro_descuentoweb": 0.00, "pro_laboratorio": "GLAXOSMITHKLINE", "pro_monodroga": "LEVOTIROXINA", "pro_codtpovta": null, "pro_codigobarra": "7796930001875", "pro_troquel": null, "pro_codigoalfabeta": "26916", "precioFinal": 0, "precioConDescuentoOferta": 0, "pro_isTrazable": false, "pro_isCadenaFrio": false, "pro_canmaxima": null, "pro_entransfer": false, "pro_vtasolotransfer": false, "pro_acuerdo": 0, "pri_nombreArchivo": null, "pro_NoTransfersEnClientesPerf": false, "pro_AceptaVencidos": false, "isMostrarTransfersEnClientesPerf": true, "isPermitirPedirProducto": true, "pro_Familia": null, "pro_PackDeVenta": null, "pro_PorcARestarDelDtoDeCliente": 0.00, "pro_PrecioBase": 1027.07, "pro_ProductoRequiereLote": false }, "id": 13, "idModulo": 2, "orden": 3, "producto": "LEVO TIROXINA 112 MCG CPR X 50", "descripcion": "5 x 1\r\n", "precio": 605, "precioDescuento": 601, "cantidadUnidades": 0, "isTieneEnCuentaDescuentoCliente": false }] }, { "id": 3, "nombre_laboratorio": "BAYER", "descripcion": null, "cantidadMinimos": 5, "idLaboratorio": 7, "laboratorio": null, "moduloDetalle": [{ "objProducto": { "pro_codigo": "A049166", "pro_nombre": "DOVE DEO AER ANT. RITUAL ENERG X 150ML", "pro_precio": 0.00, "pro_preciofarmacia": 125.15, "pro_ofeunidades": 0, "pro_ofeporcentaje": 0, "pro_neto": true, "pro_codtpopro": "P", "pro_descuentoweb": 0.00, "pro_laboratorio": "UNILEVER DE ARGENTINA", "pro_monodroga": null, "pro_codtpovta": null, "pro_codigobarra": "7791293038155", "pro_troquel": null, "pro_codigoalfabeta": null, "precioFinal": 0, "precioConDescuentoOferta": 0, "pro_isTrazable": false, "pro_isCadenaFrio": false, "pro_canmaxima": null, "pro_entransfer": false, "pro_vtasolotransfer": false, "pro_acuerdo": 0, "pri_nombreArchivo": null, "pro_NoTransfersEnClientesPerf": false, "pro_AceptaVencidos": false, "isMostrarTransfersEnClientesPerf": true, "isPermitirPedirProducto": true, "pro_Familia": null, "pro_PackDeVenta": null, "pro_PorcARestarDelDtoDeCliente": 0.00, "pro_PrecioBase": 125.15, "pro_ProductoRequiereLote": false }, "id": 6, "idModulo": 3, "orden": 1, "producto": "DOVE DEO AER ANT. RITUAL ENERG X 150ML", "descripcion": "50%\r\n", "precio": 271.61, "precioDescuento": 270, "cantidadUnidades": 1, "isTieneEnCuentaDescuentoCliente": false }, { "objProducto": { "pro_codigo": "A051974", "pro_nombre": "CARVEDILOL RICHET 12,5 MG CPR X 28", "pro_precio": 532.87, "pro_preciofarmacia": 427.47, "pro_ofeunidades": 0, "pro_ofeporcentaje": 0, "pro_neto": false, "pro_codtpopro": "M", "pro_descuentoweb": 0.00, "pro_laboratorio": "RICHET", "pro_monodroga": "CARVEDILOL", "pro_codtpovta": null, "pro_codigobarra": "7795336292061", "pro_troquel": null, "pro_codigoalfabeta": "39949", "precioFinal": 0, "precioConDescuentoOferta": 0, "pro_isTrazable": false, "pro_isCadenaFrio": false, "pro_canmaxima": null, "pro_entransfer": false, "pro_vtasolotransfer": false, "pro_acuerdo": 0, "pri_nombreArchivo": null, "pro_NoTransfersEnClientesPerf": false, "pro_AceptaVencidos": false, "isMostrarTransfersEnClientesPerf": true, "isPermitirPedirProducto": true, "pro_Familia": null, "pro_PackDeVenta": null, "pro_PorcARestarDelDtoDeCliente": 0.00, "pro_PrecioBase": 532.87, "pro_ProductoRequiereLote": false }, "id": 7, "idModulo": 3, "orden": 2, "producto": "CARVEDILOL RICHET 12,5 MG CPR X 28", "descripcion": "2 x 1\r\n", "precio": 741.61, "precioDescuento": 640.25, "cantidadUnidades": 1, "isTieneEnCuentaDescuentoCliente": false }, { "objProducto": { "pro_codigo": "A050234", "pro_nombre": "TRANQUINAL 2 MG CPR X 60", "pro_precio": 1316.87, "pro_preciofarmacia": 1056.39, "pro_ofeunidades": 0, "pro_ofeporcentaje": 0, "pro_neto": false, "pro_codtpopro": "M", "pro_descuentoweb": 0.00, "pro_laboratorio": "BAGO", "pro_monodroga": "ALPRAZOLAM", "pro_codtpovta": null, "pro_codigobarra": "7790375003388", "pro_troquel": null, "pro_codigoalfabeta": "49839", "precioFinal": 0, "precioConDescuentoOferta": 0, "pro_isTrazable": false, "pro_isCadenaFrio": false, "pro_canmaxima": null, "pro_entransfer": false, "pro_vtasolotransfer": false, "pro_acuerdo": 0, "pri_nombreArchivo": null, "pro_NoTransfersEnClientesPerf": false, "pro_AceptaVencidos": false, "isMostrarTransfersEnClientesPerf": true, "isPermitirPedirProducto": true, "pro_Familia": null, "pro_PackDeVenta": null, "pro_PorcARestarDelDtoDeCliente": 0.00, "pro_PrecioBase": 1316.87, "pro_ProductoRequiereLote": false }, "id": 8, "idModulo": 3, "orden": 3, "producto": "TRANQUINAL 2 MG CPR X 60", "descripcion": "2 x 1\r\n", "precio": 321.61, "precioDescuento": 212.61, "cantidadUnidades": 1, "isTieneEnCuentaDescuentoCliente": false }, { "objProducto": { "pro_codigo": null, "pro_nombre": null, "pro_precio": 0, "pro_preciofarmacia": 0, "pro_ofeunidades": 0, "pro_ofeporcentaje": 0, "pro_neto": false, "pro_codtpopro": null, "pro_descuentoweb": 0, "pro_laboratorio": null, "pro_monodroga": null, "pro_codtpovta": null, "pro_codigobarra": null, "pro_troquel": null, "pro_codigoalfabeta": null, "precioFinal": 0, "precioConDescuentoOferta": 0, "pro_isTrazable": false, "pro_isCadenaFrio": false, "pro_canmaxima": null, "pro_entransfer": false, "pro_vtasolotransfer": false, "pro_acuerdo": 0, "pri_nombreArchivo": null, "pro_NoTransfersEnClientesPerf": false, "pro_AceptaVencidos": false, "isMostrarTransfersEnClientesPerf": true, "isPermitirPedirProducto": true, "pro_Familia": null, "pro_PackDeVenta": null, "pro_PorcARestarDelDtoDeCliente": 0, "pro_PrecioBase": 0, "pro_ProductoRequiereLote": false }, "id": 12, "idModulo": 3, "orden": 4, "producto": null, "descripcion": "2 x 1\r\n", "precio": 270050, "precioDescuento": 200050, "cantidadUnidades": 0, "isTieneEnCuentaDescuentoCliente": false }, { "objProducto": { "pro_codigo": "A050581", "pro_nombre": "DENTILAC PASTA S/MENTA X 20 GR", "pro_precio": 178.92, "pro_preciofarmacia": 118.30, "pro_ofeunidades": 0, "pro_ofeporcentaje": 0, "pro_neto": true, "pro_codtpopro": "M", "pro_descuentoweb": 0.00, "pro_laboratorio": "BERNABO", "pro_monodroga": null, "pro_codtpovta": null, "pro_codigobarra": "7792175008174", "pro_troquel": null, "pro_codigoalfabeta": "37132", "precioFinal": 0, "precioConDescuentoOferta": 0, "pro_isTrazable": false, "pro_isCadenaFrio": false, "pro_canmaxima": null, "pro_entransfer": false, "pro_vtasolotransfer": false, "pro_acuerdo": 0, "pri_nombreArchivo": null, "pro_NoTransfersEnClientesPerf": false, "pro_AceptaVencidos": false, "isMostrarTransfersEnClientesPerf": true, "isPermitirPedirProducto": true, "pro_Familia": null, "pro_PackDeVenta": null, "pro_PorcARestarDelDtoDeCliente": 0.00, "pro_PrecioBase": 118.30, "pro_ProductoRequiereLote": false }, "id": 14, "idModulo": 3, "orden": 6, "producto": "DENTILAC PASTA S/MENTA X 20 GR", "descripcion": "2 x 1\r\n", "precio": 7061, "precioDescuento": 3, "cantidadUnidades": 23, "isTieneEnCuentaDescuentoCliente": false }, { "objProducto": { "pro_codigo": "A999668", "pro_nombre": "NEUTROGENA BLUE LINE TOAL DESMAQ X 25", "pro_precio": 0.00, "pro_preciofarmacia": 161.89, "pro_ofeunidades": 0, "pro_ofeporcentaje": 0, "pro_neto": true, "pro_codtpopro": "P", "pro_descuentoweb": 0.00, "pro_laboratorio": "JOHNSON Y JOHNSON", "pro_monodroga": null, "pro_codtpovta": null, "pro_codigobarra": "70501051054", "pro_troquel": null, "pro_codigoalfabeta": null, "precioFinal": 0, "precioConDescuentoOferta": 0, "pro_isTrazable": false, "pro_isCadenaFrio": false, "pro_canmaxima": null, "pro_entransfer": false, "pro_vtasolotransfer": false, "pro_acuerdo": 0, "pri_nombreArchivo": null, "pro_NoTransfersEnClientesPerf": false, "pro_AceptaVencidos": false, "isMostrarTransfersEnClientesPerf": true, "isPermitirPedirProducto": true, "pro_Familia": null, "pro_PackDeVenta": null, "pro_PorcARestarDelDtoDeCliente": 0.00, "pro_PrecioBase": 161.89, "pro_ProductoRequiereLote": false }, "id": 15, "idModulo": 3, "orden": 5, "producto": "NEUTROGENA BLUE LINE TOAL DESMAQ X 25", "descripcion": "50%\r\n", "precio": 2000, "precioDescuento": 1, "cantidadUnidades": 0, "isTieneEnCuentaDescuentoCliente": false }, { "objProducto": { "pro_codigo": "A998937", "pro_nombre": "FRUCTIS OIL REPAIR L COCO P-PEINAR X300GR", "pro_precio": 0.00, "pro_preciofarmacia": 218.23, "pro_ofeunidades": 0, "pro_ofeporcentaje": 0, "pro_neto": true, "pro_codtpopro": "P", "pro_descuentoweb": 0.00, "pro_laboratorio": "LA ROCHE POSAY", "pro_monodroga": null, "pro_codtpovta": null, "pro_codigobarra": "7509552816297", "pro_troquel": null, "pro_codigoalfabeta": null, "precioFinal": 0, "precioConDescuentoOferta": 0, "pro_isTrazable": false, "pro_isCadenaFrio": false, "pro_canmaxima": null, "pro_entransfer": false, "pro_vtasolotransfer": false, "pro_acuerdo": 0, "pri_nombreArchivo": null, "pro_NoTransfersEnClientesPerf": false, "pro_AceptaVencidos": false, "isMostrarTransfersEnClientesPerf": true, "isPermitirPedirProducto": true, "pro_Familia": null, "pro_PackDeVenta": null, "pro_PorcARestarDelDtoDeCliente": 0.00, "pro_PrecioBase": 218.23, "pro_ProductoRequiereLote": false }, "id": 17, "idModulo": 3, "orden": 8, "producto": "FRUCTIS OIL REPAIR L COCO P-PEINAR X300GR", "descripcion": "70%\r\n", "precio": 261, "precioDescuento": 1, "cantidadUnidades": 0, "isTieneEnCuentaDescuentoCliente": false }] }, { "id": 4, "nombre_laboratorio": "BAYER", "descripcion": null, "cantidadMinimos": 2, "idLaboratorio": 7, "laboratorio": null, "moduloDetalle": [{ "objProducto": { "pro_codigo": "A048458", "pro_nombre": "CONTROL K CAP X 60", "pro_precio": 3519.55, "pro_preciofarmacia": 2823.38, "pro_ofeunidades": 0, "pro_ofeporcentaje": 0, "pro_neto": false, "pro_codtpopro": "M", "pro_descuentoweb": 0.00, "pro_laboratorio": "LABORATORIO ELEA  PHOENIX", "pro_monodroga": "POTASIO CLORURO", "pro_codtpovta": null, "pro_codigobarra": "7791848271914", "pro_troquel": null, "pro_codigoalfabeta": "47541", "precioFinal": 0, "precioConDescuentoOferta": 0, "pro_isTrazable": false, "pro_isCadenaFrio": false, "pro_canmaxima": null, "pro_entransfer": false, "pro_vtasolotransfer": false, "pro_acuerdo": 0, "pri_nombreArchivo": null, "pro_NoTransfersEnClientesPerf": false, "pro_AceptaVencidos": false, "isMostrarTransfersEnClientesPerf": true, "isPermitirPedirProducto": true, "pro_Familia": null, "pro_PackDeVenta": null, "pro_PorcARestarDelDtoDeCliente": 0.00, "pro_PrecioBase": 3519.55, "pro_ProductoRequiereLote": false }, "id": 3, "idModulo": 4, "orden": 1, "producto": "CONTROL K CAP X 60", "descripcion": "50%\r\n", "precio": 2771.61, "precioDescuento": 2700.5, "cantidadUnidades": 1, "isTieneEnCuentaDescuentoCliente": false }, { "objProducto": { "pro_codigo": null, "pro_nombre": null, "pro_precio": 0, "pro_preciofarmacia": 0, "pro_ofeunidades": 0, "pro_ofeporcentaje": 0, "pro_neto": false, "pro_codtpopro": null, "pro_descuentoweb": 0, "pro_laboratorio": null, "pro_monodroga": null, "pro_codtpovta": null, "pro_codigobarra": null, "pro_troquel": null, "pro_codigoalfabeta": null, "precioFinal": 0, "precioConDescuentoOferta": 0, "pro_isTrazable": false, "pro_isCadenaFrio": false, "pro_canmaxima": null, "pro_entransfer": false, "pro_vtasolotransfer": false, "pro_acuerdo": 0, "pri_nombreArchivo": null, "pro_NoTransfersEnClientesPerf": false, "pro_AceptaVencidos": false, "isMostrarTransfersEnClientesPerf": true, "isPermitirPedirProducto": true, "pro_Familia": null, "pro_PackDeVenta": null, "pro_PorcARestarDelDtoDeCliente": 0, "pro_PrecioBase": 0, "pro_ProductoRequiereLote": false }, "id": 4, "idModulo": 4, "orden": 2, "producto": null, "descripcion": "2 x 1\r\n", "precio": 71.61, "precioDescuento": 60.25, "cantidadUnidades": 0, "isTieneEnCuentaDescuentoCliente": false }, { "objProducto": { "pro_codigo": "A048890", "pro_nombre": "AXE B.SPLASH DARK TEMPT AER X96GR", "pro_precio": 0.00, "pro_preciofarmacia": 108.34, "pro_ofeunidades": 0, "pro_ofeporcentaje": 0, "pro_neto": true, "pro_codtpopro": "P", "pro_descuentoweb": 0.00, "pro_laboratorio": "UNILEVER DE ARGENTINA", "pro_monodroga": null, "pro_codtpovta": null, "pro_codigobarra": "7791293025797", "pro_troquel": null, "pro_codigoalfabeta": null, "precioFinal": 0, "precioConDescuentoOferta": 0, "pro_isTrazable": false, "pro_isCadenaFrio": false, "pro_canmaxima": null, "pro_entransfer": false, "pro_vtasolotransfer": false, "pro_acuerdo": 0, "pri_nombreArchivo": null, "pro_NoTransfersEnClientesPerf": false, "pro_AceptaVencidos": false, "isMostrarTransfersEnClientesPerf": true, "isPermitirPedirProducto": true, "pro_Familia": null, "pro_PackDeVenta": null, "pro_PorcARestarDelDtoDeCliente": 0.00, "pro_PrecioBase": 108.34, "pro_ProductoRequiereLote": false }, "id": 5, "idModulo": 4, "orden": 3, "producto": "AXE B.SPLASH DARK TEMPT AER X96GR", "descripcion": "4 x 1\r\n", "precio": 478.61, "precioDescuento": 470.61, "cantidadUnidades": 3, "isTieneEnCuentaDescuentoCliente": false }] }],
      modulos: [],
      farmacias: [],//[{ "id": 289, "nombre": "AGUIRRE LAURA MARIA", "direccion": "AV. FILIPPINI 1872" }, { "id": 5688, "nombre": "AIRES DE LORENZETTI MAURICIO", "direccion": "BUENOS AIRES 2296" }, { "id": 7620, "nombre": "ALEMANA DE LOPERGOLO V. Y CORDEIRO M. S.", "direccion": "RIOBAMBA 1814" }, { "id": 1050, "nombre": "ALESSO ANDREA", "direccion": "SARMIENTO 1296" }, { "id": 5823, "nombre": "ALQUIMIA DE DANIEL MARTIN", "direccion": "CORRIENTES 2670" }, { "id": 2733, "nombre": "AMEN FARMACIA MUTUAL", "direccion": "CORRIENTES 370" }, { "id": 4294, "nombre": "APOTHEKA SRL", "direccion": "SAN JERONIMO 248 LOCAL 4" }, { "id": 1255, "nombre": "ARGENTA ETEL", "direccion": "SAN MARTIN 4515" }, { "id": 2777, "nombre": "ARGUTTI MIRTHA", "direccion": "JUAN B JUSTO 371" }, { "id": 1256, "nombre": "ASOC ESPAÑOLA ROSARIO", "direccion": "ENTRE RIOS 701" }, { "id": 7619, "nombre": "ASOC MUTUAL 12 DE MAYO - ROSARIO", "direccion": "MAIPU 1157" }],
      farmaciaSeleccionada: '',
      filtrado: '',
      totalAhorroGeneral_promociones: 0,
      montoTotalGeneral_promociones: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.elementResultadoModulo = React.createRef();
    this.elementNav = React.createRef();
    this.url = 'https://api.kellerhoff.com.ar/api/'
    //this.url = 'https://localhost:5001/api/'
  }

  componentWillMount() {
    //localStorage.setItem('l_farmacias', this.state.farmacias);
    //localStorage.setItem('l_modulos', this.state.modulosOriginal);
    //this.filtrarModulosApp('');
    this.cargarDatosInicio_DesdeLocalStorage();
    if (navigator.onLine) {
      this.cargarDatosInicio_DesdeApi();
    }
  }
  cargarDatosInicio_DesdeApi = () => {
    fetch(this.url + 'farmacia?' + new URLSearchParams({
      ApNombre: 'Perez, Nestor'
    }))
      .then((response) => {
        return response.json()
      })
      .then((pFarmacias) => {
        localStorage.setItem('l_farmacias', JSON.stringify(pFarmacias));
      }).then(() => fetch(this.url + 'modulo')
        .then((response) => {
          return response.json()
        })
        .then((pModulos) => {
          localStorage.setItem('l_modulos', JSON.stringify(pModulos));
        }))//
      .then(() => { this.cargarDatosInicio_DesdeLocalStorage(); })
      .catch(error => {
        this.cargarDatosInicio_DesdeLocalStorage();
      });
  }
  cargarDatosInicio_DesdeLocalStorage = () => {
    var l_farmacias = localStorage.getItem('l_farmacias') || '';
    if (l_farmacias !== '') {

      l_farmacias = JSON.parse(l_farmacias);

    }
    if (!Array.isArray(l_farmacias)) {
      l_farmacias = [];
    }
    this.setState({ farmacias: l_farmacias });
    var l_modulos = localStorage.getItem('l_modulos') || '';
    if (l_modulos !== '') {

      l_modulos = JSON.parse(l_modulos);

    }
    if (!Array.isArray(l_modulos)) {
      l_modulos = [];
    }
    this.setState({ modulosOriginal: l_modulos }, () => {
      this.filtrarModulosApp('');
    })
  }
  handleChange(event) {
    let farma = this.state.farmacias.find(element => String(element.id) + " - " + element.nombre === String(event.target.value));
    this.setState({ farmaciaSeleccionada: farma }, () => {
      this.elementResultadoModulo.current.actualizarCantidadEnLosModulos();
    });
  }
  filtrarModulosApp = (pTexto) => {
    this.setState({
      filtrado: pTexto
    }, () => {
      if (this.state.filtrado === '') {
        this.setState({ modulos: this.state.modulosOriginal })

      } else {
        let modulosFiltrado = this.state.modulosOriginal.filter(m =>
          m.moduloDetalle.find(e => { return String(e.producto).toUpperCase().includes(String(this.state.filtrado).toUpperCase()) }) !== undefined
        );
        this.setState({ modulos: modulosFiltrado })
      }
    });
  }
  refreshMontoAhorroGeneral_promociones = () => {
    this.setState({ totalAhorroGeneral_promociones: this.elementResultadoModulo.current.state.totalAhorroGeneral }, this.setState({ montoTotalGeneral_promociones: this.elementResultadoModulo.current.state.montoTotalGeneral }))
  }
  render() {
    return (
      <>
        <div className="app container-fluid">
          <div className="alert alert-primary text-center  text-uppercase" ><h2>Pedidos</h2></div>
          <Nav ref={this.elementNav} handleChange={this.handleChange} filtrarModulosApp={this.filtrarModulosApp} getTotalAhorroGeneral={this.state.totalAhorroGeneral_promociones} getMontoTotalGeneral={this.state.montoTotalGeneral_promociones} farmacias={this.state.farmacias} farmacia={this.state.farmaciaSeleccionada} ></Nav>
          <Resultado ref={this.elementResultadoModulo} modulos={this.state.modulos} farmacia={this.state.farmaciaSeleccionada} refreshMontoAhorroGeneral={this.refreshMontoAhorroGeneral_promociones} ></Resultado>
        </div>
      </>
    )
  };
}

export default Promociones;
