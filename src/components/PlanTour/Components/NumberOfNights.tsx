import React from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import { styles } from '../styles';
import { CalculatorFormData } from '../../../types/calculator';
import { Controller, useFormContext } from 'react-hook-form';

const NumberOfNights = () => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext<CalculatorFormData>();

  const formData = watch();

  return (
    <Grid xs={12} item>
      {formData.tashkent && (
        <Grid style={styles.item} xs={12} sm={6} item>
          <div style={styles.input}>
            <Typography variant="h4">Number of nights in Tashkent</Typography>
            <Controller
              name="numberOfNightsInTashkent"
              control={control}
              rules={{
                required: 'Number of nights in Tashkent are required',
                min: {
                  value: 1,
                  message: 'Minimum is 1',
                },
              }}
              defaultValue={1}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Number of nights in Tashkent"
                  variant="outlined"
                  fullWidth
                  type="number"
                  error={!!errors?.numberOfNightsInTashkent}
                  helperText={errors?.numberOfNightsInTashkent?.message}
                />
              )}
            />
          </div>
        </Grid>
      )}

      {formData.samarkand && (
        <Grid style={styles.item} xs={12} sm={6} item>
          <div style={styles.input}>
            <Typography variant="h4">Number of nights in Samarkand</Typography>
            <Controller
              name="numberOfNightsInSamarkand"
              control={control}
              rules={{
                required: 'Number of nights in Samarkand are required',
                min: {
                  value: 1,
                  message: 'Minimum is 1',
                },
              }}
              defaultValue={1}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Number of nights in Samarkand"
                  variant="outlined"
                  fullWidth
                  type="number"
                  error={!!errors?.numberOfNightsInSamarkand}
                  helperText={errors?.numberOfNightsInSamarkand?.message}
                />
              )}
            />
          </div>
        </Grid>
      )}

      {formData.bukhara && (
        <Grid style={styles.item} xs={12} sm={6} item>
          <div style={styles.input}>
            <Typography variant="h4">Number of nights in Bukhara</Typography>
            <Controller
              name="numberOfNightsInBukhara"
              control={control}
              rules={{
                required: 'Number of nights in Bukhara are required',
                min: {
                  value: 1,
                  message: 'Minimum is 1',
                },
              }}
              defaultValue={1}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Number of nights in Bukhara"
                  variant="outlined"
                  fullWidth
                  type="number"
                  error={!!errors?.numberOfNightsInBukhara}
                  helperText={errors?.numberOfNightsInBukhara?.message}
                />
              )}
            />
          </div>
        </Grid>
      )}

      {formData.khiva && (
        <Grid style={styles.item} xs={12} sm={6} item>
          <div style={styles.input}>
            <Typography variant="h4">Number of nights in Khiva</Typography>
            <Controller
              name="numberOfNightsInKhiva"
              control={control}
              rules={{
                required: 'Number of nights in Khiva are required',
                min: {
                  value: 1,
                  message: 'Minimum is 1',
                },
              }}
              defaultValue={1}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Number of nights in Khiva"
                  variant="outlined"
                  fullWidth
                  type="number"
                  error={!!errors?.numberOfNightsInKhiva}
                  helperText={errors?.numberOfNightsInKhiva?.message}
                />
              )}
            />
          </div>
        </Grid>
      )}
    </Grid>
  );
};

export default NumberOfNights;
