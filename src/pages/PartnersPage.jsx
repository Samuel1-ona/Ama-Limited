import React from 'react';
import PartnerHero from '../components/Partners/PartnerHero';
import WhyPartner from '../components/Partners/WhyPartner';
import PartnerTypes from '../components/Partners/PartnerTypes';
import PartnerSupport from '../components/Partners/PartnerSupport';
import PartnerJourney from '../components/Partners/PartnerJourney';
import PartnerCTA from '../components/Partners/PartnerCTA';

const PartnersPage = () => {
  return (
    <>
      <PartnerHero />
      <WhyPartner />
      <PartnerTypes />
      <PartnerSupport />
      <PartnerJourney />
      <PartnerCTA />
    </>
  );
};

export default PartnersPage;

