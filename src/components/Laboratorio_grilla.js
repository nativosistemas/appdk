import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";

function Laboratorio_grilla() {
    const [laboratoriosArray, setLaboratoriosArray] = useState([]);
    const [activeItem, setActiveItem] = useState(0);
    const [activeLabNombre, setActiveLabNombre] = useState(false);
    const [activeLabFlechas, setActiveLabFlechas] = useState(true);
    let url = 'https://api.kellerhoff.com.ar/api/'
    let history = useHistory();
    useEffect(() => {
        cargarDatosInicio_DesdeLocalStorage();
        if (navigator.onLine) {
            cargarDatosInicio_DesdeApi();
        }
    }, []);
    function cargarDatosInicio_DesdeApi() {
        fetch(url + 'Laboratorio')
            .then((response) => {
                return response.json()
            })
            .then((pLaboratorios) => {
                localStorage.setItem('l_laboratorios', JSON.stringify(pLaboratorios));
            }).then(() => { cargarDatosInicio_DesdeLocalStorage(); })
            .catch(error => {
                cargarDatosInicio_DesdeLocalStorage();
            });
    }
    function cargarDatosInicio_DesdeLocalStorage() {
        var l_laboratorios = localStorage.getItem('l_laboratorios') || '';
        if (l_laboratorios !== '') {
            l_laboratorios = JSON.parse(l_laboratorios);
        }
        if (!Array.isArray(l_laboratorios)) {
            l_laboratorios = [];
        }
        setLaboratoriosArray(l_laboratorios);
    }
    function onClickActiveItem(e, pValor) {
        e.preventDefault();
        var index = activeItem;
        if (activeItem === 0 && pValor === -1)
            index = laboratoriosArray.length - 1;
        else if (activeItem === laboratoriosArray.length - 1 && pValor === 1)
            index = 0;
        else
            index = activeItem + pValor
        setActiveItem(index);
    }
    function onClickGoToLaboratorio(e) {
        e.preventDefault();
        history.push("/promociones");
    }
    return (
        <div className="app container-fluid">
            <div className="alert alert-primary text-center  text-uppercase" ><h2>Laboratorios</h2></div>

            <div className="row">
           
                    {laboratoriosArray.map((laboratorio, i) => {
                        return (<>
                           <div className="col-4" onClick={(e) => onClickGoToLaboratorio(e)}>
                                {laboratorio.imagen == null && <img className="d-block w-100 img-fluid" src={url + 'Image?r=laboratorio&n=' + 'amissingthumbnail0.png' + '&an=400&al=400&c=FFFFFF'} alt={laboratorio.nombre}></img>}
                                {laboratorio.imagen != null && <img className="d-block w-100 img-fluid" src={url + 'Image?r=laboratorio&n=' + laboratorio.imagen + '&an=400&al=400&c=FFFFFF'} alt={laboratorio.nombre}></img>}
                                {activeLabNombre &&
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="carousel-captio-h5">{laboratorio.nombre}</h5>
                                    </div>
                                }
                            </div>
                        </>);
                    })}
           
            </div>




        </div>
    );
}

export default Laboratorio_grilla;
