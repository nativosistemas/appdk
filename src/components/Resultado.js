import React, { Component } from "react";
import Modulo from "./Modulo";

class Resultado extends Component {
    
    componentWillUpdate = () => {
        this.miMapaRefs = new Map();
        this.props.modulos.forEach(element => {
            this.miMapaRefs.set(element.id, React.createRef());
        });
    }
    actualizarCantidadEnLosModulos = () => {
        this.miMapaRefs.forEach(element => {
            element.current.refrescarCantidad();
        });
    }

    setCantidad = (pModulo, pCantidad) => {
        const farmacia = this.props.farmacia;
        if (farmacia === '')
            return;

        var l_pendiente = localStorage.getItem('l_pedidos') || '';
        var isAgregar = true;
        if (l_pendiente !== '') {
            l_pendiente = JSON.parse(l_pendiente);
        }
        if (Array.isArray(l_pendiente)) {
            for (var i = 0; i < l_pendiente.length; i++) {
                if (l_pendiente[i].modulo.id === pModulo.id && l_pendiente[i].farmacia.id === farmacia.id) {
                    isAgregar = false;
                    l_pendiente[i].cantidad = pCantidad;
                    break;
                }
            }
        } else {
            l_pendiente = [];
        }
        if (isAgregar) {
            let oPedido = { fechaCreacion: Date.now(), farmacia: farmacia, modulo: pModulo, cantidad: pCantidad };
            l_pendiente.push(oPedido);
        }
        localStorage.setItem('l_pedidos', JSON.stringify(l_pendiente));
    }
    getCantidad = (pModulo) => {
        var cantidad = 0;
        const farmacia = this.props.farmacia;
        if (farmacia === '')
            return cantidad;

        var l_pendiente = localStorage.getItem('l_pedidos') || '';
        if (l_pendiente !== '') {
            l_pendiente = JSON.parse(l_pendiente);
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
    render() {
        const modulos = this.props.modulos;
        if (modulos.length === 0) return null;
        return (
            <>
                <React.Fragment>
                    {modulos.map(modulo => (<Modulo key={modulo.id} id={modulo.id} ref={this.miMapaRefs.get(modulo.id)}
                        modulo={modulo} setCantidad={this.setCantidad} getCantidad={this.getCantidad} ></Modulo>))}
                </React.Fragment>
            </>
        );
    }
}

export default Resultado