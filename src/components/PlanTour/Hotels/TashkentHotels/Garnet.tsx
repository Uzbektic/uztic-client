import React, { useEffect, useRef } from 'react';
import { CalculatorFormData } from '../../../../types/calculator';
import { Controller, useFormContext } from 'react-hook-form';
import { styles } from '../../styles';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { ROOM_SIZES, TASHKENT_HOTEL_RATES } from '../../constants';

const GarnetHotel = () => {
  const previousChargesRef = useRef({
    tashkentHotel__garnet__standard: 0,
    tashkentHotel__garnet__deluxe: 0,
    tashkentHotel__garnet__triple: 0,
    tashkentHotel__garnet__suite: 0,
  });

  const { control, watch, setValue } = useFormContext<CalculatorFormData>();

  const formData = watch();

  useEffect(() => {
    const calculateAndUpdateTotal = () => {
      let additionalCharge = 0;

      const updateRoomCharge = (
        hotelKey:
          | 'tashkentHotel__garnet__standard'
          | 'tashkentHotel__garnet__deluxe'
          | 'tashkentHotel__garnet__triple'
          | 'tashkentHotel__garnet__suite',
        rates: { single: number; double: number }
      ) => {
        if (formData[hotelKey]) {
          const roomCharge =
            formData[`${hotelKey}__room`] === ROOM_SIZES.SINGLE
              ? rates.single
              : formData[`${hotelKey}__room`] === ROOM_SIZES.DOUBLE
              ? rates.double
              : 0;

          additionalCharge += roomCharge - previousChargesRef.current[hotelKey];
          previousChargesRef.current[hotelKey] = roomCharge;
        } else {
          additionalCharge -= previousChargesRef.current[hotelKey];
          previousChargesRef.current[hotelKey] = 0;
          setValue(`${hotelKey}__room` as keyof CalculatorFormData, undefined);
        }
      };

      updateRoomCharge(
        'tashkentHotel__garnet__standard',
        TASHKENT_HOTEL_RATES.garnet.standard
      );

      updateRoomCharge(
        'tashkentHotel__garnet__deluxe',
        TASHKENT_HOTEL_RATES.garnet.deluxe
      );

      updateRoomCharge(
        'tashkentHotel__garnet__triple',
        TASHKENT_HOTEL_RATES.garnet.triple
      );

      updateRoomCharge(
        'tashkentHotel__garnet__suite',
        TASHKENT_HOTEL_RATES.garnet.suite
      );

      const currentTotal = formData.hotelTotalTashkent || 0;
      setValue('hotelTotalTashkent', currentTotal + additionalCharge);
    };

    calculateAndUpdateTotal();
  }, [
    formData.tashkentHotel__garnet__standard,
    formData.tashkentHotel__garnet__standard__room,
    formData.tashkentHotel__garnet__deluxe,
    formData.tashkentHotel__garnet__deluxe__room,
    formData.tashkentHotel__garnet__triple,
    formData.tashkentHotel__garnet__triple__room,
    formData.tashkentHotel__garnet__suite,
    formData.tashkentHotel__garnet__suite__room,
    setValue,
  ]);

  return (
    <>
      <Grid xs={12} item>
        <div style={styles.input}>
          <Typography variant="h4">Gabrielle International Hotel</Typography>
          <FormGroup>
            <Controller
              name="tashkentHotel__garnet__standard"
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
                  label="Standard room"
                />
              )}
            />

            {formData.tashkentHotel__garnet__standard && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="tashkentHotel__garnet__standard__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${TASHKENT_HOTEL_RATES.garnet.standard.single}`}
                          />
                          <FormControlLabel
                            value={ROOM_SIZES.DOUBLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.DOUBLE} - $${TASHKENT_HOTEL_RATES.garnet.standard.double}`}
                          />
                        </RadioGroup>
                      </div>
                    )}
                  />
                </div>
              </Grid>
            )}

            <Controller
              name="tashkentHotel__garnet__deluxe"
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
                  label="Deluxe room"
                />
              )}
            />

            {formData.tashkentHotel__garnet__deluxe && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="tashkentHotel__garnet__deluxe__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${TASHKENT_HOTEL_RATES.garnet.deluxe.single}`}
                          />
                          <FormControlLabel
                            value={ROOM_SIZES.DOUBLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.DOUBLE} - $${TASHKENT_HOTEL_RATES.garnet.deluxe.double}`}
                          />
                        </RadioGroup>
                      </div>
                    )}
                  />
                </div>
              </Grid>
            )}

            <Controller
              name="tashkentHotel__garnet__triple"
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
                  label="Triple room"
                />
              )}
            />

            {formData.tashkentHotel__garnet__triple && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="tashkentHotel__garnet__triple__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${TASHKENT_HOTEL_RATES.garnet.triple.single}`}
                          />
                        </RadioGroup>
                      </div>
                    )}
                  />
                </div>
              </Grid>
            )}

            <Controller
              name="tashkentHotel__garnet__suite"
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
                  label="Suite"
                />
              )}
            />

            {formData.tashkentHotel__garnet__suite && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="tashkentHotel__garnet__suite__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${TASHKENT_HOTEL_RATES.garnet.suite.single}`}
                          />
                          <FormControlLabel
                            value={ROOM_SIZES.DOUBLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.DOUBLE} - $${TASHKENT_HOTEL_RATES.garnet.suite.double}`}
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

export default GarnetHotel;
