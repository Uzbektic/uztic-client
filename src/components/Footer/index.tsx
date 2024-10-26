import React from 'react';
import SocialLinks from '../SocialLinks';
import CalculateCost from '../CalculateCost';
import ApplyVisa from '../ApplyVisa';

const Footer = () => {
  return (
    <div className="apply-visa">
      <SocialLinks />
      <CalculateCost />
      <ApplyVisa />
    </div>
  );
};

export default Footer;
