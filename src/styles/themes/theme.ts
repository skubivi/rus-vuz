import { createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import { PaletteColor, PaletteColorOptions } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { breakpointsTheme } from './breakpoints-theme';

declare module '@mui/material/styles' {
  interface Palette {
    buttonPrimary: PaletteColor;
    buttonSecondary: PaletteColor;
    input: PaletteColor;
    borderPrimary: PaletteColor;
  }

  interface PaletteOptions {
    buttonPrimary: PaletteColorOptions;
    buttonSecondary: PaletteColorOptions;
    input: PaletteColorOptions;
    borderPrimary: PaletteColorOptions;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    buttonPrimary: true;
    buttonSecondary: true;
  }
}

declare module '@mui/material/InputBase' {
  interface InputBasePropsColorOverrides {
    input: true;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    input: true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariantsOptions {
    body3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

const palette = {
  primary: {
    main: '#fff',
    dark: '#141515',
    contrastText: '#191E34',
  },
  secondary: {
    ligth: '#cdd5ff',
    main: '#5871ef',
    contrastText: '#fff',
  },
  buttonPrimary: {
    main: '#192863',
    contrastText: '#fff',
  },
  buttonSecondary: {
    main: '#cdd5ff',
    contrastText: '#5871ef',
  },
  input: {
    main: '#f6f7f9',
    dark: '#edeef1',
    light: '#828489',
    contrastText: '#141515',
  },
  borderPrimary: {
    main: '#f6f7f9',
    dark: '#cbcbcb',
    light: '#bfc3cb',
  },
  error: {
    main: '#e14f3b',
  },
  success: {
    main: '#5da01a',
  },
};

const typograhy: TypographyOptions = {
  fontFamily: "'Manrope', 'Courier New', Courier, monospace",
  h1: {
    fontSize: '75px',
    fontWeight: 600,
    color: palette.primary.main,
  },
  h2: {
    fontSize: '48px',
    fontWeight: 600,
    color: palette.primary.contrastText,
  },
  h3: {
    fontSize: '28px',
    fontWeight: 600,
    color: palette.primary.contrastText,
  },
  h4: {
    fontSize: '24px',
    fontWeight: 600,
    color: palette.primary.contrastText,
  },
  h5: {
    fontSize: '20px',
    fontWeight: 500,
    color: palette.primary.contrastText,
  },
  h6: {
    fontSize: '36px',
    fontWeight: 700,
    color: palette.primary.contrastText,
  },
  body1: {
    fontSize: '16px',
    fontWeight: 500,
    color: palette.primary.contrastText,
    letterSpacing: '-0.3px',
  },
  body2: {
    fontSize: '14px',
    fontWeight: 500,
    color: palette.primary.contrastText,
    letterSpacing: '-0.3px',
  },
  body3: {
    fontSize: '12px',
    color: palette.primary.contrastText,
    letterSpacing: '-0.3px',
  },
};

export const theme = deepmerge(
  breakpointsTheme,
  createTheme({
    palette: palette,
    typography: typograhy,
    spacing: 4,
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            [breakpointsTheme.breakpoints.up('xl')]: {
              padding: 40,
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            padding: 4,
            color: palette.input.light,
            '&:dir(rtl)': {
              marginRight: 20,
              transformOrigin: 'top right',
              right: 0,
              left: 'auto',
            },
            '&.Mui-focused': {
              padding: 0,
              color: palette.buttonPrimary.main,
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            padding: 0,
            color: palette.primary.contrastText,
            borderRadius: '12px !important',
            backgroundColor: palette.input.main,
            '& .MuiInputBase-input': {
              padding: 20,
              letterSpacing: '-0.3px',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
              '&:dir(rtl) legend': {
                textAlign: 'right',
              },
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: palette.buttonPrimary.main,
            },
            '&.Mui-error': {
              borderColor: palette.error.main,
            },
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            marginTop: 1,
            marginLeft: 0,
            marginRight: 0,
            fontSize: '14px',
            fontWeight: 500,
            color: palette.error.main,
            letterSpacing: '-0.3px',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: palette.input.main,
            '& .MuiList-root': {
              padding: 4,
              borderRadius: 12,
              '& .MuiButtonBase-root': {
                borderRadius: 8,
                '&:hover': {
                  backgroundColor: palette.input.dark,
                },
              },
            },
          },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          root: {
            '& .MuiInputBase-root': {
              padding: 20,
              '& .MuiInputBase-input': {
                padding: 0,
              },
            },
          },
          popper: {
            '& .MuiPaper-root': {
              borderRadius: 12,
              backgroundColor: palette.input.main,
              '& .MuiAutocomplete-listbox': {
                padding: 4,
                '& .MuiAutocomplete-option': {
                  borderRadius: 8,
                  '&.Mui-focused': {
                    backgroundColor: palette.input.dark,
                  },
                },
              },
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: '-0.3px',
            padding: '20px 40px',
            textTransform: 'initial',
            borderRadius: 12,
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: palette.borderPrimary.main,
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            backgroundColor: palette.input.main,
            borderRadius: 12,
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            fontFamily: 'Manrope',
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            minHeight: 30,
            '& .MuiTabs-scroller': {
              '& .MuiTabs-flexContainer': {
                gap: 24,
                '& .MuiTab-root': {
                  minHeight: 'min-content',
                  padding: 0,
                  fontSize: '16px',
                  fontWeight: 600,
                  lineHeight: '140%',
                  textTransform: 'none',
                  color: '#777',
                  letterSpacing: '-0.32px',
                  '&.Mui-selected': {
                    color: palette.primary.contrastText,
                  },
                },
              },
              '& .MuiTabs-indicator': {
                top: 28,
                backgroundColor: palette.buttonPrimary.main,
              },
            },
          },
        },
      },
    },
  }),
);
