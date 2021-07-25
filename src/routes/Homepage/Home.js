import React from 'react';
import HeroSection from '../../components/HeroSection.js';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data.js';
import Pricing from '../../components/Pricing.js';
import HeroSection from 'components/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from 'routes/Home/data';
import Pricing from 'components/Pricing';

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