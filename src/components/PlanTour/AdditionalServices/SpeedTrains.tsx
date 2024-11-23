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
  SPEED_TRAIN_RATES,
  TOURIST_TYPES,
  TRAIN_CLASSES,
} from '../constants';

const SpeedTrains = () => {
  const [priceIncrease, setPriceIncrease] = useState(
    INCREASE_RATES_FOR_TOURISTS
  );

  const previousChargesRef = useRef({
    tashkentToSamarkandSpeedTrain: 0,
    tashkentToBukharaSpeedTrain: 0,
    samarkandToBukharaSpeedTrain: 0,
    samarkandToTashkentSpeedTrain: 0,
    bukharaToTashkentSpeedTrain: 0,
    bukharaToSamarkandSpeedTrain: 0,
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
          | 'tashkentToSamarkandSpeedTrain'
          | 'tashkentToBukharaSpeedTrain'
          | 'samarkandToBukharaSpeedTrain'
          | 'samarkandToTashkentSpeedTrain'
          | 'bukharaToTashkentSpeedTrain'
          | 'bukharaToSamarkandSpeedTrain',
        rates: { economy: number; business: number }
      ) => {
        if (formData[key]) {
          const roomCharge =
            formData[`${key}__class`] === TRAIN_CLASSES.ECONOMY
              ? (rates.economy + priceIncrease) *
                formData.numberOfSpeedTrainTickets
              : formData[`${key}__class`] === TRAIN_CLASSES.BUSINESS
              ? (rates.business + priceIncrease) *
                formData.numberOfSpeedTrainTickets
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
        'tashkentToSamarkandSpeedTrain',
        SPEED_TRAIN_RATES.tashkentToSamarkand
      );

      updateCharge(
        'tashkentToBukharaSpeedTrain',
        SPEED_TRAIN_RATES.tashkentToBukhara
      );

      updateCharge(
        'samarkandToBukharaSpeedTrain',
        SPEED_TRAIN_RATES.samarkandToBukhara
      );

      updateCharge(
        'samarkandToTashkentSpeedTrain',
        SPEED_TRAIN_RATES.samarkandToTashkent
      );

      updateCharge(
        'bukharaToTashkentSpeedTrain',
        SPEED_TRAIN_RATES.bukharaToTashkent
      );

      updateCharge(
        'bukharaToSamarkandSpeedTrain',
        SPEED_TRAIN_RATES.bukharaToSamarkand
      );

      const currentTotal = formData.additionalSpeedTrainsTotal || 0;
      setValue('additionalSpeedTrainsTotal', currentTotal + additionalCharge);
    };

    calculateAndUpdateTotal();
  }, [
    formData.tashkentToSamarkandSpeedTrain,
    formData.tashkentToSamarkandSpeedTrain__class,
    formData.tashkentToBukharaSpeedTrain,
    formData.tashkentToBukharaSpeedTrain__class,
    formData.samarkandToBukharaSpeedTrain,
    formData.samarkandToBukharaSpeedTrain__class,
    formData.samarkandToTashkentSpeedTrain,
    formData.samarkandToTashkentSpeedTrain__class,
    formData.bukharaToTashkentSpeedTrain,
    formData.bukharaToTashkentSpeedTrain__class,
    formData.bukharaToSamarkandSpeedTrain,
    formData.bukharaToSamarkandSpeedTrain__class,
    formData.numberOfSpeedTrainTickets,
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
            Afrosiab speed train per person in $
          </Typography>
          <FormGroup>
            <Controller
              name="tashkentToSamarkandSpeedTrain"
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

            {formData.tashkentToSamarkandSpeedTrain && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Train Class</Typography>
                  <Controller
                    name="tashkentToSamarkandSpeedTrain__class"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={TRAIN_CLASSES.ECONOMY}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.ECONOMY} - $${
                              SPEED_TRAIN_RATES.tashkentToSamarkand.economy +
                              priceIncrease
                            }`}
                          />
                          <FormControlLabel
                            value={TRAIN_CLASSES.BUSINESS}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.BUSINESS} - $${
                              SPEED_TRAIN_RATES.tashkentToSamarkand.business +
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
              name="samarkandToTashkentSpeedTrain"
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

            {formData.samarkandToTashkentSpeedTrain && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Train Class</Typography>
                  <Controller
                    name="samarkandToTashkentSpeedTrain__class"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={TRAIN_CLASSES.ECONOMY}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.ECONOMY} - $${
                              SPEED_TRAIN_RATES.samarkandToTashkent.economy +
                              priceIncrease
                            }`}
                          />
                          <FormControlLabel
                            value={TRAIN_CLASSES.BUSINESS}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.BUSINESS} - $${
                              SPEED_TRAIN_RATES.samarkandToTashkent.business +
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
              name="tashkentToBukharaSpeedTrain"
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

            {formData.tashkentToBukharaSpeedTrain && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Train Class</Typography>
                  <Controller
                    name="tashkentToBukharaSpeedTrain__class"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={TRAIN_CLASSES.ECONOMY}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.ECONOMY} - $${
                              SPEED_TRAIN_RATES.tashkentToBukhara.economy +
                              priceIncrease
                            }`}
                          />
                          <FormControlLabel
                            value={TRAIN_CLASSES.BUSINESS}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.BUSINESS} - $${
                              SPEED_TRAIN_RATES.tashkentToBukhara.business +
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
              name="bukharaToTashkentSpeedTrain"
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

            {formData.bukharaToTashkentSpeedTrain && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Train Class</Typography>
                  <Controller
                    name="bukharaToTashkentSpeedTrain__class"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={TRAIN_CLASSES.ECONOMY}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.ECONOMY} - $${
                              SPEED_TRAIN_RATES.bukharaToTashkent.economy +
                              priceIncrease
                            }`}
                          />
                          <FormControlLabel
                            value={TRAIN_CLASSES.BUSINESS}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.BUSINESS} - $${
                              SPEED_TRAIN_RATES.bukharaToTashkent.business +
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
              name="samarkandToBukharaSpeedTrain"
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

            {formData.samarkandToBukharaSpeedTrain && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Train Class</Typography>
                  <Controller
                    name="samarkandToBukharaSpeedTrain__class"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={TRAIN_CLASSES.ECONOMY}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.ECONOMY} - $${
                              SPEED_TRAIN_RATES.samarkandToBukhara.economy +
                              priceIncrease
                            }`}
                          />
                          <FormControlLabel
                            value={TRAIN_CLASSES.BUSINESS}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.BUSINESS} - $${
                              SPEED_TRAIN_RATES.samarkandToBukhara.business +
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
              name="bukharaToSamarkandSpeedTrain"
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

            {formData.bukharaToSamarkandSpeedTrain && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Train Class</Typography>
                  <Controller
                    name="bukharaToSamarkandSpeedTrain__class"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={TRAIN_CLASSES.ECONOMY}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.ECONOMY} - $${
                              SPEED_TRAIN_RATES.bukharaToSamarkand.economy +
                              priceIncrease
                            }`}
                          />
                          <FormControlLabel
                            value={TRAIN_CLASSES.BUSINESS}
                            control={<Radio />}
                            label={`${TRAIN_CLASSES.BUSINESS} - $${
                              SPEED_TRAIN_RATES.bukharaToSamarkand.business +
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

      {formData.tashkentToSamarkandSpeedTrain ||
      formData.tashkentToBukharaSpeedTrain ||
      formData.samarkandToBukharaSpeedTrain ||
      formData.samarkandToTashkentSpeedTrain ||
      formData.bukharaToTashkentSpeedTrain ||
      formData.bukharaToSamarkandSpeedTrain ? (
        <Grid style={styles.item} xs={6} item>
          <div style={styles.input}>
            <Typography variant="h4">Number Of Speed Train Tickets</Typography>
            <Controller
              name="numberOfSpeedTrainTickets"
              control={control}
              rules={{
                required: 'Number Of Speed Train Tickets are required',
                min: {
                  value: 1,
                  message: 'Minimum is 1',
                },
              }}
              defaultValue={1}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Number Of Speed Train Tickets?"
                  variant="outlined"
                  fullWidth
                  type="number"
                  error={!!errors?.numberOfSpeedTrainTickets}
                  helperText={errors?.numberOfSpeedTrainTickets?.message}
                />
              )}
            />
          </div>
        </Grid>
      ) : (
        <Grid xs={12} item></Grid>
      )}
    </>
  );
};

export default SpeedTrains;
