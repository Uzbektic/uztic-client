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
import { MINI_BUS_RATES } from '../constants';

const MiniBus = () => {
  const { control } = useFormContext<CalculatorFormData>();

  return (
    <Grid xs={12} item>
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
  );
};

export default MiniBus;
