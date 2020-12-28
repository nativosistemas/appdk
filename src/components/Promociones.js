import React, { Component } from 'react';
import Resultado from './Resultado'
import Nav from './Nav'

class Promociones extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modulosOriginal: [],//[{ "id": 1, "cantidadMinimos": 2, "idLaboratorio": 1, "laboratorio": null, "moduloDetalle": [{ "id": 1, "idModulo": 1, "orden": 1, "producto": "COLBERT US DEO AER X 250 ML", "descripcion": "COLBERT US DEO AER X 250 ML", "precio": 159.24, "precioDescuento": 150.24, "cantidadUnidades": 2 }, { "id": 2, "idModulo": 1, "orden": 2, "producto": "MB FITME BASE Nº 118 X 30ML", "descripcion": "MB FITME BASE Nº 118 X 30ML", "precio": 423.45, "precioDescuento": 403, "cantidadUnidades": 1 }] }, { "id": 2, "cantidadMinimos": 1, "idLaboratorio": 2, "laboratorio": null, "moduloDetalle": [{ "id": 10, "idModulo": 2, "orden": 1, "producto": "ARCELIGASOL CAP BLANDAS X 60", "descripcion": "VOGUE LAB C. MANIAC MATTE ELECTRICA", "precio": 15024, "precioDescuento": 2, "cantidadUnidades": 0 }, { "id": 11, "idModulo": 2, "orden": 2, "producto": "GOICOECHEA CR ULTRA NUTRITIVA X 400 ML", "descripcion": "REQUIP PD 8 MG CPR X 28", "precio": 40300, "precioDescuento": 1, "cantidadUnidades": 0 }, { "id": 13, "idModulo": 2, "orden": 3, "producto": "LEVO TIROXINA 112 MCG CPR X 50", "descripcion": "PINO COLBERT DEO AER X 150 ML", "precio": 605, "precioDescuento": 0, "cantidadUnidades": 0 }] }, { "id": 3, "cantidadMinimos": 5, "idLaboratorio": 7, "laboratorio": null, "moduloDetalle": [{ "id": 6, "idModulo": 3, "orden": 1, "producto": "DOVE DEO AER ANT. RITUAL ENERG X 150ML", "descripcion": "DOVE DEO AER ANT. RITUAL ENERG X 150ML", "precio": 271.61, "precioDescuento": 270, "cantidadUnidades": 1 }, { "id": 7, "idModulo": 3, "orden": 2, "producto": "CARVEDILOL RICHET 12,5 MG CPR X 28", "descripcion": "ISSUE COLOR PACK  N 9/1", "precio": 741.61, "precioDescuento": 640.25, "cantidadUnidades": 1 }, { "id": 8, "idModulo": 3, "orden": 3, "producto": "TRANQUINAL 2 MG CPR X 60", "descripcion": "TRANQUINAL 2 MG CPR X 60", "precio": 321.61, "precioDescuento": 212.61, "cantidadUnidades": 1 }, { "id": 12, "idModulo": 3, "orden": 4, "producto": null, "descripcion": "CAVIAHUE KIT ANTIAGE+HIDRATACION", "precio": 270050, "precioDescuento": 1, "cantidadUnidades": 0 }, { "id": 14, "idModulo": 3, "orden": 6, "producto": "DENTILAC PASTA S/MENTA X 20 GR", "descripcion": "TIO NACHO SPRAY ACLARANTE INSTANT.X 245 ML", "precio": 7061, "precioDescuento": 3, "cantidadUnidades": 23 }, { "id": 15, "idModulo": 3, "orden": 5, "producto": "NEUTROGENA BLUE LINE TOAL DESMAQ X 25", "descripcion": "MB COL SENS LAB MATTES N°725 TANTALIZI", "precio": 2000, "precioDescuento": 1, "cantidadUnidades": 0 }, { "id": 17, "idModulo": 3, "orden": 8, "producto": "FRUCTIS OIL REPAIR L COCO P-PEINAR X300GR", "descripcion": "MUELITA MORDILLO REFRIGERANTE X 1", "precio": 261, "precioDescuento": 1, "cantidadUnidades": 0 }] }, { "id": 4, "cantidadMinimos": 2, "idLaboratorio": 7, "laboratorio": null, "moduloDetalle": [{ "id": 3, "idModulo": 4, "orden": 1, "producto": "CONTROL K CAP X 60", "descripcion": "CONTROL K CAP X 60", "precio": 2771.61, "precioDescuento": 2700.5, "cantidadUnidades": 1 }, { "id": 4, "idModulo": 4, "orden": 2, "producto": "SALICREM BALSAMO SPRAY X 60 ML", "descripcion": "SALICREM BALSAMO SPRAY X 60 ML", "precio": 71.61, "precioDescuento": 60.25, "cantidadUnidades": 0 }, { "id": 5, "idModulo": 4, "orden": 3, "producto": "AXE B.SPLASH DARK TEMPT AER X96GR", "descripcion": "AXE B.SPLASH DARK TEMPT AER X96GR", "precio": 478.61, "precioDescuento": 470.61, "cantidadUnidades": 3 }] }],
      modulos: [],//{ "id": 75250, "nombre": "TRANSFER ONE MILLON PRIVE LADY", "descripcion": " PLAZO HABITUAL - Dto. Habitual - Combo de Productos - Prod. Bonificados: 1 u. de PROBADOR P.RABANNE LADY MILLON PRIVE", "moduloDetalle": [{ "id": "75250_A893356", "idModulo": 75250, "producto": "P.RABANNE LADY MILLION PRIVE EDP X 30ML", "descripcion": "Precio Habitual", "precio": 3330.58, "precioDescuento": 3330.58 }, { "id": "75250_A202354", "idModulo": 75250, "producto": "P.RABANNE LADY MILLION PRIVE EDP X 50ML", "descripcion": "Precio Habitual", "precio": 4303.11, "precioDescuento": 4303.11 }, { "id": "75250_A903201", "idModulo": 75250, "producto": "P.RABANNE LADY MILLION PRIVE EDP X 80ML", "descripcion": "Precio Habitual", "precio": 5245.66, "precioDescuento": 5245.66 }] }, { "id": 89763, "nombre": "TRANSFER PROMO KOSIUKO SHINE NUEVO", "descripcion": " PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de PROBADOR KOSIUKO SHINE", "moduloDetalle": [{ "id": "89763_A152153", "idModulo": 89763, "producto": "KOSIUKO SHINE EDP X 100 ML", "descripcion": "Precio Habitual - Prod. Bonificados:1 u. de PROBADOR KOSIUKO SHINE", "precio": 1107.02, "precioDescuento": 1107.02 }] }, { "id": 93736, "nombre": "TRANSFER PUIG BLUE SEDUCTION FOR WOMEN", "descripcion": " PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de PROBADOR A.BANDERA BLUE SEDUCTION FOR WOM", "moduloDetalle": [{ "id": "93736_A172756", "idModulo": 93736, "producto": "BLUE SEDUC F-WOMEN EDT X 50 ML", "descripcion": "Precio Habitual", "precio": 971.2, "precioDescuento": 971.2 }, { "id": "93736_A468314", "idModulo": 93736, "producto": "BLUE SEDUC F-WOMEN EDT X 80 ML", "descripcion": "Precio Habitual", "precio": 1300.92, "precioDescuento": 1300.92 }] }, { "id": 114876, "nombre": "TRANSFER PUIG BENETTON ROSE", "descripcion": " PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de PROBADOR BENETTON COLORS WOMAN ROSE", "moduloDetalle": [{ "id": "114876_A513585", "idModulo": 114876, "producto": "BENETTON COLORS WOMAN ROSE EDT X 50 ML", "descripcion": "Precio Habitual", "precio": 1076.11, "precioDescuento": 1076.11 }, { "id": "114876_A024106", "idModulo": 114876, "producto": "BENETTON COLORS WOMAN ROSE EDT X 80 ML", "descripcion": "Precio Habitual", "precio": 1390.85, "precioDescuento": 1390.85 }] }, { "id": 120071, "nombre": "TRANSFER PAÑALES PAMI", "descripcion": " VTO 60 días", "moduloDetalle": [{ "id": "120071_A985643", "idModulo": 120071, "producto": "PAÑAL PAMI AD MOD 10 (EX 12)", "descripcion": "Precio Habitual", "precio": 2238.29, "precioDescuento": 2238.29 }, { "id": "120071_A392078", "idModulo": 120071, "producto": "PAÑAL PAMI AD MOD 5", "descripcion": "Precio Habitual", "precio": 735.76, "precioDescuento": 735.76 }, { "id": "120071_A456308", "idModulo": 120071, "producto": "PAÑAL PAMI AD MOD 6 (EX 8)", "descripcion": "Precio Habitual", "precio": 1263.14, "precioDescuento": 1263.14 }, { "id": "120071_A826326", "idModulo": 120071, "producto": "PAÑAL PAMI AD MOD 7 (EX 9)", "descripcion": "Precio Habitual", "precio": 1394.24, "precioDescuento": 1394.24 }, { "id": "120071_A323492", "idModulo": 120071, "producto": "PAÑAL PAMI AD MOD 8 (EX 10)", "descripcion": "Precio Habitual", "precio": 2091.36, "precioDescuento": 2091.36 }] }, { "id": 122713, "nombre": "TRANSFER PUIG RAPSODIA PROMO", "descripcion": " PLAZO HABITUAL - Dto. Habitual", "moduloDetalle": [{ "id": "122713_A455492", "idModulo": 122713, "producto": "RAPSODIA INDIE EDP X 100 ML", "descripcion": "Precio Habitual - Prod. Bonificados:1 u. de PROBADOR RAPSODIA INDIE", "precio": 1795.51, "precioDescuento": 1795.51 }] }, { "id": 122889, "nombre": "TRANSFER PADOC BOOS PROMO WOMAN C/PROB BONIF", "descripcion": " PLAZO HABITUAL - Dto. Habitual", "moduloDetalle": [{ "id": "122889_A776702", "idModulo": 122889, "producto": "BOOS FOREVER F-WOM EDP X 100 ML", "descripcion": "Precio Habitual - Prod. Bonificados:1 u. de PROBADOR BOOS FOREVER EDP X100ML", "precio": 965.32, "precioDescuento": 965.32 }, { "id": "122889_A400484", "idModulo": 122889, "producto": "BOOS INTENSE LUMIERE WOM EDP X90ML", "descripcion": "Precio Habitual - Prod. Bonificados:1 u. de PROBADOR BOOS INTENSE LUMIERE", "precio": 1208.01, "precioDescuento": 1208.01 }, { "id": "122889_A185252", "idModulo": 122889, "producto": "BOOS INTENSE WOM EDP X90ML", "descripcion": "Precio Habitual - Prod. Bonificados:1 u. de PROBADOR BOOS INTENSE WOMAN EDP X 90", "precio": 1208.01, "precioDescuento": 1208.01 }, { "id": "122889_A381220", "idModulo": 122889, "producto": "BOOS MIDNIGHT F-WOM EDP X 100 ML", "descripcion": "Precio Habitual - Prod. Bonificados:1 u. de PROBADOR BOOS MIDNIGHT", "precio": 965.32, "precioDescuento": 965.32 }, { "id": "122889_A821550", "idModulo": 122889, "producto": "BOOS RAINBOW F-WOM EDP X 100ML", "descripcion": "Precio Habitual - Prod. Bonificados:1 u. de PROBADOR BOOS RAINBOW F-WOM", "precio": 965.32, "precioDescuento": 965.32 }] }, { "id": 128287, "nombre": "TRANSFER PUIG A BANDERAS POWER", "descripcion": " PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de PROBADOR A.BANDERA POWER OF SED X100", "moduloDetalle": [{ "id": "128287_A733610", "idModulo": 128287, "producto": "A. BANDERAS POWER OF SED EDT X 100 ML", "descripcion": "Precio Habitual", "precio": 1498.77, "precioDescuento": 1498.77 }, { "id": "128287_A678580", "idModulo": 128287, "producto": "A. BANDERAS POWER OF SED EDT X 50 ML", "descripcion": "Precio Habitual", "precio": 1088.1, "precioDescuento": 1088.1 }] }, { "id": 129466, "nombre": "TRANSFER SANACUTIS ORDEÑE PROMO", "descripcion": " PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de CREMA DE ORDEÑE SANACUTIS PROBADOR X 1", "moduloDetalle": [{ "id": "129466_A285120", "idModulo": 129466, "producto": "CREMA DE ORDEÑE SANACUTIS C/VALVU X 250 GR", "descripcion": "Precio Habitual", "precio": 271.05, "precioDescuento": 148.15 }, { "id": "129466_A868544", "idModulo": 129466, "producto": "CREMA DE ORDEÑE SANACUTIS X 250 GR", "descripcion": "Precio Habitual", "precio": 233.9, "precioDescuento": 127.84 }] }, { "id": 132436, "nombre": "TRANSFER PUIG LADY MILLON", "descripcion": " PLAZO HABITUAL - Dto. Habitual - Prod. Bonificados: 1 u. de PROBADOR P.RABANNE LADY MILLION", "moduloDetalle": [{ "id": "132436_A872719", "idModulo": 132436, "producto": "P.RABANNE LADY MILLION EDP X 50 ML", "descripcion": "Precio Habitual", "precio": 5415.53, "precioDescuento": 5415.53 }, { "id": "132436_A893356", "idModulo": 132436, "producto": "P.RABANNE LADY MILLION PRIVE EDP X 30ML", "descripcion": "Precio Habitual", "precio": 3330.58, "precioDescuento": 3330.58 }, { "id": "132436_A202354", "idModulo": 132436, "producto": "P.RABANNE LADY MILLION PRIVE EDP X 50ML", "descripcion": "Precio Habitual", "precio": 4303.11, "precioDescuento": 4303.11 }, { "id": "132436_A903201", "idModulo": 132436, "producto": "P.RABANNE LADY MILLION PRIVE EDP X 80ML", "descripcion": "Precio Habitual", "precio": 5245.66, "precioDescuento": 5245.66 }, { "id": "132436_A675583", "idModulo": 132436, "producto": "P.RABANNE LADY MILLON EDP X 30 ML", "descripcion": "Precio Habitual", "precio": 4196.53, "precioDescuento": 4196.53 }, { "id": "132436_A702081", "idModulo": 132436, "producto": "P.RABANNE LADY MILLON EDP X 80 ML", "descripcion": "Precio Habitual", "precio": 6587.88, "precioDescuento": 6587.88 }, { "id": "132436_A909101", "idModulo": 132436, "producto": "P.RABANNE LADY MILLON EDT X 80 ML", "descripcion": "Precio Habitual", "precio": 814.43, "precioDescuento": 814.43 }] }],
      farmacias: [],//[{ "id": 289, "nombre": "AGUIRRE LAURA MARIA", "direccion": "AV. FILIPPINI 1872" }, { "id": 5688, "nombre": "AIRES DE LORENZETTI MAURICIO", "direccion": "BUENOS AIRES 2296" }, { "id": 7620, "nombre": "ALEMANA DE LOPERGOLO V. Y CORDEIRO M. S.", "direccion": "RIOBAMBA 1814" }, { "id": 1050, "nombre": "ALESSO ANDREA", "direccion": "SARMIENTO 1296" }, { "id": 5823, "nombre": "ALQUIMIA DE DANIEL MARTIN", "direccion": "CORRIENTES 2670" }, { "id": 2733, "nombre": "AMEN FARMACIA MUTUAL", "direccion": "CORRIENTES 370" }, { "id": 4294, "nombre": "APOTHEKA SRL", "direccion": "SAN JERONIMO 248 LOCAL 4" }, { "id": 1255, "nombre": "ARGENTA ETEL", "direccion": "SAN MARTIN 4515" }, { "id": 2777, "nombre": "ARGUTTI MIRTHA", "direccion": "JUAN B JUSTO 371" }, { "id": 1256, "nombre": "ASOC ESPAÑOLA ROSARIO", "direccion": "ENTRE RIOS 701" }, { "id": 7619, "nombre": "ASOC MUTUAL 12 DE MAYO - ROSARIO", "direccion": "MAIPU 1157" }],
      farmaciaSeleccionada: '',
      filtrado: '',
      totalAhorroGeneral_promociones: 0,
      montoTotalGeneral_promociones: 60
    }
    this.handleChange = this.handleChange.bind(this);
    this.elementResultadoModulo = React.createRef();
    this.elementNav = React.createRef();
    this.url = 'http://www.kellerhoff.com.ar:84/api/'
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
    ///
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
    let farma = this.state.farmacias.find(element => String(element.id) === String(event.target.value));
    this.setState({ farmaciaSeleccionada: farma }, () => {
      this.elementResultadoModulo.current.actualizarCantidadEnLosModulos();
    });//, () => { this.elementNav.current.actualizarMontosAhorroGenerales(); }
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

 /* getTotalAhorroGeneral = () => {
    var result = 0
    //try {
    result = this.elementResultadoModulo.current.state.totalAhorroGeneral;
    //} catch (e) { }
    return result === null ? 0 : result;
  }
  getMontoTotalGeneral = () => {
    var result = 0
    try {
      result = this.elementResultadoModulo.current.state.totalAhorroGeneral;
    } catch (e) { }
    return result === null ? 0 : result;
  }*/
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
