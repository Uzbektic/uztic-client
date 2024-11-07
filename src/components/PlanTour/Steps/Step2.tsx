import React from 'react';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from '@mui/material';
import { styles } from '../styles';
import { CalculatorFormData } from '../../../types/calculator';
import { Controller, useFormContext } from 'react-hook-form';
import TashkentHotels from '../Hotels/TashkentHotels';
import SamarkandHotels from '../Hotels/SamarkandHotels';
import BukharaHotels from '../Hotels/BukharaHotels';
import KhivaHotels from '../Hotels/KhivaHotels';
import { HOTEL_CITIES } from '../constants';
import NumberOfNights from '../Components/NumberOfNights';
import NumberOfRooms from '../Components/NumberOfRooms';

const Step2 = () => {
  const { control, watch, setValue } = useFormContext<CalculatorFormData>();

  const formData = watch();

  const clearHotelSelections = (cityKey: string) => {
    const cityHotelKeys = Object.keys(formData).filter((key) =>
      key.startsWith(`${cityKey}Hotel__`)
    );

    if (cityKey === HOTEL_CITIES.TASHKENT) {
      setValue('hotelTotalTashkent', 0);
    }

    if (cityKey === HOTEL_CITIES.SAMARKAND) {
      setValue('hotelTotalSamarkand', 0);
    }

    if (cityKey === HOTEL_CITIES.BUKHARA) {
      setValue('hotelTotalBukhara', 0);
    }

    if (cityKey === HOTEL_CITIES.KHIVA) {
      setValue('hotelTotalKhiva', 0);
    }

    cityHotelKeys.forEach((key) => {
      setValue(key as keyof CalculatorFormData, false);
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid xs={12} item>
        <div style={styles.input}>
          <Typography variant="h4">Choose City</Typography>
          <FormGroup>
            <Controller
              name="tashkent"
              control={control}
              defaultValue={false}
              render={({ field: { onChange, value } }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={value}
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        onChange(isChecked);
                        if (!isChecked)
                          clearHotelSelections(HOTEL_CITIES.TASHKENT);
                      }}
                    />
                  }
                  label="Tashkent"
                />
              )}
            />

            <Controller
              name="samarkand"
              control={control}
              defaultValue={false}
              render={({ field: { onChange, value } }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={value}
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        onChange(isChecked);
                        if (!isChecked)
                          clearHotelSelections(HOTEL_CITIES.SAMARKAND);
                      }}
                    />
                  }
                  label="Samarkand"
                />
              )}
            />

            <Controller
              name="bukhara"
              control={control}
              defaultValue={false}
              render={({ field: { onChange, value } }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={value}
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        onChange(isChecked);
                        if (!isChecked)
                          clearHotelSelections(HOTEL_CITIES.BUKHARA);
                      }}
                    />
                  }
                  label="Bukhara"
                />
              )}
            />

            <Controller
              name="khiva"
              control={control}
              defaultValue={false}
              render={({ field: { onChange, value } }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={value}
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        onChange(isChecked);
                        if (!isChecked)
                          clearHotelSelections(HOTEL_CITIES.KHIVA);
                      }}
                    />
                  }
                  label="Khiva"
                />
              )}
            />
          </FormGroup>
        </div>
      </Grid>

      <Grid xs={6} item>
        <NumberOfNights />
      </Grid>
      <Grid xs={6} item>
        <NumberOfRooms />
      </Grid>

      {formData.tashkent && <TashkentHotels />}
      {formData.samarkand && <SamarkandHotels />}
      {formData.bukhara && <BukharaHotels />}
      {formData.khiva && <KhivaHotels />}
    </Grid>
  );
};

export default Step2;
