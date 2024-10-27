import React from 'react';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from '@mui/material';
import { styles } from '../styles';
import { Controller, useFormContext } from 'react-hook-form';
import { CalculatorFormData } from '../../../types/calculator';
import { GUIDE_RATE } from '../constants';

const Guide = () => {
  const { control } = useFormContext<CalculatorFormData>();

  return (
    <Grid xs={12} item>
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
  );
};

export default Guide;
