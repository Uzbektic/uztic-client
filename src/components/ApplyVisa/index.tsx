import React from 'react';
import { Button, Tooltip } from '@mui/material';

const ApplyVisa = () => {
  return (
    <Tooltip title="Apply for visa" placement="top">
      <Button
        data-tally-open="mYGqOW"
        data-tally-width="500"
        data-tally-overlay="1"
        data-tally-emoji-text="✈️"
        data-tally-emoji-animation="wave"
        data-tally-auto-close="0"
        variant="contained"
        color="primary"
      >
        Apply Visa
      </Button>
    </Tooltip>
  );
};

export default ApplyVisa;
