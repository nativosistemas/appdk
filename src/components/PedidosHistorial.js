import React, { Component } from 'react';
import Resultado from './Resultado'
import Nav from './Nav'

class PedidosHistorial extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modulosOriginal: [],// [{ "id": 75250, "nombre": "TRANSFER ONE MILLON PRIVE LADY", "descripcion": " PLAZO HABITUAL - Dto. Habitual - Combo de Productos - Prod. Bonificados: 1 u. de PROBADOR P.RABANNE LADY MILLON PRIVE", "moduloDetalle": [{ "id": "75250_A893356", "idModulo": 75250, "producto": "P.RABANNE LADY MILLION PRIVE EDP X 30ML", "descripcion": "Precio Habitual", "precio": 3330.58, "precioDescuento": 3330.58 }, { "id": "75250_A202354", "idModulo": 75250, "producto": "P.RABANNE LADY MILLION PRIVE EDP X 50ML", "descripcion": "Precio Habitual", "precio": 4303.11, "precioDescuento": 4303.11 }, { "id": "75250_A903201", "idModulo": 75250, "producto": "P.RABANNE LADY MILLION PRIVE EDP X 80ML", "descripcion": "Precio Habitual", "precio": 5245.66, "precioDescuento": 5245.66 }] }, { "id": 89763, "nombre": "TRANSFER PROMO KOSIUKO SHINE NUEVO", "descripcion": " PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de PROBADOR KOSIUKO SHINE", "moduloDetalle": [{ "id": "89763_A152153", "idModulo": 89763, "producto": "KOSIUKO SHINE EDP X 100 ML", "descripcion": "Precio Habitual - Prod. Bonificados:1 u. de PROBADOR KOSIUKO SHINE", "precio": 1107.02, "precioDescuento": 1107.02 }] }, { "id": 93736, "nombre": "TRANSFER PUIG BLUE SEDUCTION FOR WOMEN", "descripcion": " PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de PROBADOR A.BANDERA BLUE SEDUCTION FOR WOM", "moduloDetalle": [{ "id": "93736_A172756", "idModulo": 93736, "producto": "BLUE SEDUC F-WOMEN EDT X 50 ML", "descripcion": "Precio Habitual", "precio": 971.2, "precioDescuento": 971.2 }, { "id": "93736_A468314", "idModulo": 93736, "producto": "BLUE SEDUC F-WOMEN EDT X 80 ML", "descripcion": "Precio Habitual", "precio": 1300.92, "precioDescuento": 1300.92 }] }, { "id": 114876, "nombre": "TRANSFER PUIG BENETTON ROSE", "descripcion": " PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de PROBADOR BENETTON COLORS WOMAN ROSE", "moduloDetalle": [{ "id": "114876_A513585", "idModulo": 114876, "producto": "BENETTON COLORS WOMAN ROSE EDT X 50 ML", "descripcion": "Precio Habitual", "precio": 1076.11, "precioDescuento": 1076.11 }, { "id": "114876_A024106", "idModulo": 114876, "producto": "BENETTON COLORS WOMAN ROSE EDT X 80 ML", "descripcion": "Precio Habitual", "precio": 1390.85, "precioDescuento": 1390.85 }] }, { "id": 120071, "nombre": "TRANSFER PAÑALES PAMI", "descripcion": " VTO 60 días", "moduloDetalle": [{ "id": "120071_A985643", "idModulo": 120071, "producto": "PAÑAL PAMI AD MOD 10 (EX 12)", "descripcion": "Precio Habitual", "precio": 2238.29, "precioDescuento": 2238.29 }, { "id": "120071_A392078", "idModulo": 120071, "producto": "PAÑAL PAMI AD MOD 5", "descripcion": "Precio Habitual", "precio": 735.76, "precioDescuento": 735.76 }, { "id": "120071_A456308", "idModulo": 120071, "producto": "PAÑAL PAMI AD MOD 6 (EX 8)", "descripcion": "Precio Habitual", "precio": 1263.14, "precioDescuento": 1263.14 }, { "id": "120071_A826326", "idModulo": 120071, "producto": "PAÑAL PAMI AD MOD 7 (EX 9)", "descripcion": "Precio Habitual", "precio": 1394.24, "precioDescuento": 1394.24 }, { "id": "120071_A323492", "idModulo": 120071, "producto": "PAÑAL PAMI AD MOD 8 (EX 10)", "descripcion": "Precio Habitual", "precio": 2091.36, "precioDescuento": 2091.36 }] }, { "id": 122713, "nombre": "TRANSFER PUIG RAPSODIA PROMO", "descripcion": " PLAZO HABITUAL - Dto. Habitual", "moduloDetalle": [{ "id": "122713_A455492", "idModulo": 122713, "producto": "RAPSODIA INDIE EDP X 100 ML", "descripcion": "Precio Habitual - Prod. Bonificados:1 u. de PROBADOR RAPSODIA INDIE", "precio": 1795.51, "precioDescuento": 1795.51 }] }, { "id": 122889, "nombre": "TRANSFER PADOC BOOS PROMO WOMAN C/PROB BONIF", "descripcion": " PLAZO HABITUAL - Dto. Habitual", "moduloDetalle": [{ "id": "122889_A776702", "idModulo": 122889, "producto": "BOOS FOREVER F-WOM EDP X 100 ML", "descripcion": "Precio Habitual - Prod. Bonificados:1 u. de PROBADOR BOOS FOREVER EDP X100ML", "precio": 965.32, "precioDescuento": 965.32 }, { "id": "122889_A400484", "idModulo": 122889, "producto": "BOOS INTENSE LUMIERE WOM EDP X90ML", "descripcion": "Precio Habitual - Prod. Bonificados:1 u. de PROBADOR BOOS INTENSE LUMIERE", "precio": 1208.01, "precioDescuento": 1208.01 }, { "id": "122889_A185252", "idModulo": 122889, "producto": "BOOS INTENSE WOM EDP X90ML", "descripcion": "Precio Habitual - Prod. Bonificados:1 u. de PROBADOR BOOS INTENSE WOMAN EDP X 90", "precio": 1208.01, "precioDescuento": 1208.01 }, { "id": "122889_A381220", "idModulo": 122889, "producto": "BOOS MIDNIGHT F-WOM EDP X 100 ML", "descripcion": "Precio Habitual - Prod. Bonificados:1 u. de PROBADOR BOOS MIDNIGHT", "precio": 965.32, "precioDescuento": 965.32 }, { "id": "122889_A821550", "idModulo": 122889, "producto": "BOOS RAINBOW F-WOM EDP X 100ML", "descripcion": "Precio Habitual - Prod. Bonificados:1 u. de PROBADOR BOOS RAINBOW F-WOM", "precio": 965.32, "precioDescuento": 965.32 }] }, { "id": 128287, "nombre": "TRANSFER PUIG A BANDERAS POWER", "descripcion": " PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de PROBADOR A.BANDERA POWER OF SED X100", "moduloDetalle": [{ "id": "128287_A733610", "idModulo": 128287, "producto": "A. BANDERAS POWER OF SED EDT X 100 ML", "descripcion": "Precio Habitual", "precio": 1498.77, "precioDescuento": 1498.77 }, { "id": "128287_A678580", "idModulo": 128287, "producto": "A. BANDERAS POWER OF SED EDT X 50 ML", "descripcion": "Precio Habitual", "precio": 1088.1, "precioDescuento": 1088.1 }] }, { "id": 129466, "nombre": "TRANSFER SANACUTIS ORDEÑE PROMO", "descripcion": " PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de CREMA DE ORDEÑE SANACUTIS PROBADOR X 1", "moduloDetalle": [{ "id": "129466_A285120", "idModulo": 129466, "producto": "CREMA DE ORDEÑE SANACUTIS C/VALVU X 250 GR", "descripcion": "Precio Habitual", "precio": 271.05, "precioDescuento": 148.15 }, { "id": "129466_A868544", "idModulo": 129466, "producto": "CREMA DE ORDEÑE SANACUTIS X 250 GR", "descripcion": "Precio Habitual", "precio": 233.9, "precioDescuento": 127.84 }] }, { "id": 132436, "nombre": "TRANSFER PUIG LADY MILLON", "descripcion": " PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de PROBADOR P.RABANNE LADY MILLION", "moduloDetalle": [{ "id": "132436_A872719", "idModulo": 132436, "producto": "P.RABANNE LADY MILLION EDP X 50 ML", "descripcion": "Precio Habitual", "precio": 5415.53, "precioDescuento": 5415.53 }, { "id": "132436_A893356", "idModulo": 132436, "producto": "P.RABANNE LADY MILLION PRIVE EDP X 30ML", "descripcion": "Precio Habitual", "precio": 3330.58, "precioDescuento": 3330.58 }, { "id": "132436_A202354", "idModulo": 132436, "producto": "P.RABANNE LADY MILLION PRIVE EDP X 50ML", "descripcion": "Precio Habitual", "precio": 4303.11, "precioDescuento": 4303.11 }, { "id": "132436_A903201", "idModulo": 132436, "producto": "P.RABANNE LADY MILLION PRIVE EDP X 80ML", "descripcion": "Precio Habitual", "precio": 5245.66, "precioDescuento": 5245.66 }, { "id": "132436_A675583", "idModulo": 132436, "producto": "P.RABANNE LADY MILLON EDP X 30 ML", "descripcion": "Precio Habitual", "precio": 4196.53, "precioDescuento": 4196.53 }, { "id": "132436_A702081", "idModulo": 132436, "producto": "P.RABANNE LADY MILLON EDP X 80 ML", "descripcion": "Precio Habitual", "precio": 6587.88, "precioDescuento": 6587.88 }, { "id": "132436_A909101", "idModulo": 132436, "producto": "P.RABANNE LADY MILLON EDT X 80 ML", "descripcion": "Precio Habitual", "precio": 814.43, "precioDescuento": 814.43 }] }],
            modulos: [],//{ "id": 75250, "nombre": "TRANSFER ONE MILLON PRIVE LADY", "descripcion": " PLAZO HABITUAL - Dto. Habitual - Combo de Productos - Prod. Bonificados: 1 u. de PROBADOR P.RABANNE LADY MILLON PRIVE", "moduloDetalle": [{ "id": "75250_A893356", "idModulo": 75250, "producto": "P.RABANNE LADY MILLION PRIVE EDP X 30ML", "descripcion": "Precio Habitual", "precio": 3330.58, "precioDescuento": 3330.58 }, { "id": "75250_A202354", "idModulo": 75250, "producto": "P.RABANNE LADY MILLION PRIVE EDP X 50ML", "descripcion": "Precio Habitual", "precio": 4303.11, "precioDescuento": 4303.11 }, { "id": "75250_A903201", "idModulo": 75250, "producto": "P.RABANNE LADY MILLION PRIVE EDP X 80ML", "descripcion": "Precio Habitual", "precio": 5245.66, "precioDescuento": 5245.66 }] }, { "id": 89763, "nombre": "TRANSFER PROMO KOSIUKO SHINE NUEVO", "descripcion": " PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de PROBADOR KOSIUKO SHINE", "moduloDetalle": [{ "id": "89763_A152153", "idModulo": 89763, "producto": "KOSIUKO SHINE EDP X 100 ML", "descripcion": "Precio Habitual - Prod. Bonificados:1 u. de PROBADOR KOSIUKO SHINE", "precio": 1107.02, "precioDescuento": 1107.02 }] }, { "id": 93736, "nombre": "TRANSFER PUIG BLUE SEDUCTION FOR WOMEN", "descripcion": " PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de PROBADOR A.BANDERA BLUE SEDUCTION FOR WOM", "moduloDetalle": [{ "id": "93736_A172756", "idModulo": 93736, "producto": "BLUE SEDUC F-WOMEN EDT X 50 ML", "descripcion": "Precio Habitual", "precio": 971.2, "precioDescuento": 971.2 }, { "id": "93736_A468314", "idModulo": 93736, "producto": "BLUE SEDUC F-WOMEN EDT X 80 ML", "descripcion": "Precio Habitual", "precio": 1300.92, "precioDescuento": 1300.92 }] }, { "id": 114876, "nombre": "TRANSFER PUIG BENETTON ROSE", "descripcion": " PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de PROBADOR BENETTON COLORS WOMAN ROSE", "moduloDetalle": [{ "id": "114876_A513585", "idModulo": 114876, "producto": "BENETTON COLORS WOMAN ROSE EDT X 50 ML", "descripcion": "Precio Habitual", "precio": 1076.11, "precioDescuento": 1076.11 }, { "id": "114876_A024106", "idModulo": 114876, "producto": "BENETTON COLORS WOMAN ROSE EDT X 80 ML", "descripcion": "Precio Habitual", "precio": 1390.85, "precioDescuento": 1390.85 }] }, { "id": 120071, "nombre": "TRANSFER PAÑALES PAMI", "descripcion": " VTO 60 días", "moduloDetalle": [{ "id": "120071_A985643", "idModulo": 120071, "producto": "PAÑAL PAMI AD MOD 10 (EX 12)", "descripcion": "Precio Habitual", "precio": 2238.29, "precioDescuento": 2238.29 }, { "id": "120071_A392078", "idModulo": 120071, "producto": "PAÑAL PAMI AD MOD 5", "descripcion": "Precio Habitual", "precio": 735.76, "precioDescuento": 735.76 }, { "id": "120071_A456308", "idModulo": 120071, "producto": "PAÑAL PAMI AD MOD 6 (EX 8)", "descripcion": "Precio Habitual", "precio": 1263.14, "precioDescuento": 1263.14 }, { "id": "120071_A826326", "idModulo": 120071, "producto": "PAÑAL PAMI AD MOD 7 (EX 9)", "descripcion": "Precio Habitual", "precio": 1394.24, "precioDescuento": 1394.24 }, { "id": "120071_A323492", "idModulo": 120071, "producto": "PAÑAL PAMI AD MOD 8 (EX 10)", "descripcion": "Precio Habitual", "precio": 2091.36, "precioDescuento": 2091.36 }] }, { "id": 122713, "nombre": "TRANSFER PUIG RAPSODIA PROMO", "descripcion": " PLAZO HABITUAL - Dto. Habitual", "moduloDetalle": [{ "id": "122713_A455492", "idModulo": 122713, "producto": "RAPSODIA INDIE EDP X 100 ML", "descripcion": "Precio Habitual - Prod. Bonificados:1 u. de PROBADOR RAPSODIA INDIE", "precio": 1795.51, "precioDescuento": 1795.51 }] }, { "id": 122889, "nombre": "TRANSFER PADOC BOOS PROMO WOMAN C/PROB BONIF", "descripcion": " PLAZO HABITUAL - Dto. Habitual", "moduloDetalle": [{ "id": "122889_A776702", "idModulo": 122889, "producto": "BOOS FOREVER F-WOM EDP X 100 ML", "descripcion": "Precio Habitual - Prod. Bonificados:1 u. de PROBADOR BOOS FOREVER EDP X100ML", "precio": 965.32, "precioDescuento": 965.32 }, { "id": "122889_A400484", "idModulo": 122889, "producto": "BOOS INTENSE LUMIERE WOM EDP X90ML", "descripcion": "Precio Habitual - Prod. Bonificados:1 u. de PROBADOR BOOS INTENSE LUMIERE", "precio": 1208.01, "precioDescuento": 1208.01 }, { "id": "122889_A185252", "idModulo": 122889, "producto": "BOOS INTENSE WOM EDP X90ML", "descripcion": "Precio Habitual - Prod. Bonificados:1 u. de PROBADOR BOOS INTENSE WOMAN EDP X 90", "precio": 1208.01, "precioDescuento": 1208.01 }, { "id": "122889_A381220", "idModulo": 122889, "producto": "BOOS MIDNIGHT F-WOM EDP X 100 ML", "descripcion": "Precio Habitual - Prod. Bonificados:1 u. de PROBADOR BOOS MIDNIGHT", "precio": 965.32, "precioDescuento": 965.32 }, { "id": "122889_A821550", "idModulo": 122889, "producto": "BOOS RAINBOW F-WOM EDP X 100ML", "descripcion": "Precio Habitual - Prod. Bonificados:1 u. de PROBADOR BOOS RAINBOW F-WOM", "precio": 965.32, "precioDescuento": 965.32 }] }, { "id": 128287, "nombre": "TRANSFER PUIG A BANDERAS POWER", "descripcion": " PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de PROBADOR A.BANDERA POWER OF SED X100", "moduloDetalle": [{ "id": "128287_A733610", "idModulo": 128287, "producto": "A. BANDERAS POWER OF SED EDT X 100 ML", "descripcion": "Precio Habitual", "precio": 1498.77, "precioDescuento": 1498.77 }, { "id": "128287_A678580", "idModulo": 128287, "producto": "A. BANDERAS POWER OF SED EDT X 50 ML", "descripcion": "Precio Habitual", "precio": 1088.1, "precioDescuento": 1088.1 }] }, { "id": 129466, "nombre": "TRANSFER SANACUTIS ORDEÑE PROMO", "descripcion": " PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de CREMA DE ORDEÑE SANACUTIS PROBADOR X 1", "moduloDetalle": [{ "id": "129466_A285120", "idModulo": 129466, "producto": "CREMA DE ORDEÑE SANACUTIS C/VALVU X 250 GR", "descripcion": "Precio Habitual", "precio": 271.05, "precioDescuento": 148.15 }, { "id": "129466_A868544", "idModulo": 129466, "producto": "CREMA DE ORDEÑE SANACUTIS X 250 GR", "descripcion": "Precio Habitual", "precio": 233.9, "precioDescuento": 127.84 }] }, { "id": 132436, "nombre": "TRANSFER PUIG LADY MILLON", "descripcion": " PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de PROBADOR P.RABANNE LADY MILLION", "moduloDetalle": [{ "id": "132436_A872719", "idModulo": 132436, "producto": "P.RABANNE LADY MILLION EDP X 50 ML", "descripcion": "Precio Habitual", "precio": 5415.53, "precioDescuento": 5415.53 }, { "id": "132436_A893356", "idModulo": 132436, "producto": "P.RABANNE LADY MILLION PRIVE EDP X 30ML", "descripcion": "Precio Habitual", "precio": 3330.58, "precioDescuento": 3330.58 }, { "id": "132436_A202354", "idModulo": 132436, "producto": "P.RABANNE LADY MILLION PRIVE EDP X 50ML", "descripcion": "Precio Habitual", "precio": 4303.11, "precioDescuento": 4303.11 }, { "id": "132436_A903201", "idModulo": 132436, "producto": "P.RABANNE LADY MILLION PRIVE EDP X 80ML", "descripcion": "Precio Habitual", "precio": 5245.66, "precioDescuento": 5245.66 }, { "id": "132436_A675583", "idModulo": 132436, "producto": "P.RABANNE LADY MILLON EDP X 30 ML", "descripcion": "Precio Habitual", "precio": 4196.53, "precioDescuento": 4196.53 }, { "id": "132436_A702081", "idModulo": 132436, "producto": "P.RABANNE LADY MILLON EDP X 80 ML", "descripcion": "Precio Habitual", "precio": 6587.88, "precioDescuento": 6587.88 }, { "id": "132436_A909101", "idModulo": 132436, "producto": "P.RABANNE LADY MILLON EDT X 80 ML", "descripcion": "Precio Habitual", "precio": 814.43, "precioDescuento": 814.43 }] }],
            farmacias: [],// [{ "id": 8469, "nombre": "2 DE ABRIL DE PEREYRA REBECA SABRINA", "direccion": "2 DE ABRIL 1475" }, { "id": 7186, "nombre": "24 DE MADUSSI CLAUDIA A", "direccion": "24 DE SETIEMBRE 2192. BARRIO GENERAL PAZ SUR" }, { "id": 4724, "nombre": "24 HORAS DE MARTINA GONZALO", "direccion": "RUTA 9 Y CORRIENTES" }, { "id": 6517, "nombre": "25 DE MAYO DE POLIWKA SANDRA", "direccion": "25 DE MAYO 263" }, { "id": 7263, "nombre": "25 DE MAYO DE SANABA S.A.", "direccion": "25 DE MAYO 222" }, { "id": 8420, "nombre": "3 DE ABRIL DE VACCA ANALIA", "direccion": "LINIERS 446" }, { "id": 7490, "nombre": "4 SOLES DE FLEITAS YANINA S", "direccion": "HIPOLITO IRIGOYEN 372" }, { "id": 7860, "nombre": "9 DE JULIO DE SANABA S.A.", "direccion": "9 DE JULIO 418" }, { "id": 7094, "nombre": "A M R SALUD S.A.", "direccion": "PARAGUAY 1470" }, { "id": 8578, "nombre": "A M R SALUD S.A. INSTITUCIONALES", "direccion": "PARAGUAY 1470" }, { "id": 850, "nombre": "A.M.E.C. DE NOGOYA", "direccion": "25 DE MAYO 738" }, { "id": 8810, "nombre": "A.M.P.A.I.A. DE ASOC MUT PERS AGROMETAL E INGERSOLL ARG", "direccion": "9 DE JULIO 1758" }, { "id": 8671, "nombre": "A.M.S.E.C. - ASOC MUT SOLIDARIA DE EMP DE CCIO", "direccion": "TUCUMAN 119" }, { "id": 6971, "nombre": "A.T.S.A.", "direccion": "MENDOZA 2667" }, { "id": 6075, "nombre": "ABDEL MASIH ROSA ANA MARIA", "direccion": "SAN MARTIN 56" }, { "id": 4935, "nombre": "ABRAHAM LUIS FEDERICO", "direccion": "RIVADAVIA 301" }, { "id": 5527, "nombre": "ABRAHAN JOSE LUIS", "direccion": "Bv. JUAN D. PERON 1896" }],
            farmaciaSeleccionada: '',
            filtrado: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.elementResultadoModulo = React.createRef();
        this.url = 'http://www.kellerhoff.com.ar:84/api/'
    }

    componentWillMount() {
        // this.filtrarModulosApp('');
        this.cargarDatosInicio_DesdeLocalStorage();
        if (navigator.onLine) {
            this.cargarDatosInicio_DesdeApi();
        } else {

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
        this.setState({ farmacias: l_farmacias.slice(0, 50) });
        ///
        var l_modulos = localStorage.getItem('l_modulos') || '';
        if (l_modulos !== '') {

            l_modulos = JSON.parse(l_modulos);

        }
        if (!Array.isArray(l_modulos)) {
            l_modulos = [];
        }
        this.setState({ modulosOriginal: l_modulos.slice(0, 100) }, () => {
            this.filtrarModulosApp('');
        })


    }

    handleChange(event) {
        let farma = this.state.farmacias.find(element => String(element.id) === String(event.target.value));
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
                    m.moduloDetalle.find(e => { return String(e.producto).toUpperCase().includes(String(this.state.filtrado).toUpperCase()) }) != undefined
                );
                this.setState({ modulos: modulosFiltrado })
            }
        });
    }
    render() {
        return (
            <>
                <div className="app container-fluid">
                    Pedidos Historial
        <div className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="https://i.blogs.es/2d9ac2/el-libro-de-imagenes-4/1366_2000.jpg" alt="First slide"></img>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://i.blogs.es/372249/idees-vagues_images-claires_godard_chinoise/1366_2000.jpg" alt="Second slide"></img>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://i.blogs.es/530af5/el-libro-de-imagenes-2/1366_2000.png" alt="Third slide"></img>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </>
        )
    };
}

export default PedidosHistorial;
