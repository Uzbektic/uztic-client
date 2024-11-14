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
  ROOM_SIZES,
  SAMARKAND_HOTEL_RATES,
  TOURIST_TYPES,
} from '../../constants';

const RayyanHotel = () => {
  const [priceIncrease, setPriceIncrease] = useState(
    INCREASE_RATES_FOR_TOURISTS
  );

  const previousChargesRef = useRef({
    samarkandHotel__rayyan__standard: 0,
    samarkandHotel__rayyan__triple: 0,
  });

  const { control, watch, setValue } = useFormContext<CalculatorFormData>();

  const formData = watch();

  useEffect(() => {
    const calculateAndUpdateTotal = () => {
      let additionalCharge = 0;

      const updateRoomCharge = (
        hotelKey:
          | 'samarkandHotel__rayyan__standard'
          | 'samarkandHotel__rayyan__triple',
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
        'samarkandHotel__rayyan__standard',
        SAMARKAND_HOTEL_RATES.rayyan.standard
      );

      updateRoomCharge(
        'samarkandHotel__rayyan__triple',
        SAMARKAND_HOTEL_RATES.rayyan.triple
      );

      const currentTotal = formData.hotelTotalSamarkand || 0;
      setValue('hotelTotalSamarkand', currentTotal + additionalCharge);
    };

    calculateAndUpdateTotal();
  }, [
    formData.samarkandHotel__rayyan__standard,
    formData.samarkandHotel__rayyan__standard__room,
    formData.samarkandHotel__rayyan__triple,
    formData.samarkandHotel__rayyan__triple__room,
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
          <Typography variant="h4">Rayyan Hotel Samarkand</Typography>
          <FormGroup>
            <Controller
              name="samarkandHotel__rayyan__standard"
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

            {formData.samarkandHotel__rayyan__standard && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="samarkandHotel__rayyan__standard__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${
                              SAMARKAND_HOTEL_RATES.rayyan.standard.single +
                              priceIncrease
                            }`}
                          />
                          <FormControlLabel
                            value={ROOM_SIZES.DOUBLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.DOUBLE} - $${
                              SAMARKAND_HOTEL_RATES.rayyan.standard.double +
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
              name="samarkandHotel__rayyan__triple"
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

            {formData.samarkandHotel__rayyan__triple && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="samarkandHotel__rayyan__triple__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${
                              SAMARKAND_HOTEL_RATES.rayyan.triple.single +
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

export default RayyanHotel;
