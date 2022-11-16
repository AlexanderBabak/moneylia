import { extendTheme } from 'native-base';

const newColorTheme = {
  brand: {
    main: '#7476ED',
    secondary: '#BF7EE6',
    background: '#F8F4FF',
  },
  text: {
    main: '#3A3B7B',
    neutralDark: '#312E43',
    neutralMedium: '#6F6D7B',
    neutralLight: '#A5A5AA',
  },
  divider: '#EAEAEC',
  pressedButton: '#AE61D2',
};

const newFontConfigTheme = {
  Rubik: {
    400: {
      normal: 'Rubik-Regular',
    },
    500: {
      normal: 'Rubik-Medium',
    },
  },
  WorkSans: {
    400: {
      normal: 'WorkSans-Regular',
    },
    600: {
      normal: 'WorkSans-SemiBold',
    },
  },
};

const newFontsTheme = {
  heading: 'WorkSans',
  body: 'WorkSans',
  mono: 'Rubik',
};

type themeType = typeof theme;
declare module 'native-base' {
  interface ICustomTheme extends themeType {}
}

export const theme = extendTheme({
  colors: newColorTheme,
  fontConfig: newFontConfigTheme,
  fonts: newFontsTheme,
});
