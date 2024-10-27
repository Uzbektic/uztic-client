import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { CalculatorFormData } from '../../../types/calculator';
import { CAR_RATES, GUIDE_RATE, MINI_BUS_RATES } from '../constants';

const OtherServices = () => {
  const { watch } = useFormContext<CalculatorFormData>();

  const formData = watch();

  return (
    <>
      {formData.englishSpeakingGuide && (
        <>
          <Grid item xs={12}>
            <Typography variant="h5" color="primary">
              Guide
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: '16px' }}>
              <Typography variant="h6" color="primary">
                English speaking guide 1 day sightseeing
              </Typography>
              <Typography variant="body1">
                4-5 hours per group in - Price: (${GUIDE_RATE.toFixed(2)})
              </Typography>
            </Paper>
          </Grid>
        </>
      )}

      {(formData.carOneDay || formData.carMountain || formData.carAirport) && (
        <>
          <Grid item xs={12}>
            <Typography variant="h5" color="primary">
              Sedan car (2-3 pax) per car
            </Typography>
          </Grid>

          {formData.carOneDay && (
            <Grid item xs={12}>
              <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h6" color="primary">
                  One day sightseeing (4-5 hours)
                </Typography>
                <Typography variant="body1">
                  Price: (${CAR_RATES.oneDay.toFixed(2)})
                </Typography>
              </Paper>
            </Grid>
          )}

          {formData.carMountain && (
            <Grid item xs={12}>
              <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h6" color="primary">
                  Mountain trip 1 day
                </Typography>
                <Typography variant="body1">
                  Price: (${CAR_RATES.mountain.toFixed(2)})
                </Typography>
              </Paper>
            </Grid>
          )}

          {formData.carAirport && (
            <Grid item xs={12}>
              <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h6" color="primary">
                  Airport pick up and drop off one way
                </Typography>
                <Typography variant="body1">
                  Price: (${CAR_RATES.airport.toFixed(2)})
                </Typography>
              </Paper>
            </Grid>
          )}
        </>
      )}

      {(formData.miniBusOneDay ||
        formData.miniBusMountain ||
        formData.miniBusAirport) && (
        <>
          <Grid item xs={12}>
            <Typography variant="h5" color="primary">
              Mini bus (5-6 pax) per car
            </Typography>
          </Grid>

          {formData.miniBusOneDay && (
            <Grid item xs={12}>
              <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h6" color="primary">
                  One day sightseeing (4-5 hours)
                </Typography>
                <Typography variant="body1">
                  Price: (${MINI_BUS_RATES.oneDay.toFixed(2)})
                </Typography>
              </Paper>
            </Grid>
          )}

          {formData.miniBusMountain && (
            <Grid item xs={12}>
              <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h6" color="primary">
                  Mountain trip 1 day
                </Typography>
                <Typography variant="body1">
                  Price: (${MINI_BUS_RATES.mountain.toFixed(2)})
                </Typography>
              </Paper>
            </Grid>
          )}

          {formData.miniBusAirport && (
            <Grid item xs={12}>
              <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h6" color="primary">
                  Airport pick up and drop off one way
                </Typography>
                <Typography variant="body1">
                  Price: (${MINI_BUS_RATES.airport.toFixed(2)})
                </Typography>
              </Paper>
            </Grid>
          )}
        </>
      )}
    </>
  );
};

export default OtherServices;
