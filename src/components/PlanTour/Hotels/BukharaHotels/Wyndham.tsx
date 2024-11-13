import React, { useEffect, useRef, useState } from 'react';
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
import {
  BUKHARA_HOTEL_RATES,
  INCREASE_RATES_FOR_AGENCY,
  INCREASE_RATES_FOR_TOURISTS,
  ROOM_SIZES,
  TOURIST_TYPES,
} from '../../constants';

const WyndhamHotel = () => {
  const [priceIncrease, setPriceIncrease] = useState(
    INCREASE_RATES_FOR_TOURISTS
  );

  const previousChargesRef = useRef({
    bukharaHotel__wyndham__standard: 0,
    bukharaHotel__wyndham__deluxe: 0,
  });

  const { control, watch, setValue } = useFormContext<CalculatorFormData>();

  const formData = watch();

  useEffect(() => {
    const calculateAndUpdateTotal = () => {
      let additionalCharge = 0;

      const updateRoomCharge = (
        hotelKey:
          | 'bukharaHotel__wyndham__standard'
          | 'bukharaHotel__wyndham__deluxe',
        rates: { single: number; double: number }
      ) => {
        if (formData[hotelKey]) {
          const roomCharge =
            formData[`${hotelKey}__room`] === ROOM_SIZES.SINGLE
              ? rates.single + priceIncrease
              : formData[`${hotelKey}__room`] === ROOM_SIZES.DOUBLE
              ? rates.double + priceIncrease
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
        'bukharaHotel__wyndham__standard',
        BUKHARA_HOTEL_RATES.wyndham.standard
      );

      updateRoomCharge(
        'bukharaHotel__wyndham__deluxe',
        BUKHARA_HOTEL_RATES.wyndham.deluxe
      );

      const currentTotal = formData.hotelTotalBukhara || 0;
      setValue('hotelTotalBukhara', currentTotal + additionalCharge);
    };

    calculateAndUpdateTotal();
  }, [
    formData.bukharaHotel__wyndham__standard,
    formData.bukharaHotel__wyndham__standard__room,
    formData.bukharaHotel__wyndham__deluxe,
    formData.bukharaHotel__wyndham__deluxe__room,
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
      <Grid xs={12} item>
        <div style={styles.input}>
          <Typography variant="h4">Wyndham Bukhara</Typography>
          <FormGroup>
            <Controller
              name="bukharaHotel__wyndham__standard"
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

            {formData.bukharaHotel__wyndham__standard && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="bukharaHotel__wyndham__standard__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${
                              BUKHARA_HOTEL_RATES.wyndham.standard.single +
                              priceIncrease
                            }`}
                          />
                          <FormControlLabel
                            value={ROOM_SIZES.DOUBLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.DOUBLE} - $${
                              BUKHARA_HOTEL_RATES.wyndham.standard.double +
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
              name="bukharaHotel__wyndham__deluxe"
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
                  label="Deluxe Room"
                />
              )}
            />

            {formData.bukharaHotel__wyndham__deluxe && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="bukharaHotel__wyndham__deluxe__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${
                              BUKHARA_HOTEL_RATES.wyndham.deluxe.single +
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
    </>
  );
};

export default WyndhamHotel;
