import { Container } from '@mui/material';
import React from 'react';
import Navbar from '../../components/Navbar';
import { CustomColors } from '../../theme';

const NotFound = () => {
  return (
    <div style={{ background: CustomColors.offWhite }}>
      <Navbar bgPrimary={true} />
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '92vh',
          width: '500px',
          textAlign: 'center',
        }}
      >
        <h1>404 | Not Found</h1>
      </Container>
    </div>
  );
};

export default NotFound;
