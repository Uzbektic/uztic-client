import React, { useEffect, useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { CalculatorFormData } from '../../../../types/calculator';
import { ROOM_SIZES, TASHKENT_HOTEL_RATES } from '../../constants';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { styles } from '../../styles';

const HamptonHotel = () => {
  const previousChargesRef = useRef({
    tashkentHotel__hampton__superFlex: 0,
    tashkentHotel__hampton__queenKing: 0,
    tashkentHotel__hampton__deluxe: 0,
  });

  const { control, watch, setValue } = useFormContext<CalculatorFormData>();

  const formData = watch();

  useEffect(() => {
    const calculateAndUpdateTotal = () => {
      let additionalCharge = 0;

      const updateRoomCharge = (
        hotelKey:
          | 'tashkentHotel__hampton__superFlex'
          | 'tashkentHotel__hampton__queenKing'
          | 'tashkentHotel__hampton__deluxe',
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
        'tashkentHotel__hampton__superFlex',
        TASHKENT_HOTEL_RATES.hampton.superFlex
      );

      updateRoomCharge(
        'tashkentHotel__hampton__queenKing',
        TASHKENT_HOTEL_RATES.hampton.queenKing
      );

      updateRoomCharge(
        'tashkentHotel__hampton__deluxe',
        TASHKENT_HOTEL_RATES.hampton.deluxe
      );

      const currentTotal = formData.hotelTotalTashkent || 0;
      setValue('hotelTotalTashkent', currentTotal + additionalCharge);
    };

    calculateAndUpdateTotal();
  }, [
    formData.tashkentHotel__hampton__superFlex,
    formData.tashkentHotel__hampton__superFlex__room,
    formData.tashkentHotel__hampton__queenKing,
    formData.tashkentHotel__hampton__queenKing__room,
    formData.tashkentHotel__hampton__deluxe,
    formData.tashkentHotel__hampton__deluxe__room,
    setValue,
  ]);

  return (
    <>
      <Grid xs={12} item>
        <div style={styles.input}>
          <Typography variant="h4">Hampton by Hilton Tashkent</Typography>
          <FormGroup>
            <Controller
              name="tashkentHotel__hampton__superFlex"
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
                  label="Super Flex,Twin"
                />
              )}
            />

            {formData.tashkentHotel__hampton__superFlex && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="tashkentHotel__hampton__superFlex__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${TASHKENT_HOTEL_RATES.hampton.superFlex.single}`}
                          />
                          <FormControlLabel
                            value={ROOM_SIZES.DOUBLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.DOUBLE} - $${TASHKENT_HOTEL_RATES.hampton.superFlex.double}`}
                          />
                        </RadioGroup>
                      </div>
                    )}
                  />
                </div>
              </Grid>
            )}

            <Controller
              name="tashkentHotel__hampton__queenKing"
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
                  label="Queen, King"
                />
              )}
            />

            {formData.tashkentHotel__hampton__queenKing && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="tashkentHotel__hampton__queenKing__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${TASHKENT_HOTEL_RATES.hampton.queenKing.single}`}
                          />
                          <FormControlLabel
                            value={ROOM_SIZES.DOUBLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.DOUBLE} - $${TASHKENT_HOTEL_RATES.hampton.queenKing.double}`}
                          />
                        </RadioGroup>
                      </div>
                    )}
                  />
                </div>
              </Grid>
            )}

            <Controller
              name="tashkentHotel__hampton__deluxe"
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
                  label="Deluxe"
                />
              )}
            />

            {formData.tashkentHotel__hampton__deluxe && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="tashkentHotel__hampton__deluxe__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${TASHKENT_HOTEL_RATES.hampton.deluxe.single}`}
                          />
                          <FormControlLabel
                            value={ROOM_SIZES.DOUBLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.DOUBLE} - $${TASHKENT_HOTEL_RATES.hampton.deluxe.double}`}
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

export default HamptonHotel;
