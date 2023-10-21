import { Container } from '@mui/material';
import React from 'react';
import Navbar from '../../components/Navbar';
import { CustomColors } from '../../theme';

const Thanks = () => {
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
          textAlign: 'center',
        }}
      >
        <h1>Thanks for applying your visa</h1>
        <p style={{ marginTop: 10 }}>
          We will return to you shortly if you have any queries kindly email at{' '}
          <a
            href="mailto:tic.uzbek@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: CustomColors.primary }}
          >
            tic.uzbek@gmail.com
          </a>{' '}
        </p>
      </Container>
    </div>
  );
};

export default Thanks;
