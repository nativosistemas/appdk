import React, { Component } from "react";
import { currencyFormat,getPrecioModulo} from './utils';

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
        let cantidad = this.props.getCantidad(this.props.modulo);
        this.setState({ count: cantidad }, () => { this.RefrescarMontosAhorro(); });
    }

    onClickAccion = (e, pValor) => {
        e.preventDefault();
        let cantidad = this.state.count;
        if (cantidad === 0 && pValor === -1)
            return null;
        cantidad += pValor;
        this.setState({ count: cantidad }, () => { this.props.setCantidad(this.props.modulo, cantidad); this.RefrescarMontosAhorro(); })
    }
    RefrescarMontosAhorro = () => {
        let montoTotal_detalle = 0;
        let montoTotalDescuento_detalle = 0;

        this.props.modulo.moduloDetalle.forEach(element => {
            if (element.cantidadUnidades > 0) {
                if (element.precio > 0) {
                    montoTotal_detalle += element.precio * element.cantidadUnidades;
                }
                if (element.precioDescuento > 0) {
                    montoTotalDescuento_detalle += element.precioDescuento * element.cantidadUnidades;
                }
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
    /*
    FormatoDecimalConDivisorMiles = (pValor) => {
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
    currencyFormat = (num) => {
        return '$' + this.FormatoDecimalConDivisorMiles(num);
    }
*/
    render() {
        const { moduloDetalle } = this.props.modulo;
        return (<div className={this.props.isPar ? 'card cardModulo moduloCssPar' : 'card cardModulo '}>
            <div className="card-body">
                {moduloDetalle.length > 0 &&
                    <table className="table textTable">
                        <thead>
                            <tr>
                                <th scope="col">Producto</th>
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
                                        <td>{currencyFormat(detalle.precio)}</td>
                                        <td>{currencyFormat(getPrecioModulo(detalle,this.props.farmacia))}</td>
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
                                <input type="number" className="form-control" placeholder="Cantidad" value={this.state.count} readOnly />
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
