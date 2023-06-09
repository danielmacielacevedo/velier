import React, { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
// import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// import '../../styles/splide-custom.css'

export default function Benefits() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const splide = new Splide(sliderRef.current, {
      type: 'loop',
      perPage: 1,
    });

    splide.mount();

    const autoScroll = () => {
      splide.go('>');
    };

    const interval = setInterval(autoScroll, 10000);

    return () => {
      clearInterval(interval);
      splide.destroy();
    };
  }, []);
  
    return (
        <>
            <div className="BenefitsContainer">
                <p className='BenefitsTitle'>¿Por qué tener una web?</p>
                <div ref={sliderRef} className="splide">
                <div className="splide__track">
                    <ul className="splide__list">
                    <li className="splide__slide">
                        <article>
                            <div className='Card'>
                                <h3>Presencia en línea</h3>
                                <p>Te permite estar disponible las 24 horas, los 7 días de la semana, lo que facilita que los clientes te encuentren y obtengan información sobre tu negocio en cualquier momento.</p>
                            </div>
                        </article>
                    </li>
                    <li className="splide__slide">
                        <article>
                            <div className='Card'>
                                <h3>Visibilidad</h3>
                                <p>Un sitio web optimizado mejora tu visibilidad en los motores de búsqueda. Ademas, te permite mostrar información como teléfono, horarios de atención, ubicación, etc.</p>
                            </div>
                        </article>
                    </li>
                    <li className="splide__slide">
                        <article>
                            <div className='Card'>
                                <h3>Expansión</h3>
                                <p>Incluso si tu negocio es local, un sitio web te permite llegar a un público más amplio y atraer a personas que pueden no haber conocido tu empresa de otra manera.</p>
                                {/* <p>Puedes llegar a clientes potenciales en cualquier parte del mundo, expandiendo tu mercado más allá de tu ubicación física.</p> */}
                            </div>
                        </article>
                    </li>
                    <li className="splide__slide">
                        <article>
                            <div className='Card'>
                                <h3>Confianza</h3>
                                <p>Un sitio web profesional y actualizado establece la credibilidad de tu negocio. Los clientes pueden obtener confianza al saber que eres un negocio legítimo y confiable.</p>
                            </div>
                        </article>
                    </li>
                    <li className="splide__slide">
                        <article>
                            <div className='Card'>
                                <h3>Competencia</h3>
                                <p>Te mantiene competitivo en el mercado actual. Una estrategia respaldada por un sitio web bien diseñado puede marcar la diferencia en la elección de los clientes.</p>
                            </div>
                        </article>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            <style jsx>{`
                .BenefitsContainer
                {
                    position: absolute;
                    bottom: 0;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: auto;
                    gap: 20px;
                    text-align: center;
                }
                h3,
                p
                {
                    color: #fff;
                }
                .splide__slide article
                {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: auto;
                    gap: 20px;
                    padding: 0 56px 30px;
                } 
                .Card
                {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 100%;
                    height: auto;
                    padding: 20px 20px 24px 20px;
                    gap: 10px;
                    border-radius: 20px;
                    background-color: var(--grey-color);
                    backdrop-filter: blur(10px);
                }
                .Card p
                {
                    display: inline-flex;
                    align-self: center;
                    font-size: 14px;
                    line-height: 20px;
                    text-align: justify;
                }
            `}</style>
        </>
    );
  }
  