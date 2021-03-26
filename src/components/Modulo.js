import React, { Component } from "react";
import { currencyFormat, getPrecioModuloDesc, getPrecioModuloHabitual } from './utils';

class Modulo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            ahorroTotal: 0,
            montoTotal: 0
        };
    }
    componentDidMount() {
        this.refrescarCantidad();
    }
    refrescarCantidad = () => {
        let cantidad = 0;
        if (this.isChangeCantidad()) {
            cantidad = this.props.getCantidad(this.props.modulo);
        } else {
            cantidad = this.props.modulo.cantidadGrabado;
        }
        //let cantidad = this.props.getCantidad(this.props.modulo);
        this.setState({ count: cantidad }, () => { this.RefrescarMontosAhorro(); });
    }
    isFarmaciaSeleccionada = () => {
        const farmacia = this.props.farmacia;
        return (farmacia === null || farmacia === undefined || farmacia === '') == false;
    }
    isChangeCantidad = () => {
        const cantidadGrabado = this.props.modulo.cantidadGrabado;
        return (cantidadGrabado !== null && cantidadGrabado !== undefined && cantidadGrabado !== '') == false;
    }
    onClickAccion = (e, pValor) => {
        e.preventDefault();
        if (this.isFarmaciaSeleccionada() && this.isChangeCantidad()) {
            let cantidad = parseInt(this.state.count);
            if (cantidad === 0 && pValor === -1)
                return null;
            let cantidadMinimos = this.props.modulo.cantidadMinimos;
            if (cantidad === cantidadMinimos && pValor === -1)
                cantidad = 0;
            else if (cantidad < cantidadMinimos && pValor === 1)
                cantidad = cantidadMinimos;
            else
                cantidad += parseInt(pValor);
            this.cambiarCantidad(cantidad);
        }
    }

    cambiarCantidad = (pValue) => {
        if (pValue === '' || pValue === null) {
            pValue = 0;
        }
        let cantidad = parseInt(pValue);
        this.setState({ count: cantidad }, () => { this.props.setCantidad(this.props.modulo, cantidad); this.RefrescarMontosAhorro(); })
    }
    RefrescarMontosAhorro = () => {
        let montoTotal_detalle = 0;
        let montoTotalDescuento_detalle = 0;

        this.props.modulo.moduloDetalle.forEach(element => {
            var cantidadUnidades = element.cantidadUnidades;
            if (cantidadUnidades == 0) {
                cantidadUnidades = 1;
            }
            if (element.objProducto.pro_preciofarmacia > 0) {
                montoTotal_detalle += getPrecioModuloHabitual(element, this.props.farmacia) * cantidadUnidades;
            }
            if (element.precioDescuento > 0) {
                montoTotalDescuento_detalle += getPrecioModuloDesc(element, this.props.farmacia) * cantidadUnidades;
            }
        });
        let montoTotal = 0;
        let ahorroTotal = 0;
        if (this.state.count > 0) {
            montoTotal = montoTotal_detalle * this.state.count;
            ahorroTotal = montoTotal - (montoTotalDescuento_detalle * this.state.count);
        }

        this.setState({ montoTotal: montoTotal }, () => { this.setState({ ahorroTotal: ahorroTotal }, () => { this.props.refreshMontoAhorroGeneral(); }) })
    }
    isPromociones = () => {
        var result = false;
        if (this.props.isPromociones !== null && this.props.isPromociones !== undefined && this.props.isPromociones !== '') {
            result = this.props.isPromociones;
        }
        return result;
    }
    isCarrito = () => {
        var result = false;
        if (this.props.isCarrito !== null && this.props.isCarrito !== undefined && this.props.isCarrito !== '') {
            result = this.props.isCarrito;
        }
        return result;
    }
    onClickClose = (e) => {
        e.preventDefault();
        if (this.isFarmaciaSeleccionada() && this.isChangeCantidad()) {
            this.cambiarCantidad(0);
            window.location.reload(false);
        }
    }
    render() {
        const { moduloDetalle } = this.props.modulo;
        return (<div className={this.props.isPar ? 'card cardModulo moduloCssPar' : 'card cardModulo '}>
            {this.isCarrito() && <div className="card-header">
                <button type="button" class="btn  btn-link" aria-label="Close"  onClick={(e) => this.onClickClose(e)}><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" enable-background="new 0 0 512 512" height="28" viewBox="0 0 512 512" width="28"><g><path d="m424 64h-88v-16c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16h-88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283c1.221 25.636 22.281 45.717 47.945 45.717h242.976c25.665 0 46.725-20.081 47.945-45.717l13.823-290.283h8.744c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zm-216-16c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zm-128 56c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40c-4.931 0-331.567 0-352 0zm313.469 360.761c-.407 8.545-7.427 15.239-15.981 15.239h-242.976c-8.555 0-15.575-6.694-15.981-15.239l-13.751-288.761h302.44z"/><path d="m256 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/><path d="m336 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/><path d="m176 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/></g></svg></button>
            </div>}
            <div className="card-body">
                {moduloDetalle.length > 0 &&

                    <table className="table textTable">
                        <thead>
                            <tr>
                                <th scope="col">Producto </th>
                                <th className="d-none d-sm-none d-md-table-cell" scope="col">Descripción</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Precio c/ Desc.</th>
                                <th className="d-none d-sm-none d-md-table-cell" scope="col">Cant. Unid.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {moduloDetalle.map((detalle, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{detalle.producto}</td>
                                        <td className="d-none d-sm-none d-md-table-cell">{detalle.descripcion}</td>
                                        <td>{currencyFormat(getPrecioModuloHabitual(detalle, this.props.farmacia))}</td>
                                        <td>{currencyFormat(getPrecioModuloDesc(detalle, this.props.farmacia))}</td>
                                        <td className="d-none d-sm-none d-md-table-cell">{detalle.cantidadUnidades}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                }
            </div>
            <div className="card-footer ">
                <div className="row">
                    <div className="col">
                        {this.props.modulo.cantidadMinimos != null &&
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text font-weight-bold" >Cantidad mínima:</span>
                                </div>
                                <input type="number" className="form-control" aria-describedby="basic-addon1" value={this.props.modulo.cantidadMinimos} readOnly ></input>
                            </div>
                        }
                    </div>
                    <div className="col-sm-6">
                        <div className=" row justify-content-center">
                            <div className="input-group col-xs-12 col-sm-10 col-md-8 col-lg-8">
                                <div className="input-group-prepend">
                                    <button type="button" className="btn btn-secondary" onClick={(e) => this.onClickAccion(e, -1)}>-</button>
                                </div>
                                <input type="number" className="form-control" placeholder="Cantidad" value={this.state.count} onChange={(e) => this.cambiarCantidad(e.target.value)} readOnly={!this.isChangeCantidad()} />
                                <div className="input-group-prepend">
                                    <button type="button" className="btn btn-secondary" onClick={(e) => this.onClickAccion(e, 1)}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-group ">
                            <div className="input-group-prepend">
                                <span className="input-group-text font-weight-bold">MONTO TOTAL</span>

                            </div>
                            <input type="text" className="form-control" aria-describedby="basic-addon1" readOnly value={currencyFormat(this.state.montoTotal)}></input>
                        </div>
                        <div className="input-group ">
                            <div className="input-group-prepend">
                                <span className="input-group-text font-weight-bold">TOTAL AHORRO</span>
                            </div>
                            <input type="text" className="form-control" aria-describedby="basic-addon1" readOnly value={currencyFormat(this.state.ahorroTotal)}></input>
                        </div>
                    </div>
                </div>

            </div>
        </div>);
    }
}

export default Modulo
