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
  INCREASE_RATES_FOR_AGENCY,
  INCREASE_RATES_FOR_TOURISTS,
  MINI_BUS_RATES,
  TOURIST_TYPES,
} from '../constants';

const MiniBus = () => {
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
          <Typography variant="h4">Mini bus (5-6 pax) per car in $</Typography>
          <FormGroup>
            <Controller
              name="miniBusOneDay"
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
                    MINI_BUS_RATES.oneDay + priceIncrease
                  }`}
                />
              )}
            />
            <Controller
              name="miniBusMountain"
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
                    MINI_BUS_RATES.mountain + priceIncrease
                  }`}
                />
              )}
            />
            <Controller
              name="miniBusAirport"
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
                  label={`Airport pick up and drop off one way  - $${
                    MINI_BUS_RATES.airport + priceIncrease
                  }`}
                />
              )}
            />
          </FormGroup>
        </div>
      </Grid>

      <Grid style={styles.item} xs={6} item>
        {formData.miniBusOneDay && (
          <div style={styles.input}>
            <Typography variant="h4">
              How many days would you like Mini bus for?
            </Typography>
            <Controller
              name="numberOfDaysForMiniBusOneDay"
              control={control}
              rules={{
                required:
                  '  How many days would you like Mini bus  are required',
                min: {
                  value: 1,
                  message: 'Minimum is 1',
                },
              }}
              defaultValue={1}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="How many days would you like Mini bus  for?"
                  variant="outlined"
                  fullWidth
                  type="number"
                  error={!!errors?.numberOfDaysForMiniBusOneDay}
                  helperText={errors?.numberOfDaysForMiniBusOneDay?.message}
                />
              )}
            />
          </div>
        )}

        {formData.miniBusAirport && (
          <div style={styles.input}>
            <Typography variant="h4">
              How many times Airport/Railway pick up and drop off?
            </Typography>
            <Controller
              name="numberOfDaysForMiniBusAirport"
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
                  error={!!errors?.numberOfDaysForMiniBusAirport}
                  helperText={errors?.numberOfDaysForMiniBusAirport?.message}
                />
              )}
            />
          </div>
        )}
      </Grid>
    </>
  );
};

export default MiniBus;
