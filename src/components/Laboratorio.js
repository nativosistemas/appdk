import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";

function Laboratorio() {
    const [laboratoriosArray, setLaboratoriosArray] = useState([]);
    const [activeItem, setActiveItem] = useState(0);
    const [activeLabNombre, setActiveLabNombre] = useState(false);
    const [activeLabFlechas, setActiveLabFlechas] = useState(true);
    let url = 'https://api.kellerhoff.com.ar/api/'
    let history = useHistory();
    useEffect(() => {
        //localStorage.setItem('l_laboratorios', JSON.stringify([{ "id": 1, "nombre": "ROEMMERS", "imagen": "aroemmers.jpg" }, { "id": 2, "nombre": "GENOMMA", "imagen": "agenomma.jpg" }, { "id": 3, "nombre": "DR LENOX", "imagen": "aLenoxLogo09.png" }, { "id": 4, "nombre": "DENVER FARMA", "imagen": "aDENVERFARMA0.png" }, { "id": 5, "nombre": "LA ROCHE POSAY", "imagen": "alaroche.png" }, { "id": 6, "nombre": "SOUBEIRAN CHOBET", "imagen": null }, { "id": 7, "nombre": "BAYER", "imagen": "abayer.png" }]));
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
    // <div className="carousel-item active">
    function onClickActiveItem(e, pValor) {
        e.preventDefault();
        /* if ((activeItem === 0 && pValor === -1)
             || (activeItem === laboratoriosArray.length - 1 && pValor === 1))
             return null;*/
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
            { /* <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={activeLabNombre} onClick={() => setActiveLabNombre(!activeLabNombre)}  ></input>
                <label className="form-check-label" for="exampleCheck1">Nombre</label>
            </div>
            <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" id="exampleCheck2" checked={activeLabFlechas} onChange={() => setActiveLabFlechas(!activeLabFlechas)}></input>
                <label className="form-check-label" for="exampleCheck2">Flechas</label>
            </div> */}
            <div className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {laboratoriosArray.map((laboratorio, i) => {
                        return (<>
                            <div className={`carousel-item ${activeItem === i ? " active" : ""}`} onClick={(e) => onClickGoToLaboratorio(e)}>


                                {laboratorio.imagen == null && <img className="d-block w-100 img-fluid" src={url + 'Image?r=laboratorio&n=' + 'amissingthumbnail0.png' + '&an=1280&al=950&c=FFFFFF'} alt={laboratorio.nombre}></img>}
                                {laboratorio.imagen != null && <img className="d-block w-100 img-fluid" src={url + 'Image?r=laboratorio&n=' + laboratorio.imagen + '&an=1280&al=950&c=FFFFFF'} alt={laboratorio.nombre}></img>}

                                { /*
                                {laboratorio.imagen == null && <img className="d-block w-100 img-fluid" src={'https://nativosistemas.github.io/img/' + 'amissingthumbnail0.png'} alt={laboratorio.nombre}></img>}
                                {laboratorio.imagen != null && <img className="d-block w-100 img-fluid" src={'https://nativosistemas.github.io/img/' + laboratorio.imagen} alt={laboratorio.nombre}></img>}
                                  */}
                                {activeLabNombre &&
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="carousel-captio-h5">{laboratorio.nombre}</h5>
                                    </div>
                                }
                            </div>
                        </>);
                    })}
                </div>
                {activeLabFlechas &&
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" onClick={(e) => onClickActiveItem(e, -1)} >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                }
                {activeLabFlechas &&
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" onClick={(e) => onClickActiveItem(e, 1)} >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                }
            </div>
        </div>
    );
}

export default Laboratorio;
