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
import { BUKHARA_HOTEL_RATES, ROOM_SIZES } from '../../constants';

const ShahidZarafshanHotel = () => {
  const previousChargesRef = useRef({
    bukharaHotel__shahidZarafshan__standard: 0,
    bukharaHotel__shahidZarafshan__deluxe: 0,
  });

  const { control, watch, setValue } = useFormContext<CalculatorFormData>();

  const formData = watch();

  useEffect(() => {
    const calculateAndUpdateTotal = () => {
      let additionalCharge = 0;

      const updateRoomCharge = (
        hotelKey:
          | 'bukharaHotel__shahidZarafshan__standard'
          | 'bukharaHotel__shahidZarafshan__deluxe',
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
        'bukharaHotel__shahidZarafshan__standard',
        BUKHARA_HOTEL_RATES.shahidZarafshan.standard
      );

      updateRoomCharge(
        'bukharaHotel__shahidZarafshan__deluxe',
        BUKHARA_HOTEL_RATES.shahidZarafshan.deluxe
      );

      const currentTotal = formData.hotelTotalBukhara || 0;
      setValue('hotelTotalBukhara', currentTotal + additionalCharge);
    };

    calculateAndUpdateTotal();
  }, [
    formData.bukharaHotel__shahidZarafshan__standard,
    formData.bukharaHotel__shahidZarafshan__standard__room,
    formData.bukharaHotel__shahidZarafshan__deluxe,
    formData.bukharaHotel__shahidZarafshan__deluxe__room,
    setValue,
  ]);

  return (
    <>
      <Grid xs={12} item>
        <div style={styles.input}>
          <Typography variant="h4">Sahid Zarafshan Bukhara</Typography>
          <FormGroup>
            <Controller
              name="bukharaHotel__shahidZarafshan__standard"
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
                  label="Superior Standard"
                />
              )}
            />

            {formData.bukharaHotel__shahidZarafshan__standard && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="bukharaHotel__shahidZarafshan__standard__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${BUKHARA_HOTEL_RATES.shahidZarafshan.standard.single}`}
                          />
                          <FormControlLabel
                            value={ROOM_SIZES.DOUBLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.DOUBLE} - $${BUKHARA_HOTEL_RATES.shahidZarafshan.standard.double}`}
                          />
                        </RadioGroup>
                      </div>
                    )}
                  />
                </div>
              </Grid>
            )}

            <Controller
              name="bukharaHotel__shahidZarafshan__deluxe"
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
                  label="Grand Deluxe"
                />
              )}
            />

            {formData.bukharaHotel__shahidZarafshan__deluxe && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="bukharaHotel__shahidZarafshan__deluxe__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${BUKHARA_HOTEL_RATES.shahidZarafshan.deluxe.single}`}
                          />
                          <FormControlLabel
                            value={ROOM_SIZES.DOUBLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.DOUBLE} - $${BUKHARA_HOTEL_RATES.shahidZarafshan.deluxe.double}`}
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

export default ShahidZarafshanHotel;
