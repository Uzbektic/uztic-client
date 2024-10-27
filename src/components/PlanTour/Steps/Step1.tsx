import { Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { styles } from '../styles';
import { Controller, useFormContext } from 'react-hook-form';
import { CalculatorFormData } from '../../../types/calculator';

const Step1 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<CalculatorFormData>();

  return (
    <Grid container spacing={2}>
      <Grid xs={12} sm={6} style={styles.item} item>
        <div style={styles.input}>
          <Typography variant="h4">First Name</Typography>
          <Controller
            name="firstName"
            control={control}
            rules={{
              required: 'First Name is required',
            }}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="First Name"
                variant="outlined"
                fullWidth
                error={!!errors?.firstName}
                helperText={errors?.firstName?.message}
              />
            )}
          />
        </div>
      </Grid>

      <Grid style={styles.item} xs={12} sm={6} item>
        <div style={styles.input}>
          <Typography variant="h4">Last Name</Typography>
          <Controller
            name="lastName"
            control={control}
            rules={{
              required: 'Last Name is required',
            }}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Last Name"
                variant="outlined"
                fullWidth
                error={!!errors?.lastName}
                helperText={errors?.lastName?.message}
              />
            )}
          />
        </div>
      </Grid>

      <Grid style={styles.item} xs={12} sm={6} item>
        <div style={styles.input}>
          <Typography variant="h4">Email</Typography>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
            }}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Email"
                variant="outlined"
                fullWidth
                type="email"
                error={!!errors?.email}
                helperText={errors?.email?.message}
              />
            )}
          />
        </div>
      </Grid>

      <Grid style={styles.item} xs={12} sm={6} item>
        <div style={styles.input}>
          <Typography variant="h4">Phone</Typography>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: 'Phone is required',
            }}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Phone"
                variant="outlined"
                fullWidth
                error={!!errors?.phone}
                helperText={errors?.phone?.message}
              />
            )}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default Step1;
