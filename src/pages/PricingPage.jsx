import React from 'react';
import PricingHero from '../components/Pricing/PricingHero';
import PricingOverview from '../components/Pricing/PricingOverview';
import PricingTiers from '../components/Pricing/PricingTiers';
import AddOns from '../components/Pricing/AddOns';
import PricingCTA from '../components/Pricing/PricingCTA';

const PricingPage = () => {
  return (
    <>
      <PricingHero />
      <PricingOverview />
      <PricingTiers />
      <AddOns />
      <PricingCTA />
    </>
  );
};

export default PricingPage;

