import React from 'react';
import { Divider, Grid } from '@mui/material';
import { styles } from '../../styles';
import MovenPickHotel from './MovenPick';
import AlexanderHotel from './Alexander';
import DilimahPremiumHotel from './DilimahPremium';
import DiyoraHotel from './Diyora';
import MalikaPrimeHotel from './MalikaPrime';
import MalikaClassicHotel from './MalikaClassic';
import OrientStarHotel from './OrientStar';
import QoshHotel from './Qosh';
import DilshodaHotel from './Dilshoda';
import WellfortHotel from './Wellfort';
import BravoHotel from './Bravo';
import EastStarHotel from './EastStar';

const SamarkandHotels = () => {
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
          Samarkand Hotels
        </h2>

        <Divider />
      </Grid>

      <MovenPickHotel />
      <AlexanderHotel />
      <DilimahPremiumHotel />
      <DiyoraHotel />
      <MalikaPrimeHotel />
      <MalikaClassicHotel />
      <OrientStarHotel />
      <QoshHotel />
      <DilshodaHotel />
      <WellfortHotel />
      <BravoHotel />
      <EastStarHotel />
    </>
  );
};

export default SamarkandHotels;
