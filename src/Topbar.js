import React from 'react';



const Topbar = () =>
    (

        <div className="main-banner img-container l-section" id="main-banner">
            <div className="ed-grid lg-grid-6">
                <div className="lg-cols-4 lg-x-2">
                    <img className="main-banner__img" src="https://www.info-computer.com/blog/wp-content/uploads/2017/07/programas-ordenador-1000x385.jpg" alt="imagens" />
                    <div className="main-banner__data s-center">
                        <p className="t2 s-mb-0">Título del banner</p>
                        <p> Subtítulo del banner</p>
                        <a href="https//www.google.com" className="button">Botón del banner</a>
                    </div>
                </div>
            </div>
        </div>
    )

export default Topbar;