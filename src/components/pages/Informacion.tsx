import React, { useEffect } from 'react';
import styles from './Informacion.module.css';

const Informacion: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('informacion-body');
    return () => {
      document.body.classList.remove('informacion-body');
    };
  }, []);

  return (
    <div className={styles.container2}>
      <div className={styles.area1}>
        <div className={styles.imagen}>
          <img src={`${process.env.PUBLIC_URL}/img/terapeuta2.png`}alt="Descripción de la imagen" />
        </div>
          <div className={styles.texto}>
            <h1>Informacio GeneraL</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quos quae maxime voluptas optio, expedita id quas consequatur corrupti earum nemo voluptatem sint dolor nihil dicta veritatis, distinctio sapiente omnis?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat atque alias tenetur reiciendis nulla? Repellat, optio maxime! Odit soluta, autem mollitia eius quod doloribus. Vitae deleniti aliquam tempora consequatur voluptates.</p>
          </div>

      </div>
      <div className={styles.area2}>
        
        <div className={styles.texto}>
        <h1>Informacio GeneraL</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quos quae maxime voluptas optio, expedita id quas consequatur corrupti earum nemo voluptatem sint dolor nihil dicta veritatis, distinctio sapiente omnis?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat atque alias tenetur reiciendis nulla? Repellat, optio maxime! Odit soluta, autem mollitia eius quod doloribus. Vitae deleniti aliquam tempora consequatur voluptates.</p>
        </div>
        <div className={styles.imagen}>
          <img src="/img/terapeuta2.png" alt="Descripción de la imagen" />
        </div>
      </div>
      <div className={styles.area3}>
        <div className={styles.im3}></div>
        <div className={styles.t3}></div>
      </div>
      <div className={styles.area4}>
        <div className={styles.im4}></div>
        <div className={styles.t4}></div>
      </div>
      <div className={styles.area5}>
        <div className={styles.im5}></div>
        <div className={styles.t5}></div>
      </div>
      <div className={styles.area6}>
        <div className={styles.im6}></div>
        <div className={styles.t6}></div>
      </div>
      <div className={styles.area7}>
        <div className={styles.im7}></div>
        <div className={styles.t7}></div>
      </div>
      <div className={styles.area8}>
        <div className={styles.im8}></div>
        <div className={styles.t8}></div>
      </div>
      <div className={styles.area9}>
        <div className={styles.im9}></div>
        <div className={styles.t9}></div>
      </div>
    </div>
  );
};

export default Informacion;
