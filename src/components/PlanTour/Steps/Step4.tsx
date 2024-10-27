import React from 'react';
import { Grid, Typography, Paper, Divider, Box } from '@mui/material';
import { CalculatorFormData } from '../../../types/calculator';
import { useFormContext } from 'react-hook-form';
import { SelectedHotel } from '../../../types/hotels';
import HotelsSummary from '../Components/HotelsSummary';
import TrainsSummary from '../Components/TrainsSummary';
import { TrainService } from '../../../types/trains';
import OtherServices from '../Components/OtherServices';

const Step4 = ({
  selectedHotels,
  selectedTrains,
}: {
  selectedHotels: SelectedHotel[];
  selectedTrains: TrainService[];
}) => {
  const { watch } = useFormContext<CalculatorFormData>();
  const formData = watch();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h3" gutterBottom align="center" marginTop={5}>
          Trip Summary
        </Typography>
      </Grid>

      <HotelsSummary selectedHotels={selectedHotels} />
      <TrainsSummary selectedTrains={selectedTrains} />
      <OtherServices />

      <Grid item xs={12}>
        <Divider style={{ margin: '20px 0' }} />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h3" gutterBottom align="center" marginTop={5}>
          Total
        </Typography>
      </Grid>
      {[
        { title: 'Hotel Total', amount: formData.hotelTotal },
        {
          title: 'Additional Services Total',
          amount: formData.additionalServicesTotal,
        },
      ].map((section, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h6" color="primary" gutterBottom>
              {section.title}
            </Typography>
            <Typography variant="h5" color="textSecondary">
              ${section.amount.toFixed(2)}
            </Typography>
          </Paper>
        </Grid>
      ))}

      <Grid item xs={12}>
        <Paper
          elevation={4}
          style={{ padding: '20px', backgroundColor: '#f5f5f5' }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" color="primary">
              Grand Total
            </Typography>
            <Typography variant="h4">
              $
              {(formData.hotelTotal + formData.additionalServicesTotal).toFixed(
                2
              )}
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Step4;
