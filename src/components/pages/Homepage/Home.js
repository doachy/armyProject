import React from 'react';
import HeroSection from '../..//HeroSection.js';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data.js';
import Pricing from '../../Pricing.js';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;