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
  INCREASE_RATES_FOR_AGENCY,
  INCREASE_RATES_FOR_TOURISTS,
  KHIVA_HOTEL_RATES,
  ROOM_SIZES,
  TOURIST_TYPES,
} from '../../constants';

const OrientStarHotel = () => {
  const [priceIncrease, setPriceIncrease] = useState(
    INCREASE_RATES_FOR_TOURISTS
  );

  const previousChargesRef = useRef({
    khivaHotel__orientStar__standard: 0,
    khivaHotel__orientStar__triple: 0,
  });

  const { control, watch, setValue } = useFormContext<CalculatorFormData>();

  const formData = watch();

  useEffect(() => {
    const calculateAndUpdateTotal = () => {
      let additionalCharge = 0;

      const updateRoomCharge = (
        hotelKey:
          | 'khivaHotel__orientStar__standard'
          | 'khivaHotel__orientStar__triple',
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
        'khivaHotel__orientStar__standard',
        KHIVA_HOTEL_RATES.orientStar.standard
      );

      updateRoomCharge(
        'khivaHotel__orientStar__triple',
        KHIVA_HOTEL_RATES.orientStar.triple
      );

      const currentTotal = formData.hotelTotalKhiva || 0;
      setValue('hotelTotalKhiva', currentTotal + additionalCharge);
    };

    calculateAndUpdateTotal();
  }, [
    formData.khivaHotel__orientStar__standard,
    formData.khivaHotel__orientStar__standard__room,
    formData.khivaHotel__orientStar__triple,
    formData.khivaHotel__orientStar__triple__room,
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
          <Typography variant="h4">Orient Star Khiva</Typography>
          <FormGroup>
            <Controller
              name="khivaHotel__orientStar__standard"
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
                  label="Standard Room"
                />
              )}
            />

            {formData.khivaHotel__orientStar__standard && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="khivaHotel__orientStar__standard__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${
                              KHIVA_HOTEL_RATES.orientStar.standard.single +
                              priceIncrease
                            }`}
                          />
                          <FormControlLabel
                            value={ROOM_SIZES.DOUBLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.DOUBLE} - $${
                              KHIVA_HOTEL_RATES.orientStar.standard.double +
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
              name="khivaHotel__orientStar__triple"
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
                  label="Triple"
                />
              )}
            />

            {formData.khivaHotel__orientStar__triple && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="khivaHotel__orientStar__triple__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${
                              KHIVA_HOTEL_RATES.orientStar.triple.single +
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

export default OrientStarHotel;
