import React, { Component } from "react";
import Imagen from "./Imagen";
import Paginacion from "./Paginacion"

class Resultado extends Component {

    mostrarImagenes = () => {
        const imagenes = this.props.imagenes;

        if (imagenes.length === 0) return null;


        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {imagenes.map(imagen => (<Imagen key={imagen.id}
                        imagen={imagen}></Imagen>))}
                </div>
                <Paginacion
                        paginaAnterior={this.props.paginaAnterior}
                        paginaSiguiente={this.props.paginaSiguiente}
                ></Paginacion>
            </React.Fragment>
        )
    }

    render() {
        return (
            <>
                {this.mostrarImagenes()}
            </>
        );
    }

}

export default Resultado