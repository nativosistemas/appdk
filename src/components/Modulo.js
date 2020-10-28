import React, { Component } from "react";


class Modulo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    cantidadRef = React.createRef();
    onClickSumar = (e) => {
        e.preventDefault();
        let cantidad = this.state.count + 1;
        this.setState({ count: cantidad });
        //cantidad = cantidad + 1;
        //this.cantidadRef.current.value = cantidad;
        this.props.cargarCantidad(this.props.modulo, cantidad);
    }
     refrescarCantidad =() => {
        let cantidad = this.props.getCantidad(this.props.modulo);
        this.setState({ count: cantidad });
     }
     componentDidMount() {
      /*  this.timerID = setInterval(
          () => this.refrescarCantidad(),
          1000
        );*/
        //this.refrescarCantidad();
      }
    onClickRestar = (e) => {
        let cantidad = this.state.count;
        if (cantidad === 0)
            return null;
        cantidad -= 1;
        this.setState({ count: cantidad })
        this.props.cargarCantidad(this.props.modulo, cantidad);
    }
    render() {

        // const { nombre, descripcion, laboratorio, moduloDetalle } = this.props.modulo;
        //    {moduloDetalle.map(detalle => (<p className="card-text">{detalle.producto}</p>))}
        const { nombre, moduloDetalle } = this.props.modulo;
        return (<div className="card cardModulo ">
            <div className="card-header">
                <h5 className="card-title">{nombre}</h5>
            </div>
            <div className="card-body">

                {moduloDetalle.map((detalle, i) => (<p key={detalle.id} className="card-text">{detalle.producto}</p>))}

            </div>
            <div className="card-footer ">
                <div className=" row justify-content-center">
                    <div className="input-group col-xs-6 col-sm-6 col-md-3 col-lg-2">
                        <div className="input-group-prepend">
                            <button type="button" className="btn btn-secondary" onClick={this.onClickRestar}>-</button>
                        </div>
                        <input ref={this.cantidadRef} type="number" className="form-control" placeholder="Cantidad" value={this.state.count} readOnly />
                        <div className="input-group-prepend">
                            <button type="button" className="btn btn-secondary" onClick={this.onClickSumar}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }

}

export default Modulo
