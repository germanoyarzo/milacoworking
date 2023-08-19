import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton.js'
import image from '../images/1.jpeg'
import image2 from '../images/2.jpeg'
import image3 from '../images/3.jpeg'
import image4 from '../images/4.jpeg'
import banner from '../images/banner.jpg'
import { Carousel as CarouselLib } from "react-responsive-carousel";
//import { Carousel } from 'react-bootstrap';
import Carousel from "./Carousel";
import ImageSlider from "./ImageSlider";
import { Row, Col } from "react-bootstrap";

const Image = styled.img`
    height: 100%;
    width: 50%;
`



const slides = [
  {
    src: image,
    title: "A nice view",
  },
  {
    src: image2,
    title: "Green Bamboo",
  },
  {
    src:image3,
    title: "dude on a laptop",
  },
  {
    src: image4,
    title: "Welcome",
  }
];
const Container =  styled.div`
  position: relative;
  text-align: center;
  padding-top: 25px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #e0e0e0;
  @media (max-width: 768px) {
    // Estilos para dispositivos con un ancho máximo de 768px (por ejemplo, tablets y teléfonos en posición horizontal)
    background-color: #e0e0e0;
    // Ajusta los estilos según lo necesario para dispositivos medianos
  }

  @media (max-width: 480px) {
    // Estilos para dispositivos con un ancho máximo de 480px (por ejemplo, teléfonos en posición vertical)
    background-color: #d0d0d0;
    // Ajusta los estilos según lo necesario para dispositivos pequeños
  }
`

const ContainerImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%; /* Ajusta el ancho según tus necesidades */
  height: 90%; /* Ajusta la altura según tus necesidades */
  max-width: 100%; /* Limita el ancho máximo al 100% del tamaño de la pantalla */
  max-height: 100%; /* Limita la altura máxima al 100% del tamaño de la pantalla */
  background-color: #f0f0f0;
  
  @media (max-width: 768px) {
    /* Estilos para dispositivos con un ancho máximo de 768px (por ejemplo, tablets y teléfonos en posición horizontal) */
    background-color: #e0e0e0;
    /* Ajusta los estilos según lo necesario para dispositivos medianos */
  }

  @media (max-width: 480px) {
    /* Estilos para dispositivos con un ancho máximo de 480px (por ejemplo, teléfonos en posición vertical) */
    background-color: #d0d0d0;
    /* Ajusta los estilos según lo necesario para dispositivos pequeños */
  }
`;
const Text= styled.div`
/* ... estilos existentes ... */
  font-size: 1.5rem; /* Ajusta el tamaño de fuente para dispositivos grandes */

  @media (max-width: 768px) {
    /* Estilos para pantallas medianas, tablets y móviles en posición horizontal */
    font-size: 1rem; /* Ajusta el tamaño de fuente para dispositivos medianos */
  }

  @media (max-width: 480px) {
    /* Estilos para pantallas pequeñas, móviles en posición vertical */
    font-size: 0.8rem; /* Ajusta el tamaño de fuente para dispositivos pequeños */
  } 
`
const CarouselContainer = styled.div`
  max-width: 90vw; /* Establece el ancho máximo del contenedor para pantallas grandes */
  margin: 0 auto; /* Centra el contenedor horizontalmente */
  padding: 0; /* Ajusta el padding según tus necesidades */
  aspect-ratio: 1/1; /* Establece la relación de aspecto para crear un cuadrado */
  display: flex; /* Utiliza flexbox para centrar el contenido */
  justify-content: center; /* Centra horizontalmente el contenido */
  align-items: center; /* Centra verticalmente el contenido */

  @media (max-width: 768px) {
    /* Estilos para pantallas medianas, tablets y móviles en posición horizontal */
    max-width: 80vw; /* Reduzca el ancho máximo para pantallas medianas */
  }

  @media (max-width: 480px) {
    /* Estilos para pantallas pequeñas, móviles en posición vertical */
    max-width: 70vw; /* Reduzca el ancho máximo para pantallas pequeñas */
    padding: 0.5rem; /* Ajusta el padding para pantallas pequeñas */
  }
`;

function Services() {
  return (
    <section id="home">
    <Container>
      {/* <ContainerImage>
        <img src={banner} />
      </ContainerImage> */}
      <Text>
      <div>
        <div class="text"><h1>We are Mila Coworking</h1></div>
      </div>  
        <p>My fullname is Saidnazarova Odinanabonu.
           I'm 15 years old. I study 249-school in 10th grade.
           I am a front-end web developer. I can make the website more, more interactive with web animation
           I study at Web Brain Academy group G5. When I first came to web brain, I had no knowledge of programming.
           But now with the help of strong aspirations and teachers, my level of knowledge has greatly increased and I can freely create web site views that are used in our daily lives
          
        </p>
      </Text>
      <CarouselContainer>
        <Carousel images={slides} />
      </CarouselContainer>
    </Container>
    </section>

  )
}

export default Services