import React from 'react';
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
import { CAR_RATES } from '../constants';

const Car = () => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext<CalculatorFormData>();

  const formData = watch();

  return (
    <>
      <Grid xs={formData.carOneDay ? 6 : 12} item>
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
                  label={`One day sightseeng (4-5 hours) - $${CAR_RATES.oneDay}`}
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
                  label={`Mountain trip 1 day  - $${CAR_RATES.mountain}`}
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
                  label={`Airport pick up and drop off one way  - $${CAR_RATES.airport}`}
                />
              )}
            />
          </FormGroup>
        </div>
      </Grid>
      {formData.carOneDay && (
        <Grid style={styles.item} xs={6} item>
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
        </Grid>
      )}
    </>
  );
};

export default Car;
