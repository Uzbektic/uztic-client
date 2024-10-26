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

const HyattRegencyHotel = () => {
  const previousChargesRef = useRef({
    tashkentHotel__hyattRegency__standardKing: 0,
    tashkentHotel__hyattRegency__deluxeKing: 0,
    tashkentHotel__hyattRegency__clubKing: 0,
  });

  const { control, watch, setValue } = useFormContext<CalculatorFormData>();

  const formData = watch();

  useEffect(() => {
    const calculateAndUpdateTotal = () => {
      let additionalCharge = 0;

      const updateRoomCharge = (
        hotelKey:
          | 'tashkentHotel__hyattRegency__standardKing'
          | 'tashkentHotel__hyattRegency__deluxeKing'
          | 'tashkentHotel__hyattRegency__clubKing',
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
        'tashkentHotel__hyattRegency__standardKing',
        TASHKENT_HOTEL_RATES.hyattRegency.standardKing
      );

      updateRoomCharge(
        'tashkentHotel__hyattRegency__deluxeKing',
        TASHKENT_HOTEL_RATES.hyattRegency.deluxeKing
      );

      updateRoomCharge(
        'tashkentHotel__hyattRegency__clubKing',
        TASHKENT_HOTEL_RATES.hyattRegency.clubKing
      );

      const currentTotal = formData.hotelTotalTashkent || 0;
      setValue('hotelTotalTashkent', currentTotal + additionalCharge);
    };

    calculateAndUpdateTotal();
  }, [
    formData.tashkentHotel__hyattRegency__standardKing,
    formData.tashkentHotel__hyattRegency__standardKing__room,
    formData.tashkentHotel__hyattRegency__deluxeKing,
    formData.tashkentHotel__hyattRegency__deluxeKing__room,
    formData.tashkentHotel__hyattRegency__clubKing,
    formData.tashkentHotel__hyattRegency__clubKing__room,
    setValue,
  ]);

  return (
    <>
      <Grid xs={12} item>
        <div style={styles.input}>
          <Typography variant="h4">Hyatt Regency</Typography>
          <FormGroup>
            <Controller
              name="tashkentHotel__hyattRegency__standardKing"
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
                  label="Standard King / Twin"
                />
              )}
            />

            {formData.tashkentHotel__hyattRegency__standardKing && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="tashkentHotel__hyattRegency__standardKing__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${TASHKENT_HOTEL_RATES.hyattRegency.standardKing.single}`}
                          />
                          <FormControlLabel
                            value={ROOM_SIZES.DOUBLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.DOUBLE} - $${TASHKENT_HOTEL_RATES.hyattRegency.standardKing.double}`}
                          />
                        </RadioGroup>
                      </div>
                    )}
                  />
                </div>
              </Grid>
            )}

            <Controller
              name="tashkentHotel__hyattRegency__deluxeKing"
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
                  label="Deluxe King / Twin"
                />
              )}
            />

            {formData.tashkentHotel__hyattRegency__deluxeKing && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="tashkentHotel__hyattRegency__deluxeKing__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${TASHKENT_HOTEL_RATES.hyattRegency.deluxeKing.single}`}
                          />
                          <FormControlLabel
                            value={ROOM_SIZES.DOUBLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.DOUBLE} - $${TASHKENT_HOTEL_RATES.hyattRegency.deluxeKing.double}`}
                          />
                        </RadioGroup>
                      </div>
                    )}
                  />
                </div>
              </Grid>
            )}

            <Controller
              name="tashkentHotel__hyattRegency__clubKing"
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
                  label="Club King / Twin"
                />
              )}
            />

            {formData.tashkentHotel__hyattRegency__clubKing && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="tashkentHotel__hyattRegency__clubKing__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${TASHKENT_HOTEL_RATES.hyattRegency.clubKing.single}`}
                          />
                          <FormControlLabel
                            value={ROOM_SIZES.DOUBLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.DOUBLE} - $${TASHKENT_HOTEL_RATES.hyattRegency.clubKing.double}`}
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

export default HyattRegencyHotel;
