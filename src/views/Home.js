import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

import ReactWhatsapp from "react-whatsapp";

import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FloatingWhatsApp phoneNumber="+59894694373" statusMessage={"Disponible"} accountName={"Velox"} chatMessage={"Buenas! En que podemos ayudarte?"}
      placeholder={"Escriba su consulta"} style={{height: 420}}
      />

    </>
  );
}

export default Home;