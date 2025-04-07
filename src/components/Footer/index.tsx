import React from 'react';
import SocialLinks from '../SocialLinks';
import PlanTour from '../PlanTour';
import ApplyVisa from '../ApplyVisa';
import Chat from '../Chat';

const Footer = () => {
  return (
    <>
      <div className="apply-visa">
        <SocialLinks />
        <PlanTour />
        <ApplyVisa />
      </div>
      <div style={{ position: 'absolute', top: 190, left: 120 }}>
        <Chat />
      </div>
    </>
  );
};

export default Footer;
