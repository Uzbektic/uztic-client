import React from 'react';
import SpeedTrains from './SpeedTrains';
import RegularTrains from './RegularTrains';
import Guide from './Guide';
import Car from './Car';
import MiniBus from './MiniBus';

const AdditionalServices = () => {
  return (
    <>
      <SpeedTrains />
      <RegularTrains />
      <Guide />
      <Car />
      <MiniBus />
    </>
  );
};

export default AdditionalServices;
