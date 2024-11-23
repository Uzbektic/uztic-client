import React, { useEffect, useRef, useState } from 'react';
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
  TextField,
  Typography,
} from '@mui/material';
import {
  INCREASE_RATES_FOR_AGENCY,
  INCREASE_RATES_FOR_TOURISTS,
  REGULAR_TRAIN_RATES,
  TOURIST_TYPES,
  TRAIN_CLASSES,
} from '../constants';

const RegularTrains = () => {
  const [priceIncrease, setPriceIncrease] = useState(
    INCREASE_RATES_FOR_TOURISTS
  );

  const previousChargesRef = useRef({
    tashkentToSamarkandRegularTrain: 0,
    tashkentToBukharaRegularTrain: 0,
    samarkandToBukharaRegularTrain: 0,
    samarkandToTashkentRegularTrain: 0,
    bukharaToTashkentRegularTrain: 0,
    bukharaToSamarkandRegularTrain: 0,
  });

  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<CalculatorFormData>();

  const formData = watch();

  useEffect(() => {
    const calculateAndUpdateTotal = () => {
      let additionalCharge = 0;

      const updateCharge = (
        key:
          | 'tashkentToSamarkandRegularTrain'
          | 'tashkentToBukharaRegularTrain'
          | 'samarkandToBukharaRegularTrain'
          | 'samarkandToTashkentRegularTrain'
          | 'bukharaToTashkentRegularTrain'
          | 'bukharaToSamarkandRegularTrain',
        rates: { economy: number; business: number }
      ) => {
        if (formData[key]) {
          const roomCharge =
            formData[`${key}__class`] === TRAIN_CLASSES.ECONOMY
              ? (rates.economy + priceIncrease) *
                formData.numberOfRegularTrainTickets
              : formData[`${key}__class`] === TRAIN_CLASSES.BUSINESS
              ? (rates.business + priceIncrease) *
                formData.numberOfRegularTrainTickets
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

      updateCharge(
        'samarkandToTashkentRegularTrain',
        REGULAR_TRAIN_RATES.samarkandToTashkent
      );

      updateCharge(
        'bukharaToTashkentRegularTrain',
        REGULAR_TRAIN_RATES.bukharaToTashkent
      );

      updateCharge(
        'bukharaToSamarkandRegularTrain',
        REGULAR_TRAIN_RATES.bukharaToSamarkand
      );

      const currentTotal = formData.additionalRegularTrainsTotal || 0;
      setValue('additionalRegularTrainsTotal', currentTotal + additionalCharge);
    };

    calculateAndUpdateTotal();
  }, [
    formData.tashkentToSamarkandRegularTrain,
    formData.tashkentToSamarkandRegularTrain__class,
    formData.tashkentToBukharaRegularTrain,
    formData.tashkentToBukharaRegularTrain__class,
    formData.samarkandToBukharaRegularTrain,
    formData.samarkandToBukharaRegularTrain__class,
    formData.samarkandToTashkentRegularTrain,
    formData.samarkandToTashkentRegularTrain__class,
    formData.bukharaToTashkentRegularTrain,
    formData.bukharaToTashkentRegularTrain__class,
    formData.bukharaToSamarkandRegularTrain,
    formData.bukharaToSamarkandRegularTrain__class,
    formData.numberOfRegularTrainTickets,
    setValue,
  ]);

  useEffect(() => {
    if (formData.touristType === TOURIST_TYPES.AGENCY) {
      setPriceIncrease(INCREASE_RATES_FOR_AGENCY);
    } else {
      setPriceIncrease(INCREASE_RATES_FOR_TOURISTS);
    }
  }, [formData.touristType]);

  return (
    <>
      <Grid xs={6} item>
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
                            label={`${TRAIN_CLASSES.ECONOMY} - $${
                              REGULAR_TRAIN_RATES.tashkentToSamarkand.economy +
                              priceIncrease
                            }`}
                          />
                          <FormControlLabel
                            value={TRAIN_CLASSES.BUSINESS}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.BUSINESS} - $${
                              REGULAR_TRAIN_RATES.tashkentToSamarkand.business +
                              priceIncrease
                            }`}
                          />
                        </RadioGroup>
                      </div>
                    )}
                  />
                </div>
              </Grid>
            )}

            <Controller
              name="samarkandToTashkentRegularTrain"
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
                  label="Samarkand - Tashkent one way"
                />
              )}
            />

            {formData.samarkandToTashkentRegularTrain && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Train Class</Typography>
                  <Controller
                    name="samarkandToTashkentRegularTrain__class"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={TRAIN_CLASSES.ECONOMY}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.ECONOMY} - $${
                              REGULAR_TRAIN_RATES.samarkandToTashkent.economy +
                              priceIncrease
                            }`}
                          />
                          <FormControlLabel
                            value={TRAIN_CLASSES.BUSINESS}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.BUSINESS} - $${
                              REGULAR_TRAIN_RATES.samarkandToTashkent.business +
                              priceIncrease
                            }`}
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
                            label={`${TRAIN_CLASSES.ECONOMY} - $${
                              REGULAR_TRAIN_RATES.tashkentToBukhara.economy +
                              priceIncrease
                            }`}
                          />
                          <FormControlLabel
                            value={TRAIN_CLASSES.BUSINESS}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.BUSINESS} - $${
                              REGULAR_TRAIN_RATES.tashkentToBukhara.business +
                              priceIncrease
                            }`}
                          />
                        </RadioGroup>
                      </div>
                    )}
                  />
                </div>
              </Grid>
            )}

            <Controller
              name="bukharaToTashkentRegularTrain"
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
                  label="Bukhara - Tashkent one way"
                />
              )}
            />

            {formData.bukharaToTashkentRegularTrain && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Train Class</Typography>
                  <Controller
                    name="bukharaToTashkentRegularTrain__class"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={TRAIN_CLASSES.ECONOMY}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.ECONOMY} - $${
                              REGULAR_TRAIN_RATES.bukharaToTashkent.economy +
                              priceIncrease
                            }`}
                          />
                          <FormControlLabel
                            value={TRAIN_CLASSES.BUSINESS}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.BUSINESS} - $${
                              REGULAR_TRAIN_RATES.bukharaToTashkent.business +
                              priceIncrease
                            }`}
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
                            label={`${TRAIN_CLASSES.ECONOMY} - $${
                              REGULAR_TRAIN_RATES.samarkandToBukhara.economy +
                              priceIncrease
                            }`}
                          />
                          <FormControlLabel
                            value={TRAIN_CLASSES.BUSINESS}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.BUSINESS} - $${
                              REGULAR_TRAIN_RATES.samarkandToBukhara.business +
                              priceIncrease
                            }`}
                          />
                        </RadioGroup>
                      </div>
                    )}
                  />
                </div>
              </Grid>
            )}

            <Controller
              name="bukharaToSamarkandRegularTrain"
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
                  label="Bukhara - Samarkand one way"
                />
              )}
            />

            {formData.bukharaToSamarkandRegularTrain && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Train Class</Typography>
                  <Controller
                    name="bukharaToSamarkandRegularTrain__class"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={TRAIN_CLASSES.ECONOMY}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.ECONOMY} - $${
                              REGULAR_TRAIN_RATES.bukharaToSamarkand.economy +
                              priceIncrease
                            }`}
                          />
                          <FormControlLabel
                            value={TRAIN_CLASSES.BUSINESS}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.BUSINESS} - $${
                              REGULAR_TRAIN_RATES.bukharaToSamarkand.business +
                              priceIncrease
                            }`}
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

      {formData.tashkentToSamarkandRegularTrain ||
      formData.tashkentToBukharaRegularTrain ||
      formData.samarkandToBukharaRegularTrain ||
      formData.samarkandToTashkentRegularTrain ||
      formData.bukharaToTashkentRegularTrain ||
      formData.bukharaToSamarkandRegularTrain ? (
        <Grid style={styles.item} xs={6} item>
          <div style={styles.input}>
            <Typography variant="h4">
              Number Of Regular Train Tickets
            </Typography>
            <Controller
              name="numberOfRegularTrainTickets"
              control={control}
              rules={{
                required: 'Number Of Regular Train Tickets are required',
                min: {
                  value: 1,
                  message: 'Minimum is 1',
                },
              }}
              defaultValue={1}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Number Of Regular Train Tickets?"
                  variant="outlined"
                  fullWidth
                  type="number"
                  error={!!errors?.numberOfRegularTrainTickets}
                  helperText={errors?.numberOfRegularTrainTickets?.message}
                />
              )}
            />
          </div>
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
};

export default RegularTrains;
