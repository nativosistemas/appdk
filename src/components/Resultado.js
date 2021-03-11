import React, { Component } from "react";
import Modulo from "./Modulo";
import { getCantidad_ModuloFarmacia } from './utils';

class Resultado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalAhorroGeneral: 0,
            montoTotalGeneral: 0
        };
        this.miMapaRefs = new Map();
    }

    componentWillMount = () => {
       
        this.props.modulos.forEach(element => {
            this.miMapaRefs.set(element.id, React.createRef());
        });
    }
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
    getMontoTotalGeneral = () => {
        var MontoTotalGeneral = 0;
        this.miMapaRefs.forEach(element => {
            MontoTotalGeneral += element.current.state.montoTotal;
        });
        return MontoTotalGeneral;
    }
    getTotalAhorroGeneral = () => {
        var TotalAhorroGeneral = 0;
        this.miMapaRefs.forEach(element => {
            TotalAhorroGeneral += element.current.state.ahorroTotal;
        });
        return TotalAhorroGeneral;
    }
    refreshMontoAhorroGeneral = () => {
        this.setState({ totalAhorroGeneral: this.getTotalAhorroGeneral() }, () => { this.setState({ montoTotalGeneral: this.getMontoTotalGeneral() }, () => { this.props.refreshMontoAhorroGeneral() }) })
    }
    setCantidad = (pModulo, pCantidad) => {
        const farmacia = this.props.farmacia;
        if (farmacia === null || farmacia === undefined || farmacia === '')
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
        return getCantidad_ModuloFarmacia(pModulo, farmacia);
    }
    render() {
        const modulos = this.props.modulos;
        if (modulos.length === 0) return null;
        //var cantFor = 0;
        return (
            <>
                <React.Fragment>
                    {modulos.map((modulo, i) => {
                        return (<>
                            <Modulo key={modulo.id} id={modulo.id} ref={this.miMapaRefs.get(modulo.id)} isPar={parseInt(i) % 2} farmacia={this.props.farmacia}
                                modulo={modulo} setCantidad={this.setCantidad} getCantidad={this.getCantidad} refreshMontoAhorroGeneral={this.refreshMontoAhorroGeneral} ></Modulo>
                        </>);
                    })}
                </React.Fragment>
            </>
        );
    }
}

export default Resultado