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
import { MINI_BUS_RATES } from '../constants';

const MiniBus = () => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext<CalculatorFormData>();

  const formData = watch();

  return (
    <>
      <Grid xs={formData.miniBusOneDay ? 6 : 12} item>
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
                  label={`One day sightseeng (4-5 hours) - $${MINI_BUS_RATES.oneDay}`}
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
                  label={`Mountain trip 1 day  - $${MINI_BUS_RATES.mountain}`}
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
                  label={`Airport pick up and drop off one way  - $${MINI_BUS_RATES.airport}`}
                />
              )}
            />
          </FormGroup>
        </div>
      </Grid>

      {formData.miniBusOneDay && (
        <Grid style={styles.item} xs={6} item>
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
        </Grid>
      )}
    </>
  );
};

export default MiniBus;
