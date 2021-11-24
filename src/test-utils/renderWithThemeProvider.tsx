import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'
import { themeDefault } from 'themes/default/themeDefault'

export const renderWithThemeProvider = (children: React.ReactNode, theme = themeDefault): RenderResult => {
  // this fixes broken theme functions
  const serialTheme = JSON.parse(JSON.stringify(theme))
  const muiTheme = createTheme(serialTheme)
  const responsiveTheme = responsiveFontSizes(muiTheme)
  return render(<ThemeProvider theme={responsiveTheme}>{children}</ThemeProvider>)
}

export const takeSnapShot = (Comp: React.FC) => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<Comp />)

    expect(asFragment()).toMatchSnapshot()
  })
}
