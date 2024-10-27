import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { SelectedHotel } from '../../../types/hotels';
import { toHumanReadable } from '../../../utils/helpers';
import { useFormContext } from 'react-hook-form';
import { CalculatorFormData } from '../../../types/calculator';

const HotelsSummary = ({
  selectedHotels,
}: {
  selectedHotels: SelectedHotel[];
}) => {
  const { watch } = useFormContext<CalculatorFormData>();

  const formData = watch();

  if (
    !formData.bukhara &&
    !formData.tashkent &&
    !formData.khiva &&
    !formData.samarkand
  ) {
    return null;
  }

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h5" color="primary">
          Total cost for Hotels per city
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Paper elevation={3} style={{ padding: '16px' }}>
          {formData?.tashkent && (
            <div style={{ marginTop: 10 }}>
              <Typography variant="h5" color="primary">
                Tashkent
              </Typography>
              <Typography variant="body1">
                Number of nights: {formData.numberOfNightsInTashkent}
              </Typography>
              <Typography variant="body1">
                Total cost: $
                {formData.hotelTotalTashkent *
                  formData.numberOfNightsInTashkent}
              </Typography>
            </div>
          )}
          {formData?.samarkand && (
            <div style={{ marginTop: 10 }}>
              <Typography variant="h5" color="primary">
                Samarkand
              </Typography>
              <Typography variant="body1">
                Number of nights: {formData.numberOfNightsInSamarkand}
              </Typography>
              <Typography variant="body1">
                Total cost: $
                {formData.hotelTotalSamarkand *
                  formData.numberOfNightsInSamarkand}
              </Typography>
            </div>
          )}
          {formData?.bukhara && (
            <div style={{ marginTop: 10 }}>
              <Typography variant="h5" color="primary">
                Bukhara
              </Typography>
              <Typography variant="body1">
                Number of nights: {formData.numberOfNightsInBukhara}
              </Typography>
              <Typography variant="body1">
                Total cost: $
                {formData.hotelTotalBukhara * formData.numberOfNightsInBukhara}
              </Typography>
            </div>
          )}
          {formData?.khiva && (
            <div style={{ marginTop: 10 }}>
              <Typography variant="h5" color="primary">
                Khiva
              </Typography>
              <Typography variant="body1">
                Number of nights: {formData.numberOfNightsInKhiva}
              </Typography>
              <Typography variant="body1">
                Total cost: $
                {formData.hotelTotalKhiva * formData.numberOfNightsInKhiva}
              </Typography>
            </div>
          )}
        </Paper>
      </Grid>

      {selectedHotels?.length > 0 && (
        <>
          <Grid item xs={12}>
            <Typography variant="h5" color="primary">
              Selected Hotels
            </Typography>
          </Grid>
          {selectedHotels.map(
            ({ city, hotel, roomType, roomValue, price }, index) => (
              <Grid item xs={12} key={index}>
                <Paper elevation={3} style={{ padding: '16px' }}>
                  <Typography variant="h6" color="primary">
                    {toHumanReadable(hotel)} in{' '}
                    {city.charAt(0).toUpperCase() + city.slice(1)}
                  </Typography>
                  <Typography variant="body1">
                    Room Type: {roomType} - {roomValue} - Price: ($
                    {price.toFixed(2)} per day)
                  </Typography>
                </Paper>
              </Grid>
            )
          )}
        </>
      )}
    </>
  );
};

export default HotelsSummary;
