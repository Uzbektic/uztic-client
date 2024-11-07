import React, { useEffect, useState } from 'react';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { styles } from '../styles';
import { Controller, useFormContext } from 'react-hook-form';
import { CalculatorFormData } from '../../../types/calculator';
import {
  CAR_RATES,
  INCREASE_RATES_FOR_AGENCY,
  INCREASE_RATES_FOR_TOURISTS,
  TOURIST_TYPES,
} from '../constants';

const Car = () => {
  const [priceIncrease, setPriceIncrease] = useState(
    INCREASE_RATES_FOR_TOURISTS
  );

  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext<CalculatorFormData>();

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
      <Grid xs={6} item>
        <div style={styles.input}>
          <Typography variant="h4">Sedan car (2-3 pax) per car in $</Typography>
          <FormGroup>
            <Controller
              name="carOneDay"
              control={control}
              defaultValue={false}
              render={({ field: { onChange, value } }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={value}
                      onChange={(e) => onChange(e.target.checked)}
                    />
                  }
                  label={`One day sightseeng (4-5 hours) - $${
                    CAR_RATES.oneDay + priceIncrease
                  }`}
                />
              )}
            />
            <Controller
              name="carMountain"
              control={control}
              defaultValue={false}
              render={({ field: { onChange, value } }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={value}
                      onChange={(e) => onChange(e.target.checked)}
                    />
                  }
                  label={`Mountain trip 1 day  - $${
                    CAR_RATES.mountain + priceIncrease
                  }`}
                />
              )}
            />
            <Controller
              name="carAirport"
              control={control}
              defaultValue={false}
              render={({ field: { onChange, value } }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={value}
                      onChange={(e) => onChange(e.target.checked)}
                    />
                  }
                  label={`Airport/Railway pick up and drop off one way  - $${
                    CAR_RATES.airport + priceIncrease
                  }`}
                />
              )}
            />
          </FormGroup>
        </div>
      </Grid>

      <Grid style={styles.item} xs={6} item>
        {formData.carOneDay && (
          <div style={styles.input}>
            <Typography variant="h4">
              How many days would you like Sedan car for?
            </Typography>
            <Controller
              name="numberOfDaysForCarOneDay"
              control={control}
              rules={{
                required:
                  '  How many days would you like Sedan car are required',
                min: {
                  value: 1,
                  message: 'Minimum is 1',
                },
              }}
              defaultValue={1}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="How many days would you like Sedan car for?"
                  variant="outlined"
                  fullWidth
                  type="number"
                  error={!!errors?.numberOfDaysForCarOneDay}
                  helperText={errors?.numberOfDaysForCarOneDay?.message}
                />
              )}
            />
          </div>
        )}

        {formData.carAirport && (
          <div style={styles.input}>
            <Typography variant="h4">
              How many times Airport/Railway pick up and drop off?
            </Typography>
            <Controller
              name="numberOfDaysForCarAirport"
              control={control}
              rules={{
                required:
                  'How many times Airport/Railway pick up and drop off are required',
                min: {
                  value: 1,
                  message: 'Minimum is 1',
                },
              }}
              defaultValue={1}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="How many times Airport/Railway pick up and drop off?"
                  variant="outlined"
                  fullWidth
                  type="number"
                  error={!!errors?.numberOfDaysForCarAirport}
                  helperText={errors?.numberOfDaysForCarAirport?.message}
                />
              )}
            />
          </div>
        )}
      </Grid>
    </>
  );
};

export default Car;
