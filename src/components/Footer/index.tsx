import React from 'react';
import SocialLinks from '../SocialLinks';
import PlanTour from '../PlanTour';
import ApplyVisa from '../ApplyVisa';
import Chat from '../Chat';

const Footer = () => {
  return (
    <div className="apply-visa">
      <SocialLinks />
      <PlanTour />
      <ApplyVisa />
      {/* <Chat /> */}
    </div>
  );
};

export default Footer;
