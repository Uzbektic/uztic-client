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
import { GUIDE_RATE } from '../constants';

const Guide = () => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext<CalculatorFormData>();

  const formData = watch();

  return (
    <>
      <Grid xs={formData.englishSpeakingGuide ? 6 : 12} item>
        <div style={styles.input}>
          <Typography variant="h4">
            English speaking guide 1 day sighseeng 4-5 hours per group in $
          </Typography>
          <FormGroup>
            <Controller
              name="englishSpeakingGuide"
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
                  label={GUIDE_RATE}
                />
              )}
            />
          </FormGroup>
        </div>
      </Grid>
      {formData.englishSpeakingGuide && (
        <Grid style={styles.item} xs={6} item>
          <div style={styles.input}>
            <Typography variant="h4">
              How many days would you like a guide for?
            </Typography>
            <Controller
              name="numberOfDaysForGuide"
              control={control}
              rules={{
                required: 'How many days would you like a guide are required',
                min: {
                  value: 1,
                  message: 'Minimum is 1',
                },
              }}
              defaultValue={1}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="How many days would you like a guide for?"
                  variant="outlined"
                  fullWidth
                  type="number"
                  error={!!errors?.numberOfDaysForGuide}
                  helperText={errors?.numberOfDaysForGuide?.message}
                />
              )}
            />
          </div>
        </Grid>
      )}
    </>
  );
};

export default Guide;
