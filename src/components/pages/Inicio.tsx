import React, { useEffect } from 'react';
import SectionDivider from '../SectionDivider';
import './inicio.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Inicio: React.FC = () => {
  useEffect(() => {
    // Agrega la clase que bloquea el scroll al cargar la vista
    document.body.classList.add('no-scroll', 'inicio-body');

    // Limpia las clases al salir de esta vista
    return () => {
      document.body.classList.remove('no-scroll', 'inicio-body');
    };
  }, []);

  return (
    <>
      <SectionDivider />

      <div className='container2'>
        <div className='carrousel1'>
          <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
            <div>
            <img src={`${process.env.PUBLIC_URL}/img/imagen1.png`} alt="Imagen 1" />

            </div>
            <div>
              <img src={`${process.env.PUBLIC_URL}/img/Baby 1.png`} alt="Imagen 2" />
            </div>
            <div>
              <img src="/img/Baby 1.png" alt="Imagen 3" />
            </div>
          </Carousel>
        </div>

        <div className='parte2'>
          <h1>Página de Inicio</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>

        <div className="side-button">
          
        </div>
      </div>
    </>
  );
};

export default Inicio;
