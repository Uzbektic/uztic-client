import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { styles } from '../styles';
import { CalculatorFormData } from '../../../types/calculator';
import { Controller, useFormContext } from 'react-hook-form';
import TashkentHotels from '../Hotels/TashkentHotels';
import SamarkandHotels from '../Hotels/SamarkandHotels';

const Step2 = () => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext<CalculatorFormData>();

  const formData = watch();

  return (
    <Grid container spacing={2}>
      <Grid xs={12} item>
        <div style={styles.input}>
          <Typography variant="h4">Choose City</Typography>
          <FormGroup>
            <Controller
              name="tashkent"
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
                  label="Tashkent"
                />
              )}
            />

            <Controller
              name="samarkand"
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
                  label="Samarkand"
                />
              )}
            />

            <Controller
              name="bukhara"
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
                  label="Bukhara"
                />
              )}
            />

            <Controller
              name="khiva"
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
                  label="Khiva"
                />
              )}
            />
          </FormGroup>
        </div>
      </Grid>

      {formData.tashkent && <TashkentHotels />}
      {formData.samarkand && <SamarkandHotels />}
    </Grid>
  );
};

export default Step2;
