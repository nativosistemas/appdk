import React, { useState, useEffect, useRef } from 'react';

function Laboratorio() {
    const [laboratoriosArray, setLaboratoriosArray] = useState([]);
    let url = 'http://www.kellerhoff.com.ar:84/api/'

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

    return (
        <div className="app container-fluid">
            <div className="alert alert-primary text-center  text-uppercase" ><h2>Laboratorios</h2></div>
            <div className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {laboratoriosArray.map((laboratorio, i) => {
                        return (<>


                            <div className="carousel-item active">
                                <img className="d-block w-100" src={url + 'Image?r=laboratorio&n=' + laboratorio.imagen + '&an=1920&al=700&c=FFFFFF' } alt="First slide"></img>
                            </div>


                        </>);
                    })}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Laboratorio;
