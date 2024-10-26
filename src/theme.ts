import { createTheme } from '@mui/material/styles';
import { CSSProperties } from 'react';

export const CustomColors = {
  primary: '#4682A9',
  primaryLight: '#749BC2',
  foregroundColor: '#F6F4EB',
  lightBlue: '#91C8E4',
  offWhite: '#EEE9DA',
  white: '#fff',
  black: '#000',
  grey: '#EFF5F5',
  lightBorder: '#D1CECE',
  error: '#ff1744',
  disabled: '#E8EAED;',
  success: '#00783B',
  warning: '#ff9800',
  fog: '#DBD9DE',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: CustomColors.primary,
      contrastText: CustomColors.white,
    },
    secondary: {
      main: CustomColors.foregroundColor,
      contrastText: CustomColors.white,
    },
    default: {
      main: CustomColors.lightBorder,
      contrastText: CustomColors.primary,
    },
    background: {
      default: CustomColors.white,
      paper: CustomColors.white,
    },
    backgroundSecondary: {
      default: CustomColors.foregroundColor,
    },
    backgroundGrey: {
      default: CustomColors.grey,
    },
    text: {
      primary: CustomColors.black,
      secondary: CustomColors.black,
      secondaryDarker: CustomColors.grey,
    },
    border: {
      main: CustomColors.lightBorder,
      light: CustomColors.lightBorder,
    },
    info: {
      main: '#0000ff',
      contrastText: '#fff',
    },
    success: {
      main: '#00ff00',
      contrastText: '#fff',
    },
    error: {
      main: CustomColors.error,
    },
    disabled: {
      main: CustomColors.grey,
    },
  },
  typography: {
    fontFamily: 'Raleway, sans-serif',

    h1: {
      fontFamily: 'Raleway, sans-serif',
      fontSize: 42,
      fontWeight: 700,
      lineHeight: '51px',
    },
    h2: {
      fontFamily: 'Raleway, sans-serif',
      fontSize: 36,
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Raleway, sans-serif',
      fontSize: 24,
      fontWeight: 700,
      lineHeight: '29px',
    },
    h4: {
      fontFamily: 'Raleway, sans-serif',
      fontSize: 17,
      fontWeight: 600,
      lineHeight: '21px',
    },
    h5: {
      fontFamily: 'Raleway, sans-serif',
      fontSize: 15,
      fontWeight: 500,
      lineHeight: '18px',
    },
    h6: {
      fontFamily: 'Raleway, sans-serif',
      fontSize: 14,
      fontWeight: 500,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          border: `1px solid ${CustomColors.lightBorder}`,
          boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
        },
      },
    },

    MuiButtonBase: {},
    MuiButton: {
      styleOverrides: {
        root: {
          '&.MuiButton-containedPrimary': {
            fontWeight: 500,
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.MuiTableRow-hover': {
            '&:hover': {
              backgroundColor: CustomColors.foregroundColor,
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${CustomColors.lightBorder}`,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 24,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 12,
          fontWeight: 400,
          lineHeight: '19px',
          color: CustomColors.primary,

          '&.Mui-error': {
            color: CustomColors.error,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: 12,
          fontWeight: 400,
          lineHeight: '19px',
          color: CustomColors.black,
          backgroundColor: CustomColors.white,

          '&.Mui-disabled': {
            color: CustomColors.grey,
            backgroundColor: CustomColors.disabled,
            cursor: 'not-allowed',
          },
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 0,
          fontSize: 12,
          fontWeight: 400,
          textAlign: 'left',
          lineHeight: '19px',
          borderRadius: '10px',
          marginTop: '10px',
          color: CustomColors.black,
          textTransform: 'none',
          '&.Mui-selected': {
            color: CustomColors.foregroundColor,
            background: CustomColors.primaryLight,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 12,
          fontWeight: 400,
          lineHeight: '19px',
          color: CustomColors.black,

          '&.Mui-disabled': {
            color: CustomColors.grey,
          },

          '&.Mui-focused': {
            color: CustomColors.black,

            '&.MuiInputLabel-shrink': {
              color: CustomColors.black,

              '&.Mui-error': {
                color: CustomColors.error,
              },
            },
          },
        },
      },
    },
  },
});

declare module '@mui/material/styles' {
  export interface Theme {}

  interface Palette {
    default: Palette['primary'];
    disabled: Palette['primary'];
    border: Palette['primary'];
    backgroundSecondary: Palette['background'];
    backgroundGrey: Palette['background'];
  }

  interface PaletteOptions {
    default: PaletteOptions['primary'];
    disabled: PaletteOptions['primary'];
    border: PaletteOptions['primary'];
    backgroundSecondary: PaletteOptions['background'];
    backgroundGrey: PaletteOptions['background'];
  }

  interface TypeText {
    secondaryDarker: TypeText['secondary'];
  }

  export interface TypographyVariants {
    h7: CSSProperties;
    body: CSSProperties;
    bodyXSmall: CSSProperties;
    bodySmall: CSSProperties;
    bodyLarge: CSSProperties;
    bodyXLarge: CSSProperties;
  }

  // allow configuration using `createTheme`
  export interface TypographyVariantsOptions {
    h7?: CSSProperties;
    body?: CSSProperties;
    bodyXSmall?: CSSProperties;
    bodySmall?: CSSProperties;
    bodyLarge?: CSSProperties;
    bodyXLarge?: CSSProperties;
  }
}
