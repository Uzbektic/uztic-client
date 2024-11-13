import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { CalculatorFormData } from '../../../types/calculator';
import {
  CAR_RATES,
  GUIDE_RATE,
  INCREASE_RATES_FOR_AGENCY,
  INCREASE_RATES_FOR_TOURISTS,
  MINI_BUS_RATES,
  OPTIONS,
  TOURIST_TYPES,
  VISA_FEE,
} from '../constants';

const OtherServices = () => {
  const [priceIncrease, setPriceIncrease] = useState(
    INCREASE_RATES_FOR_TOURISTS
  );

  const { watch } = useFormContext<CalculatorFormData>();

  const formData = watch();

  useEffect(() => {
    if (formData.touristType === TOURIST_TYPES.AGENCY) {
      setPriceIncrease(INCREASE_RATES_FOR_AGENCY);
    } else {
      setPriceIncrease(INCREASE_RATES_FOR_TOURISTS);
    }
  }, [formData.touristType]);

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
                Number of days: {formData.numberOfDaysForGuide}
              </Typography>
              <Typography variant="body1">
                4-5 hours per group in - Price: ($
                {(GUIDE_RATE + priceIncrease).toFixed(2)})
              </Typography>
              <Typography variant="body1">
                Total cost $
                {(
                  (GUIDE_RATE + priceIncrease) *
                  formData.numberOfDaysForGuide
                ).toFixed(2)}
              </Typography>
            </Paper>
          </Grid>
        </>
      )}

      {formData.visa && formData.visa === OPTIONS.YES && (
        <>
          <Grid item xs={12}>
            <Typography variant="h5" color="primary">
              Visa
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: '16px' }}>
              <Typography variant="body1">
                Visa - Price: (${VISA_FEE.toFixed(2)})
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
                  Price for one day: ($
                  {(CAR_RATES.oneDay + priceIncrease).toFixed(2)})
                </Typography>
                <Typography variant="body1">
                  Number of days: {formData.numberOfDaysForCarOneDay}
                </Typography>
                <Typography variant="body1">
                  Total: ($
                  {(
                    (CAR_RATES.oneDay + priceIncrease) *
                    formData.numberOfDaysForCarOneDay
                  ).toFixed(2)}
                  )
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
                  Price: (${(CAR_RATES.mountain + priceIncrease).toFixed(2)})
                </Typography>
              </Paper>
            </Grid>
          )}

          {formData.carAirport && (
            <Grid item xs={12}>
              <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h6" color="primary">
                  Airport/Railway pick up and drop off
                </Typography>
                <Typography variant="body1">
                  Price for one day: ($
                  {(CAR_RATES.airport + priceIncrease).toFixed(2)})
                </Typography>
                <Typography variant="body1">
                  Number of days: {formData.numberOfDaysForCarAirport}
                </Typography>
                <Typography variant="body1">
                  Total: ($
                  {(
                    (CAR_RATES.airport + priceIncrease) *
                    formData.numberOfDaysForCarAirport
                  ).toFixed(2)}
                  )
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
                  Price for one day: ($
                  {(MINI_BUS_RATES.oneDay + priceIncrease).toFixed(2)})
                </Typography>
                <Typography variant="body1">
                  Number of days: {formData.numberOfDaysForCarOneDay}
                </Typography>
                <Typography variant="body1">
                  Total: ($
                  {(
                    (MINI_BUS_RATES.oneDay + priceIncrease) *
                    formData.numberOfDaysForMiniBusOneDay
                  ).toFixed(2)}
                  )
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
                  Price: ($
                  {(MINI_BUS_RATES.mountain + priceIncrease).toFixed(2)})
                </Typography>
              </Paper>
            </Grid>
          )}

          {formData.miniBusAirport && (
            <Grid item xs={12}>
              <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h6" color="primary">
                  Airport/Railway pick up and drop off
                </Typography>
                <Typography variant="body1">
                  Price for one day: ($
                  {(MINI_BUS_RATES.airport + priceIncrease).toFixed(2)})
                </Typography>
                <Typography variant="body1">
                  Number of days: {formData.numberOfDaysForMiniBusAirport}
                </Typography>
                <Typography variant="body1">
                  Total: ($
                  {(
                    (MINI_BUS_RATES.airport + priceIncrease) *
                    formData.numberOfDaysForMiniBusAirport
                  ).toFixed(2)}
                  )
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
