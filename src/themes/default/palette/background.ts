import variables from '../variables'

export interface MortgageHubBackground {
  default: string
  panel: string
  panelDisabled: string
}

const background: MortgageHubBackground = {
  default: variables.baseColours.white,
  panel: variables.baseColours.greyLight,
  panelDisabled: variables.baseColours.greyDark,
}

export default background
