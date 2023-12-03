import React, { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import RouteList from './routes';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { Mixpanel } from './services/mixpanel';

function App() {
  useEffect(() => {
    console.log('useEffect is running');
    Mixpanel.track_pageview();
  }, []);

  return (
    <HashRouter basename="/">
      <ThemeProvider theme={theme}>
        <RouteList />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
