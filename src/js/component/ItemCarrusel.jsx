import React from "react";
import ReactDOM from "react-dom";
import Carousel from 'react-bootstrap/Carousel';

function ItemCarrusel (props) 
{
    return (
       <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100" 
                src={props.url} 
                alt="First slide"
                height={props.height}
            />
            <Carousel.Caption>
                <h2>First slide label</h2>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        
        
    )
};

export default ItemCarrusel;