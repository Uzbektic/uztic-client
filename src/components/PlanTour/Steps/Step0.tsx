import React from 'react';
import {
  Grid,
  Card,
  CardActionArea,
  Typography,
  CardContent,
  useTheme,
  Alert,
  TextField,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import { styles } from '../styles';
import { CustomColors } from '../../../theme';
import { CalculatorFormData } from '../../../types/calculator';
import { Controller, useFormContext } from 'react-hook-form';
import { TOURIST_TYPES } from '../constants';

const Step0 = () => {
  const theme = useTheme();

  const {
    control,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext<CalculatorFormData>();

  const formData = watch();

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={6} style={{ marginTop: 50 }}>
        <Card
          variant="outlined"
          onClick={() => setValue('touristType', TOURIST_TYPES.TOURIST)}
          style={{
            border: '1px solid #ccc',
            backgroundColor:
              formData.touristType === TOURIST_TYPES.TOURIST
                ? theme.palette.primary.light
                : CustomColors.white,
            height: '150px',
            color:
              formData.touristType === TOURIST_TYPES.TOURIST
                ? theme.palette.primary.contrastText
                : theme.palette.text.primary,
          }}
        >
          <CardActionArea style={{ height: '100%' }}>
            <CardContent style={{ textAlign: 'center' }}>
              <PersonIcon
                style={{
                  fontSize: 40,
                  color:
                    formData.touristType === TOURIST_TYPES.TOURIST
                      ? CustomColors.white
                      : theme.palette.text.secondary,
                }}
              />
              <Typography variant="h6">Tourist</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} style={{ marginTop: 50 }}>
        <Card
          variant="outlined"
          onClick={() => setValue('touristType', TOURIST_TYPES.AGENCY)}
          style={{
            border: '1px solid #ccc',
            backgroundColor:
              formData.touristType === TOURIST_TYPES.AGENCY
                ? theme.palette.primary.light
                : CustomColors.white,
            height: '150px',
            color:
              formData.touristType === TOURIST_TYPES.AGENCY
                ? theme.palette.primary.contrastText
                : theme.palette.text.primary,
          }}
        >
          <CardActionArea style={{ height: '100%' }}>
            <CardContent style={{ textAlign: 'center' }}>
              <BusinessIcon
                style={{
                  fontSize: 40,
                  color:
                    formData.touristType === TOURIST_TYPES.AGENCY
                      ? CustomColors.white
                      : theme.palette.text.secondary,
                }}
              />
              <Typography variant="h6">Tourist Agency</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      {formData.touristType === TOURIST_TYPES.AGENCY && (
        <>
          <Grid style={styles.item} xs={12} sm={6} item></Grid>
          <Grid style={styles.item} xs={12} sm={6} item>
            <div style={styles.input}>
              <Typography variant="h4">Password</Typography>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: 'Password is required',
                }}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    placeholder="Password"
                    variant="outlined"
                    fullWidth
                    error={!!errors?.password}
                    helperText={errors?.password?.message}
                  />
                )}
              />
            </div>
          </Grid>
        </>
      )}

      {errors.touristType && (
        <Grid item xs={12} style={styles.item}>
          <Alert severity="error">{errors.touristType.message}</Alert>
        </Grid>
      )}
    </Grid>
  );
};

export default Step0;
