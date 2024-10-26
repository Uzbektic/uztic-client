import React from 'react';
import { Divider, Grid } from '@mui/material';
import { styles } from '../../styles';
import MalikaBukharaHotel from './MalikaBukhara';
import GardenPlazaHotel from './GardenPlaza';
import MercureHotel from './Mercure';
import OmarKhayamHotel from './OmarKhayam';
import ParadiseHotel from './Paradise';
import RoyalHotel from './Royal';
import ShahidZarafshanHotel from './ShahidZarafshan';
import TuronCityHotel from './TuronCity';
import WyndhamHotel from './Wyndham';
import DunyoHotel from './Dunyo';
import GumbazHotel from './Gumbaz';
import LyabiHotel from './Lyabi';

const BukharaHotels = () => {
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
          Bukhara Hotels
        </h2>

        <Divider />
      </Grid>

      <MalikaBukharaHotel />
      <GardenPlazaHotel />
      <MercureHotel />
      <OmarKhayamHotel />
      <ParadiseHotel />
      <RoyalHotel />
      <ShahidZarafshanHotel />
      <TuronCityHotel />
      <WyndhamHotel />
      <DunyoHotel />
      <GumbazHotel />
      <LyabiHotel />
    </>
  );
};

export default BukharaHotels;
