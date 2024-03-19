const palette = {
  //primary colour, CTA, Focused , Active 
  blue: '#057EED',
  blueTint: '#F5FAFF',
  //Secondary , highlights, callouts
  teal: '#20BBB1',
  tealTint: '#F5FFFE',
  // alert success
  green: '#27AA53',
  greenTint: '#F5FFF8',
  //alert error
  red: '#E16970',
  redTint: '#FFF5F6',
  // alert warning
  amber: '#D39F3C',
  amberTint: '#FFFCF5',
  //extended palette
  brown: '#BB6B20',
  brownTint: '#FFFAF5',
  orange: '#F47D27',
  orangeTint: '#FFF9F5',
  purple: '#9320BB',
  purpleTint: '#FCF5FF',
  // blue greys, text, background , borders
  grey900: '#040D16',
  grey800: '#0D1F30',
  grey700: '#1C344A',
  grey600: '#335371',
  grey500: '#456787',
  grey400: '#718DA8',
  grey300: '#94B1CC',
  grey200: '#BFD2E3',
  grey100: '#E8F0F8',
  grey00: '#FBFDFE',
  white: '#FFFFFF',
  black: '#0B0B0B',
  
}
const font = {
  regular: 'inter-regular',
  medium: 'inter-medium',
  semiBold: 'inter-semibold',
}

const fontSize = {
  xs: 12,
  s: 14,
  m: 16,
  l: 18,
  xl: 24,
}

export const theme = {
  colors: {
    background: palette.white,
    foreground: palette.black,
    primary: palette.blue,
    blueT: palette.blueTint,
    secondary: palette.teal,
    secondaryT:palette.tealTint,
    success: palette.green,
    successT: palette.greenTint,
    error: palette.red,
    errorT: palette.redTint,
    warning: palette.amber,
    warningT: palette.amberTint,
    brown: palette.brown,
    brownT: palette.brownTint,
    orange: palette.orange,
    orangeT: palette.orangeTint,
    purple: palette.purple,
    purpleT: palette.purpleTint,
    grey900: palette.grey900,
    grey800: palette.grey800,
    grey700: palette.grey700,
    grey600: palette.grey600,
    grey500: palette.grey500,
    grey400: palette.grey400,
    grey300: palette.grey300,
    grey200: palette.grey200,
    grey100: palette.grey100,
    grey00: palette.grey00,
  },
  // spacing: {
  //   s: 8,
  //   m: 16,
  //   l: 24,
  //   xl: 40,
  // },
  textVariants: {
    regular: font.regular,
    medium: font.medium,
    semiBold: font.semiBold,
    xs: fontSize.xs,
    s: fontSize.s,
    m: fontSize.m,
    l: fontSize.l,
    xl: fontSize.xl,  
  }
};

//   export const darkTheme = {
//     ...theme,
//     colors: {
//       ...theme.colors,
//       background: palette.black,
//       foreground: palette.white,
//     }
//   }