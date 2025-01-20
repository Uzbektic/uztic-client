import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.REACT_APP_MIX_PANEL_KEY || '');

export let Mixpanel = mixpanel;
