import React from 'react';
import Common from './Common';
import web from "../src/images/home.jpg";

const Home = () => {
    return(
        <>
      <Common name="Grow Your Talent With" imgsrc={web} visit="/about" btname="Get Started" />
        </>    
    );
};

export default Home;
