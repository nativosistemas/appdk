import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";
import NavPrincipal from './NavPrincipal'
import { getFarmaciaCurrent} from './utils';

function Laboratorio() {
    const [laboratoriosArray, setLaboratoriosArray] = useState([]);
    const [activeItem, setActiveItem] = useState(0);
    const [activeModoCarrusel, setActiveModoCarrusel] = useState(false);
    const [activeLabNombre, setActiveLabNombre] = useState(false);
    const [activeLabFlechas, setActiveLabFlechas] = useState(true);
    //const [isFarmacia, setIsFarmacia] = useState(false);
    let url = 'https://api.kellerhoff.com.ar/api/'
    let history = useHistory();
    useEffect(() => {
        cargarDatosInicio_DesdeLocalStorage();
        if (navigator.onLine) {
            cargarDatosInicio_DesdeApi();
        }
        //localStorage.setItem('l_pendienteGrabados', JSON.stringify([]));
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
    function onClickGoToLaboratorio(e, pCuit) {
        e.preventDefault();
        history.push("/promociones/" + pCuit);
    }
    function onClickIrCarrito(e) {
        e.preventDefault();
        history.push("/carrito");
    }
    return (
        <div className="app container-fluid">
            <div className="alert alert-primary text-center  text-uppercase" ><h2>Laboratorios</h2></div>
            <NavPrincipal  ></NavPrincipal>
            {
                <><div className="float-right">
                    <button className="btn btn-success" onClick={(e) => onClickIrCarrito(e)}>Ir al Carrito</button></div>
                    <br></br></>}
            <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" id="checkModoCarrusel" checked={activeModoCarrusel} onClick={() => setActiveModoCarrusel(!activeModoCarrusel)}  ></input>
                <label className="form-check-label" for="checkModoCarrusel">Carrusel</label>
            </div>
            { /* <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={activeLabNombre} onClick={() => setActiveLabNombre(!activeLabNombre)}  ></input>
                <label className="form-check-label" for="exampleCheck1">Nombre</label>
            </div>
            <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" id="exampleCheck2" checked={activeLabFlechas} onChange={() => setActiveLabFlechas(!activeLabFlechas)}></input>
                <label className="form-check-label" for="exampleCheck2">Flechas</label>
            </div> */}
            {!activeModoCarrusel &&
                <div className="row">
                    {laboratoriosArray.map((laboratorio, i) => {
                        return (<>
                            <div className="col-4" onClick={(e) => onClickGoToLaboratorio(e, laboratorio.id)}>
                                {/*
                                {laboratorio.imagen == null && <img className="d-block w-100 img-fluid" src={url + 'Image?r=laboratorio&n=' + 'amissingthumbnail0.png' + '&an=400&al=400&c=FFFFFF'} alt={laboratorio.nombre}></img>}
                                {laboratorio.imagen != null && <img className="d-block w-100 img-fluid" src={url + 'Image?r=laboratorio&n=' + laboratorio.imagen + '&an=400&al=400&c=FFFFFF'} alt={laboratorio.nombre}></img>}
                                */}
                                <img className="d-block w-100 img-fluid" src={`data:image/jpeg;base64,${laboratorio.imagenBase64}`}></img>
                                {activeLabNombre &&
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="carousel-captio-h5">{laboratorio.nombre}</h5>
                                    </div>
                                }
                            </div>
                        </>);
                    })}

                </div>}
            {activeModoCarrusel &&
                <div className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {laboratoriosArray.map((laboratorio, i) => {
                            return (<>
                                <div className={`carousel-item ${activeItem === i ? " active" : ""}`} onClick={(e) => onClickGoToLaboratorio(e, laboratorio.id)}>

                                    {/*
                                    {laboratorio.imagen == null && <img className="d-block w-100 img-fluid" src={url + 'Image?r=laboratorio&n=' + 'amissingthumbnail0.png' + '&an=1280&al=950&c=FFFFFF'} alt={laboratorio.nombre}></img>}
                                    {laboratorio.imagen != null && <img className="d-block w-100 img-fluid" src={url + 'Image?r=laboratorio&n=' + laboratorio.imagen + '&an=1280&al=950&c=FFFFFF'} alt={laboratorio.nombre}></img>}
                                */}
                                    <img className="d-block w-100 img-fluid" src={`data:image/jpeg;base64,${laboratorio.imagenBase64}`}></img>
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
            }
        </div>
    );
}

export default Laboratorio;
