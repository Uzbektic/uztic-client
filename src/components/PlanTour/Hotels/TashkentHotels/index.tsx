import React from 'react';
import { Divider, Grid } from '@mui/material';
import { styles } from '../../styles';
import HyattRegencyHotel from './HyattRegency';
import HiltonHotel from './Hilton';
import WyndhamHotel from './Wyndham';
import HamptonHotel from './Hampton';
import RamadaHotel from './Ramada';
import GabrielleHotel from './Gabrielle';
import NovzaHotel from './Novza';
import MercureHotel from './Mercure';
import GarnetHotel from './Garnet';
import GreenParkHotel from './GreenPark';
import StayInnHotel from './StayInn';
import KrokusHotel from './Krokus';
import DsfGardenHotel from './DsfGarden';

const TashkentHotels = () => {
  return (
    <>
      <Grid xs={12} item>
        <h2
          style={{
            ...styles.item,
            textAlign: 'center',
            marginBottom: 10,
          }}
        >
          Tashkent Hotels
        </h2>

        <Divider />
      </Grid>

      <HyattRegencyHotel />
      <HiltonHotel />
      <WyndhamHotel />
      <HamptonHotel />
      <RamadaHotel />
      <GabrielleHotel />
      <NovzaHotel />
      <MercureHotel />
      <GarnetHotel />
      <GreenParkHotel />
      <StayInnHotel />
      <KrokusHotel />
      <DsfGardenHotel />
    </>
  );
};

export default TashkentHotels;
