import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteList from './routes';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <RouteList />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
