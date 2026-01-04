import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import FounderStory from '../components/Home/FounderStory';
import WhatWeBuild from '../components/Home/WhatWeBuild';
import OurApproach from '../components/Home/OurApproach';
import OurVision from '../components/Home/OurVision';
import WhyItMatters from '../components/Home/WhyItMatters';
import OurCommitment from '../components/Home/OurCommitment';
import CTASection from '../components/Home/CTASection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FounderStory />
      <WhatWeBuild />
      <OurApproach />
      <OurVision />
      <WhyItMatters />
      <OurCommitment />
      <CTASection />
    </>
  );
};

export default HomePage;

