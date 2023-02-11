import React from "react";
import ReactDOM from "react-dom";
import Carousel from 'react-bootstrap/Carousel';
//import ItemCarrusel from './ItemCarrusel.jsx';
import "./pruebaCarrusel.css"

function PruebaCarrusel() {
  
  return (
    <div className="container-fluid col-6">
      <h2>GALERIA DE ACTIVIDADES</h2>
        <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100" 
          src="https://www.vetcomunicaciones.com.ar/uploadsfotos/animales_domesticos.jpg"
          alt="First slide"
          height="500"
        />
        <Carousel.Caption>
          <h2>First slide label</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" 
          src="https://s1.eestatic.com/2020/02/10/como/agua-vacunas-infecciones_466466419_144847067_1706x960.jpg"
          alt="First slide"
          height="500"
        />
        <Carousel.Caption>
          <h2>First slide label</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" 
          src="https://www.dogalize.com/wp-content/uploads/2017/06/rabbit-1422882_640.jpg"
          alt="First slide"
          height="500"
        />
        <Carousel.Caption>
          <h2>First slide label</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>   
        </Carousel>
    </div>
  );
}

export default PruebaCarrusel;