import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteList from './routes';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <RouteList />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
