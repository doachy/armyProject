import React from 'react';
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