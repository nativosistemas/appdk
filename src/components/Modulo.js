import React, { Component } from "react";


class Modulo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    refrescarCantidad = () => {
        let cantidad = this.props.getCantidad(this.props.modulo);
        this.setState({ count: cantidad });
    }

    onClickAccion = (e, pValor) => {
        e.preventDefault();
        let cantidad = this.state.count;
        if (cantidad === 0 && pValor === -1)
            return null;
        cantidad += pValor;
        this.setState({ count: cantidad }, () => { this.props.setCantidad(this.props.modulo, cantidad); })
    }
    FormatoDecimalConDivisorMiles = (pValor) =>{
        var resultado = pValor;
        var isNroNegativo = false;
        if (pValor) {
            if (pValor.toString().indexOf('-') !== -1) {
                isNroNegativo = true;
            }
            var nroBase = pValor.toString().replace('-', '').split('.');
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
     currencyFormat = (num) =>{
        return '$' + this.FormatoDecimalConDivisorMiles(num);
     }

    render() {
        const { moduloDetalle } = this.props.modulo;
        return (<div className="card cardModulo">
            <div className="card-body">
                {moduloDetalle.length > 0 &&
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Producto</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Precio c/ Desc.</th>
                                <th scope="col">Cant. Unid.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {moduloDetalle.map((detalle, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{detalle.producto}</td>
                                        <td>{detalle.descripcion}</td>
                                        <td>{this.currencyFormat(detalle.precio)}</td>
                                        <td>{this.currencyFormat(detalle.precioDescuento)}</td>
                                        <td>{detalle.cantidadUnidades}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                }
            </div>
            <div className="card-footer ">
                <div className=" row justify-content-center">
                    <div className="input-group col-xs-6 col-sm-6 col-md-3 col-lg-2">
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
        </div>);
    }
}

export default Modulo
