import React from 'react';
import BannerSection from '../../BannerSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
// import Pricing from '../../Pricing';

function Home() {
  return (
    <>
      <BannerSection {...homeObjOne} />
      <BannerSection {...homeObjThree} />
      <BannerSection {...homeObjTwo} />
      {/* <Pricing /> */}
      <BannerSection {...homeObjFour} />
    </>
  );
}

export default Home;
