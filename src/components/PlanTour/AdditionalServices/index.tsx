import React from 'react';
import SpeedTrains from './SpeedTrains';
import RegularTrains from './RegularTrains';
import Guide from './Guide';
import Car from './Car';
import MiniBus from './MiniBus';
import Visa from '../Components/Visa';

const AdditionalServices = () => {
  return (
    <>
      <Visa />
      <SpeedTrains />
      <RegularTrains />
      <Guide />
      <Car />
      <MiniBus />
    </>
  );
};

export default AdditionalServices;
