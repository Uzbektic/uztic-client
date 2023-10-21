import React from 'react';
import { HashRouter } from 'react-router-dom';
import RouteList from './routes';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

function App() {
  return (
    <HashRouter basename="/">
      <ThemeProvider theme={theme}>
        <RouteList />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
