import React, { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import RouteList from './routes';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { Mixpanel } from './services/mixpanel';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    Mixpanel.track_pageview();
  }, []);

  return (
    <HashRouter basename="/">
      <ThemeProvider theme={theme}>
        <RouteList />
        <Footer />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
