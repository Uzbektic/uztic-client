import React from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import { styles } from '../styles';
import { CalculatorFormData } from '../../../types/calculator';
import { Controller, useFormContext } from 'react-hook-form';

const NumberOfRooms = () => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext<CalculatorFormData>();

  const formData = watch();

  return (
    <Grid xs={12} item>
      {formData.tashkent && (
        <Grid style={styles.item} xs={12} item>
          <div style={styles.input}>
            <Typography variant="h4">Number of rooms in Tashkent</Typography>
            <Controller
              name="numberOfRoomsInTashkent"
              control={control}
              rules={{
                required: 'Number of rooms in Tashkent are required',
                min: {
                  value: 1,
                  message: 'Minimum is 1',
                },
              }}
              defaultValue={1}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Number of rooms in Tashkent"
                  variant="outlined"
                  fullWidth
                  type="number"
                  error={!!errors?.numberOfRoomsInTashkent}
                  helperText={errors?.numberOfRoomsInTashkent?.message}
                />
              )}
            />
          </div>
        </Grid>
      )}

      {formData.samarkand && (
        <Grid style={styles.item} xs={12} item>
          <div style={styles.input}>
            <Typography variant="h4">Number of rooms in Samarkand</Typography>
            <Controller
              name="numberOfRoomsInSamarkand"
              control={control}
              rules={{
                required: 'Number of rooms in Samarkand are required',
                min: {
                  value: 1,
                  message: 'Minimum is 1',
                },
              }}
              defaultValue={1}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Number of rooms in Samarkand"
                  variant="outlined"
                  fullWidth
                  type="number"
                  error={!!errors?.numberOfRoomsInSamarkand}
                  helperText={errors?.numberOfRoomsInSamarkand?.message}
                />
              )}
            />
          </div>
        </Grid>
      )}

      {formData.bukhara && (
        <Grid style={styles.item} xs={12} item>
          <div style={styles.input}>
            <Typography variant="h4">Number of rooms in Bukhara</Typography>
            <Controller
              name="numberOfRoomsInBukhara"
              control={control}
              rules={{
                required: 'Number of rooms in Bukhara are required',
                min: {
                  value: 1,
                  message: 'Minimum is 1',
                },
              }}
              defaultValue={1}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Number of rooms in Bukhara"
                  variant="outlined"
                  fullWidth
                  type="number"
                  error={!!errors?.numberOfRoomsInBukhara}
                  helperText={errors?.numberOfRoomsInBukhara?.message}
                />
              )}
            />
          </div>
        </Grid>
      )}

      {formData.khiva && (
        <Grid style={styles.item} xs={12} item>
          <div style={styles.input}>
            <Typography variant="h4">Number of rooms in Khiva</Typography>
            <Controller
              name="numberOfRoomsInKhiva"
              control={control}
              rules={{
                required: 'Number of rooms in Khiva are required',
                min: {
                  value: 1,
                  message: 'Minimum is 1',
                },
              }}
              defaultValue={1}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Number of rooms in Khiva"
                  variant="outlined"
                  fullWidth
                  type="number"
                  error={!!errors?.numberOfRoomsInKhiva}
                  helperText={errors?.numberOfRoomsInKhiva?.message}
                />
              )}
            />
          </div>
        </Grid>
      )}
    </Grid>
  );
};

export default NumberOfRooms;
