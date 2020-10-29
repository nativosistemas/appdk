import React, { Component } from "react";
import Modulo from "./Modulo";
//import storage from "../storage";

class ResultadoModulo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            texto: '',
            l_cantidad: new Map()
        };
        this.miMapaRefs = new Map();
        this.props.modulos.forEach(element => {
            this.miMapaRefs.set(element.id, React.createRef());
        });
    
    }

    componentWillUpdate =()=>{
        this.miMapaRefs = new Map();
        this.props.modulos.forEach(element => {
            this.miMapaRefs.set(element.id, React.createRef());
        });

    }
    changeCambo = () => {
        this.miMapaRefs.forEach(element => {
            element.current.refrescarCantidad();
        });
    }
    mostrarModulos = () => {
        const modulos = this.props.modulos;
        
        if (modulos.length === 0) return null;
        
    

        return (
            <React.Fragment>
                <div>
                    {this.state.texto}
                    {this.props.farmacia.nombre}
                </div>
                {modulos.map(modulo => (<Modulo key={modulo.id} id={modulo.id} ref={this.miMapaRefs.get(modulo.id)}
                    modulo={modulo} cargarCantidad={this.cargarCantidad} getCantidad={this.getCantidad} ></Modulo>))}

            </React.Fragment>
        )
    }
    cargarCantidad = (pModulo, pCantidad) => {
        const farmacia = this.props.farmacia;
        if (farmacia === '')
            return;

        this.setearCantidadModulo(farmacia, pModulo, pCantidad);
        let l_cantidad = this.state.l_cantidad;
        l_cantidad.set(pModulo.id, pCantidad);
        this.setState({ l_cantidad: l_cantidad });

        var l_pendiente = localStorage.getItem('l_pedidos') || '';
        l_pendiente = JSON.parse(l_pendiente);
        var variable = '';
        for (var i = 0; i < l_pendiente.length; i++) {
            variable += 'Farmacia: ' + l_pendiente[i].farmacia.nombre + ' - Modulo: ' + l_pendiente[i].modulo.nombre + ' - Cantidad: ' + String(l_pendiente[i].cantidad) + ' ||| ';
        }
        this.setState({ texto: variable })
    }
    getCantidad = (pModulo) => {
        var cantidad = 0;
        const farmacia = this.props.farmacia;
        if (farmacia === '')
            return cantidad;

        var l_pendiente = localStorage.getItem('l_pedidos') || '';
        if (l_pendiente !== '') {
            //  try {
            l_pendiente = JSON.parse(l_pendiente);
            // }catch{}

            if (Array.isArray(l_pendiente)) {
                for (var i = 0; i < l_pendiente.length; i++) {
                    if (String(l_pendiente[i].modulo.id) === String(pModulo.id) && String(l_pendiente[i].farmacia.id) === String(farmacia.id)) {
                        cantidad = l_pendiente[i].cantidad;
                        break;
                    }
                }
            }
        }
        return cantidad;
    }
    setearCantidadModulo = (pFarmacia, pModulo, pCantidad) => {
        //var myName = localStorage['name'] || '';
        //var myPass = localStorage['pass'] || '';

        //var l_pendiente = localStorage['l_pedidos'] || '';
        //localStorage.clear();
        var l_pendiente = localStorage.getItem('l_pedidos') || '';
        var isAgregar = true;
        if (l_pendiente !== '') {
            //  try {
            l_pendiente = JSON.parse(l_pendiente);
            // }catch{}
        }
        if (Array.isArray(l_pendiente)) {

            for (var i = 0; i < l_pendiente.length; i++) {
                if (l_pendiente[i].modulo.id === pModulo.id && l_pendiente[i].farmacia.id === pFarmacia.id) {
                    isAgregar = false;
                    l_pendiente[i].cantidad = pCantidad;
                    break;
                }
            }
        } else {
            l_pendiente = [];
        }
        if (isAgregar) {
            // let oPedido = new Pedido(pFarmacia, pModulo, pCantidad);
            let oPedido = { fechaCreacion: Date.now(), farmacia: pFarmacia, modulo: pModulo, cantidad: pCantidad };
            l_pendiente.push(oPedido);
        }
        //localStorage['l_pedidos'] = l_pendiente;
        localStorage.setItem('l_pedidos', JSON.stringify(l_pendiente));
    }
    render() {
        return (
            <>
                {this.mostrarModulos()}
            </>
        );
    }

}

export default ResultadoModulo