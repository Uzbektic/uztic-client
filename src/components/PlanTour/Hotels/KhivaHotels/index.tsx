import React from 'react';
import { Divider, Grid } from '@mui/material';
import { styles } from '../../styles';
import AsiaHotel from './Asia';
import BankirHotel from './Bankir';
import OrientStarHotel from './OrientStar';

const KhivaHotels = () => {
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
          Khiva Hotels
        </h2>

        <Divider />
      </Grid>

      <AsiaHotel />
      <BankirHotel />
      <OrientStarHotel />
    </>
  );
};

export default KhivaHotels;
