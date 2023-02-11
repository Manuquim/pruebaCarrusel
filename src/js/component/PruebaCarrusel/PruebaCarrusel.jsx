import React from "react";
import ReactDOM from "react-dom";
import Carousel from 'react-bootstrap/Carousel';
import "./pruebaCarrusel.css"

function PruebaCarrusel() 
{
  const itemsInfo=[
    {
      url: "https://www.vetcomunicaciones.com.ar/uploadsfotos/animales_domesticos.jpg",
      title:"Club Social",
      caption: "Organizamos reuniones y pijamadas nocturnas",
      interval: "3000",
      height: "400"
    },
    {
      url: "https://cdn.pixabay.com/photo/2019/11/07/08/40/puppy-4608266_1280.jpg",
      title:"Paseos",
      caption: "Programa con el cuidador la duración del mejor momento del dia para tu mascota ",
      interval: "3000",
      height: "400"
    },
    {
      url: "https://www.dogalize.com/wp-content/uploads/2017/06/rabbit-1422882_640.jpg",
      title:"Adiestramiento",
      caption: "Enseña a tu macota con ayuda de un cuidador especializado",
      interval: "3000",
      height: "400"
    },
    {
      url: "//cdn.pixabay.com/photo/2021/01/25/01/35/flying-dog-5946987_1280.jpg",
      title:"Busca",
      caption: "Encuentra entre nuestros cuidadores el mejor servicio especializado para tu mascota",
      interval: "3000",
      height: "400"
    }
  ];
  
  return (
    <div className="container-fluid col-6">
      <h2>GALERIA DE ACTIVIDADES</h2>
        <Carousel variant="dark">
        {
          itemsInfo.map((item,i) =>
          {
            return <Carousel.Item interval={item.interval}>
                      <img
                        className="d-block w-100" 
                        src={item.url}
                        alt="slide"
                        height={item.height}
                      />
                      <Carousel.Caption>
                        <h2>{item.title}</h2>
                        <p>{item.caption}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
          })
        }    
        </Carousel>
    </div>
  );
}

export default PruebaCarrusel;