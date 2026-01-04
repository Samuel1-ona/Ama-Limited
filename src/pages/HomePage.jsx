import React from 'react';
import { motion } from 'framer-motion';
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HeroSection />
      <AboutSection />
      <FounderStory />
      <WhatWeBuild />
      <OurApproach />
      <OurVision />
      <WhyItMatters />
      <OurCommitment />
      <CTASection />
    </motion.div>
  );
};

export default HomePage;

