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

const DsfGardenHotel = () => {
  const previousChargesRef = useRef({
    tashkentHotel__dsfGarden__standard: 0,
    tashkentHotel__dsfGarden__triple: 0,
  });

  const { control, watch, setValue } = useFormContext<CalculatorFormData>();

  const formData = watch();

  useEffect(() => {
    const calculateAndUpdateTotal = () => {
      let additionalCharge = 0;

      const updateRoomCharge = (
        hotelKey:
          | 'tashkentHotel__dsfGarden__standard'
          | 'tashkentHotel__dsfGarden__triple',
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
        'tashkentHotel__dsfGarden__standard',
        TASHKENT_HOTEL_RATES.dsfGarden.standard
      );

      updateRoomCharge(
        'tashkentHotel__dsfGarden__triple',
        TASHKENT_HOTEL_RATES.dsfGarden.triple
      );

      const currentTotal = formData.hotelTotalTashkent || 0;
      setValue('hotelTotalTashkent', currentTotal + additionalCharge);
    };

    calculateAndUpdateTotal();
  }, [
    formData.tashkentHotel__dsfGarden__standard,
    formData.tashkentHotel__dsfGarden__standard__room,
    formData.tashkentHotel__dsfGarden__triple,
    formData.tashkentHotel__dsfGarden__triple__room,
    setValue,
  ]);

  return (
    <>
      <Grid xs={12} item>
        <div style={styles.input}>
          <Typography variant="h4">DSF Garden Hotel</Typography>
          <FormGroup>
            <Controller
              name="tashkentHotel__dsfGarden__standard"
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

            {formData.tashkentHotel__dsfGarden__standard && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="tashkentHotel__dsfGarden__standard__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${TASHKENT_HOTEL_RATES.dsfGarden.standard.single}`}
                          />
                          <FormControlLabel
                            value={ROOM_SIZES.DOUBLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.DOUBLE} - $${TASHKENT_HOTEL_RATES.dsfGarden.standard.double}`}
                          />
                        </RadioGroup>
                      </div>
                    )}
                  />
                </div>
              </Grid>
            )}

            <Controller
              name="tashkentHotel__dsfGarden__triple"
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
                  label="Triple Room"
                />
              )}
            />

            {formData.tashkentHotel__dsfGarden__triple && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="tashkentHotel__dsfGarden__triple__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${TASHKENT_HOTEL_RATES.dsfGarden.triple.single}`}
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

export default DsfGardenHotel;
