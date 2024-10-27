import React, { useEffect, useRef } from 'react';
import { CalculatorFormData } from '../../../types/calculator';
import { Controller, useFormContext } from 'react-hook-form';
import { styles } from '../styles';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { REGULAR_TRAIN_RATES, TRAIN_CLASSES } from '../constants';

const RegularTrains = () => {
  const previousChargesRef = useRef({
    tashkentToSamarkandRegularTrain: 0,
    tashkentToBukharaRegularTrain: 0,
    samarkandToBukharaRegularTrain: 0,
  });

  const { control, watch, setValue } = useFormContext<CalculatorFormData>();

  const formData = watch();

  useEffect(() => {
    const calculateAndUpdateTotal = () => {
      let additionalCharge = 0;

      const updateCharge = (
        key:
          | 'tashkentToSamarkandRegularTrain'
          | 'tashkentToBukharaRegularTrain'
          | 'samarkandToBukharaRegularTrain',
        rates: { economy: number; business: number }
      ) => {
        if (formData[key]) {
          const roomCharge =
            formData[`${key}__class`] === TRAIN_CLASSES.ECONOMY
              ? rates.economy
              : formData[`${key}__class`] === TRAIN_CLASSES.BUSINESS
              ? rates.business
              : 0;

          additionalCharge += roomCharge - previousChargesRef.current[key];
          previousChargesRef.current[key] = roomCharge;
        } else {
          additionalCharge -= previousChargesRef.current[key];
          previousChargesRef.current[key] = 0;
          setValue(`${key}__class` as keyof CalculatorFormData, undefined);
        }
      };

      updateCharge(
        'tashkentToSamarkandRegularTrain',
        REGULAR_TRAIN_RATES.tashkentToSamarkand
      );

      updateCharge(
        'tashkentToBukharaRegularTrain',
        REGULAR_TRAIN_RATES.tashkentToBukhara
      );

      updateCharge(
        'samarkandToBukharaRegularTrain',
        REGULAR_TRAIN_RATES.samarkandToBukhara
      );

      const currentTotal = formData.additionalTrainsTotal || 0;
      setValue('additionalTrainsTotal', currentTotal + additionalCharge);
    };

    calculateAndUpdateTotal();
  }, [
    formData.tashkentToSamarkandRegularTrain,
    formData.tashkentToSamarkandRegularTrain__class,
    formData.tashkentToBukharaRegularTrain,
    formData.tashkentToBukharaRegularTrain__class,
    formData.samarkandToBukharaRegularTrain,
    formData.samarkandToBukharaRegularTrain__class,
    setValue,
  ]);

  return (
    <>
      <Grid xs={12} item>
        <div style={styles.input}>
          <Typography variant="h4">
            Sharq regular train per person in $
          </Typography>
          <FormGroup>
            <Controller
              name="tashkentToSamarkandRegularTrain"
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
                  label="Tashkent - Samarkand one way"
                />
              )}
            />

            {formData.tashkentToSamarkandRegularTrain && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Train Class</Typography>
                  <Controller
                    name="tashkentToSamarkandRegularTrain__class"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={TRAIN_CLASSES.ECONOMY}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.ECONOMY} - $${REGULAR_TRAIN_RATES.tashkentToSamarkand.economy}`}
                          />
                          <FormControlLabel
                            value={TRAIN_CLASSES.BUSINESS}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.BUSINESS} - $${REGULAR_TRAIN_RATES.tashkentToSamarkand.business}`}
                          />
                        </RadioGroup>
                      </div>
                    )}
                  />
                </div>
              </Grid>
            )}

            <Controller
              name="tashkentToBukharaRegularTrain"
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
                  label="Tashkent - Bukhara one way"
                />
              )}
            />

            {formData.tashkentToBukharaRegularTrain && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Train Class</Typography>
                  <Controller
                    name="tashkentToBukharaRegularTrain__class"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={TRAIN_CLASSES.ECONOMY}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.ECONOMY} - $${REGULAR_TRAIN_RATES.tashkentToBukhara.economy}`}
                          />
                          <FormControlLabel
                            value={TRAIN_CLASSES.BUSINESS}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.BUSINESS} - $${REGULAR_TRAIN_RATES.tashkentToBukhara.business}`}
                          />
                        </RadioGroup>
                      </div>
                    )}
                  />
                </div>
              </Grid>
            )}

            <Controller
              name="samarkandToBukharaRegularTrain"
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
                  label="Samarkand - Bukhara one way"
                />
              )}
            />

            {formData.samarkandToBukharaRegularTrain && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Train Class</Typography>
                  <Controller
                    name="samarkandToBukharaRegularTrain__class"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={TRAIN_CLASSES.ECONOMY}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.ECONOMY} - $${REGULAR_TRAIN_RATES.samarkandToBukhara.economy}`}
                          />
                          <FormControlLabel
                            value={TRAIN_CLASSES.BUSINESS}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.BUSINESS} - $${REGULAR_TRAIN_RATES.samarkandToBukhara.business}`}
                          />
                        </RadioGroup>
                      </div>
                    )}
                  />
                </div>
              </Grid>
            )}
          </FormGroup>
        </div>
      </Grid>
    </>
  );
};

export default RegularTrains;
