import React, { useEffect } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { styles } from '../styles';
import { CalculatorFormData } from '../../../types/calculator';
import { Controller, useFormContext } from 'react-hook-form';
import {
  OPTIONS,
  VISA_FEE_GROUP,
  VISA_FEE_INDIVIDUAL,
  VISA_TYPES,
  visaOptions,
} from '../constants';

const Visa = () => {
  const [visaValidation, setVisaValidation] = React.useState(1);

  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext<CalculatorFormData>();

  const formData = watch();

  useEffect(() => {
    if (formData.visaType === VISA_TYPES.GROUP) {
      setVisaValidation(5);
    } else {
      setVisaValidation(1);
    }
  }, [formData.visaType]);

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
                        {option}
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

        {formData.visa === OPTIONS.YES && (
          <Grid xs={12} item>
            <div style={styles.input}>
              <Typography variant="h4">Type of visa</Typography>
              <Controller
                name="visaType"
                control={control}
                defaultValue={VISA_TYPES.INDIVIDUAL}
                render={({ field }) => (
                  <div style={{ paddingLeft: 20 }}>
                    <RadioGroup {...field}>
                      <FormControlLabel
                        value={VISA_TYPES.INDIVIDUAL}
                        control={<Radio />}
                        label={VISA_TYPES.INDIVIDUAL}
                      />
                      <FormControlLabel
                        value={VISA_TYPES.GROUP}
                        control={<Radio />}
                        label={VISA_TYPES.GROUP}
                      />
                    </RadioGroup>
                  </div>
                )}
              />
            </div>
          </Grid>
        )}

        {formData.visa === OPTIONS.YES && (
          <Grid style={styles.item} xs={12} item>
            <div style={styles.input}>
              <Typography variant="h4">How Many Visas Do You Need?</Typography>
              <Controller
                name="numberOfVisas"
                control={control}
                rules={{
                  required: 'How Many Visas Do You Need are required',
                  min: {
                    value: visaValidation,
                    message: `Minimum is ${visaValidation}`,
                  },
                }}
                defaultValue={visaValidation}
                render={({ field }) => (
                  <TextField
                    {...field}
                    placeholder="How Many Visas Do You Need"
                    variant="outlined"
                    fullWidth
                    type="number"
                    error={!!errors?.numberOfVisas}
                    helperText={
                      errors?.numberOfVisas?.message ||
                      `Individual visa fee: $${VISA_FEE_INDIVIDUAL} and Group visa fee: $${VISA_FEE_GROUP}`
                    }
                  />
                )}
              />
            </div>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Visa;
