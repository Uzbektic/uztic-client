import React from 'react';
import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { styles } from '../styles';
import { CalculatorFormData } from '../../../types/calculator';
import { Controller, useFormContext } from 'react-hook-form';
import { OPTIONS, VISA_FEE, visaOptions } from '../constants';

const Visa = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<CalculatorFormData>();

  return (
    <Grid xs={12} item>
      <Grid style={styles.item} xs={12} sm={6} item>
        <div style={styles.input}>
          <Typography variant="h4">Do you need visa?</Typography>
          <FormControl fullWidth margin="normal">
            <InputLabel>Visa?</InputLabel>
            <Controller
              name="visa"
              control={control}
              defaultValue=""
              rules={{ required: 'Visa is required' }}
              render={({ field }) => (
                <>
                  <Select {...field} variant="outlined" label="Visa">
                    {visaOptions.map((option: string) => (
                      <MenuItem key={option} value={option}>
                        {option} {option === OPTIONS.YES && `- ${VISA_FEE}`}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.visa && (
                    <FormHelperText error>{errors.visa.message}</FormHelperText>
                  )}
                </>
              )}
            />
          </FormControl>
        </div>
      </Grid>
    </Grid>
  );
};

export default Visa;
