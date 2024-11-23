import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { toHumanReadable } from '../../../utils/helpers';
import { TrainService } from '../../../types/trains';
import { CalculatorFormData } from '../../../types/calculator';
import { useFormContext } from 'react-hook-form';

const TrainsSummary = ({
  selectedTrains,
}: {
  selectedTrains: TrainService[];
}) => {
  const { watch } = useFormContext<CalculatorFormData>();

  const formData = watch();

  return (
    <>
      {selectedTrains?.length > 0 && (
        <>
          <Grid item xs={12}>
            <Typography variant="h5" color="primary">
              Selected Trains
            </Typography>
          </Grid>
          {selectedTrains.map(({ route, classType, type, price }, index) => (
            <Grid item xs={12} key={index}>
              <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h6" color="primary">
                  {toHumanReadable(route)}
                </Typography>
                <Typography variant="body1">
                  Class Type: {classType} - {toHumanReadable(type)} - Price: ($
                  {price.toFixed(2)} per day)
                </Typography>
                <Typography variant="body1">
                  Number of tickets:{' '}
                  {type === 'speedTrain'
                    ? formData.numberOfSpeedTrainTickets
                    : formData.numberOfRegularTrainTickets}
                </Typography>
                <Typography variant="body1">
                  Total: $
                  {(
                    price *
                    (type === 'speedTrain'
                      ? formData.numberOfSpeedTrainTickets
                      : formData.numberOfRegularTrainTickets)
                  ).toFixed(2)}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </>
      )}
    </>
  );
};

export default TrainsSummary;
