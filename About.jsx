import React from 'react';
import Common from './Common.jsx';
import web from "../src/images/about.png";

const About = () => {
    return(
        <>
      <Common name="Welcome To about page" imgsrc={web} visit="/contact" btname="Contact Now" />
        </>    
    );
};

export default About;
