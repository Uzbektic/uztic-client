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
import { ROOM_SIZES, SAMARKAND_HOTEL_RATES } from '../../constants';

const DilshodaHotel = () => {
  const previousChargesRef = useRef({
    samarkandHotel__dilshoda__standard: 0,
    samarkandHotel__dilshoda__triple: 0,
  });

  const { control, watch, setValue } = useFormContext<CalculatorFormData>();

  const formData = watch();

  useEffect(() => {
    const calculateAndUpdateTotal = () => {
      let additionalCharge = 0;

      const updateRoomCharge = (
        hotelKey:
          | 'samarkandHotel__dilshoda__standard'
          | 'samarkandHotel__dilshoda__triple',
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
        'samarkandHotel__dilshoda__standard',
        SAMARKAND_HOTEL_RATES.dilshoda.standard
      );

      updateRoomCharge(
        'samarkandHotel__dilshoda__triple',
        SAMARKAND_HOTEL_RATES.dilshoda.triple
      );

      const currentTotal = formData.hotelTotalSamarkand || 0;
      setValue('hotelTotalSamarkand', currentTotal + additionalCharge);
    };

    calculateAndUpdateTotal();
  }, [
    formData.samarkandHotel__dilshoda__standard,
    formData.samarkandHotel__dilshoda__standard__room,
    formData.samarkandHotel__dilshoda__triple,
    formData.samarkandHotel__dilshoda__triple__room,
    setValue,
  ]);

  return (
    <>
      <Grid xs={12} item>
        <div style={styles.input}>
          <Typography variant="h4">Dilshoda Prime</Typography>
          <FormGroup>
            <Controller
              name="samarkandHotel__dilshoda__standard"
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

            {formData.samarkandHotel__dilshoda__standard && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="samarkandHotel__dilshoda__standard__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${SAMARKAND_HOTEL_RATES.dilshoda.standard.single}`}
                          />
                          <FormControlLabel
                            value={ROOM_SIZES.DOUBLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.DOUBLE} - $${SAMARKAND_HOTEL_RATES.dilshoda.standard.double}`}
                          />
                        </RadioGroup>
                      </div>
                    )}
                  />
                </div>
              </Grid>
            )}

            <Controller
              name="samarkandHotel__dilshoda__triple"
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

            {formData.samarkandHotel__dilshoda__triple && (
              <Grid xs={12} item>
                <div style={styles.input}>
                  <Typography variant="h4">Room Size</Typography>
                  <Controller
                    name="samarkandHotel__dilshoda__triple__room"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <div style={{ paddingLeft: 20 }}>
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value={ROOM_SIZES.SINGLE}
                            control={<Radio />}
                            label={`${ROOM_SIZES.SINGLE} - $${SAMARKAND_HOTEL_RATES.dilshoda.triple.single}`}
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

export default DilshodaHotel;
