import variables from '../variables'

export type MortgageHubColours = {
  primary: {
    accent: string
    content: string
    interface: string
  }
  font: {
    primaryDark: string
    primaryLight: string
    disabled: string
  }
  neutral: {
    white: string
    black: string
  }
  supporting: {
    success: string
    pending: string
    error: string
  }
}

export const colours: MortgageHubColours = {
  font: {
    primaryDark: variables.baseColours.greyDark,
    primaryLight: variables.baseColours.greyLight,
    disabled: variables.baseColours.greyMid,
  },
  primary: {
    accent: variables.baseColours.pink,
    content: variables.baseColours.greyDark,
    interface: variables.baseColours.purple,
  },
  neutral: {
    white: variables.baseColours.white,
    black: variables.baseColours.black,
  },
  supporting: {
    success: variables.baseColours.green,
    pending: variables.baseColours.orange,
    error: variables.baseColours.red,
  },
}
