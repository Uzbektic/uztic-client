import React from 'react';
import { Divider, Grid } from '@mui/material';
import { styles } from '../../styles';

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
    </>
  );
};

export default BukharaHotels;
