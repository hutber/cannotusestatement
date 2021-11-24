import variables from '../variables'

const typography = {
  fontFamily: variables.font.fontFamily.join(','),
  htmlFontSize: variables.typography.htmlFontSize,
  fontSize: variables.typography.fontSize,
  fontWeightLight: variables.typography.fontWeightLight,
  fontWeightRegular: variables.typography.fontWeightRegular,
  fontWeightMedium: variables.typography.fontWeightMedium,
  fontWeightBold: variables.typography.fontWeightBold,
  h1: {
    fontSize: variables.typography.size.h1,
    fontWeight: variables.typography.fontWeightBold,
    letterSpacing: variables.typography.defaultSpacing,
  },
  h2: {
    fontSize: variables.typography.size.h2,
    fontWeight: variables.typography.fontWeightLight,
    letterSpacing: variables.typography.defaultSpacing,
  },
  h3: {
    fontSize: variables.typography.size.h3,
    fontWeight: variables.typography.fontWeightLight,
    letterSpacing: variables.typography.defaultSpacing,
  },
  h4: {
    fontSize: variables.typography.size.h4,
    fontWeight: variables.typography.fontWeightBold,
    letterSpacing: variables.typography.defaultSpacing,
  },
  h5: {
    fontSize: variables.typography.size.h5,
    fontWeight: variables.typography.fontWeightLight,
    letterSpacing: variables.typography.defaultSpacing,
  },
  h6: {
    fontSize: variables.typography.size.h6,
    fontWeight: variables.typography.fontWeightBold,
    letterSpacing: variables.typography.defaultSpacing,
  },
  subtitle1: {
    fontSize: variables.typography.size.subtitle1,
    fontWeight: variables.typography.fontWeightBold,
    letterSpacing: variables.typography.defaultSpacing,
  },
  subtitle2: {
    fontSize: variables.typography.size.subtitle2,
    fontWeight: variables.typography.fontWeightBold,
    letterSpacing: variables.typography.defaultSpacing,
  },
  body1: {
    fontSize: variables.typography.size.body1,
    fontWeight: variables.typography.fontWeightLight,
    letterSpacing: variables.typography.defaultSpacing,
  },
  body2: {
    fontSize: variables.typography.size.body2,
    fontWeight: variables.typography.fontWeightRegular,
    letterSpacing: variables.typography.defaultSpacing,
  },
  button: {
    fontSize: variables.typography.size.button,
    fontWeight: variables.typography.fontWeightBold,
    letterSpacing: variables.typography.defaultSpacing,
    textTransform: 'uppercase',
  },
  // components
  dropdown: {
    fontFamily: variables.font.fontFamily[0],
    fontSize: variables.typography.size.body1,
  },
  dropdownLabel: {
    fontSize: variables.typography.size.body2,
    lineHeight: '1.2rem',
    fontWeight: variables.typography.fontWeightMedium,
  },
}

export default typography
