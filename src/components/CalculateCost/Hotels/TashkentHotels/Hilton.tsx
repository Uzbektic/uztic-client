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

const HiltonHotel = () => {
  const previousChargesRef = useRef({
    tashkentHotel__hilton__guestRoom: 0,
    tashkentHotel__hilton__executiveRoom: 0,
    tashkentHotel__hilton__cornerSuite: 0,
  });

  const { control, watch, setValue } = useFormContext<CalculatorFormData>();

  const formData = watch();

  useEffect(() => {
    const calculateAndUpdateTotal = () => {
      let additionalCharge = 0;

      const updateRoomCharge = (
        hotelKey:
          | 'tashkentHotel__hilton__guestRoom'
          | 'tashkentHotel__hilton__executiveRoom'
          | 'tashkentHotel__hilton__cornerSuite',
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
        'tashkentHotel__hilton__guestRoom',
        TASHKENT_HOTEL_RATES.hilton.guestRoom
      );

      updateRoomCharge(
        'tashkentHotel__hilton__executiveRoom',
        TASHKENT_HOTEL_RATES.hilton.executiveRoom
      );

      updateRoomCharge(
        'tashkentHotel__hilton__cornerSuite',
        TASHKENT_HOTEL_RATES.hilton.cornerSuite
      );

      const currentTotal = formData.hotelTotal || 0;
      setValue('hotelTotal', currentTotal + additionalCharge);
    };

    calculateAndUpdateTotal();
  }, [
    formData.tashkentHotel__hilton__guestRoom,
    formData.tashkentHotel__hilton__guestRoom__room,
    formData.tashkentHotel__hilton__executiveRoom,
    formData.tashkentHotel__hilton__executiveRoom__room,
    formData.tashkentHotel__hilton__cornerSuite,
    formData.tashkentHotel__hilton__cornerSuite__room,
    setValue,
  ]);

  return (
    <>
      <Grid xs={12} item>
        <div style={styles.input}>
          <Typography variant="h4">Hilton</Typography>
          <FormGroup>
            <Controller
              name="tashkentHotel__hilton__guestRoom"
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
                  label="Guest room"
                />
              )}
            />

            {formData.tashkentHotel__hilton__guestRoom && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="tashkentHotel__hilton__guestRoom__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${TASHKENT_HOTEL_RATES.hilton.guestRoom.single}`}
                          />
                          <FormControlLabel
                            value={ROOM_SIZES.DOUBLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.DOUBLE} - $${TASHKENT_HOTEL_RATES.hilton.guestRoom.double}`}
                          />
                        </RadioGroup>
                      </div>
                    )}
                  />
                </div>
              </Grid>
            )}

            <Controller
              name="tashkentHotel__hilton__executiveRoom"
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
                  label="Executive room"
                />
              )}
            />

            {formData.tashkentHotel__hilton__executiveRoom && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="tashkentHotel__hilton__executiveRoom__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${TASHKENT_HOTEL_RATES.hilton.executiveRoom.single}`}
                          />
                          <FormControlLabel
                            value={ROOM_SIZES.DOUBLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.DOUBLE} - $${TASHKENT_HOTEL_RATES.hilton.executiveRoom.double}`}
                          />
                        </RadioGroup>
                      </div>
                    )}
                  />
                </div>
              </Grid>
            )}

            <Controller
              name="tashkentHotel__hilton__cornerSuite"
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
                  label="Corner Suite"
                />
              )}
            />

            {formData.tashkentHotel__hilton__cornerSuite && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="tashkentHotel__hilton__cornerSuite__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${TASHKENT_HOTEL_RATES.hilton.cornerSuite.single}`}
                          />
                          <FormControlLabel
                            value={ROOM_SIZES.DOUBLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.DOUBLE} - $${TASHKENT_HOTEL_RATES.hilton.cornerSuite.double}`}
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

export default HiltonHotel;
