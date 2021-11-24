import React from 'react'
import { renderWithThemeProvider, screen } from 'test-utils'
import { Select } from './Select'

it('renders correctly', () => {
  const tree = renderWithThemeProvider(<Select id="testSelect"></Select>)
  expect(tree).toMatchSnapshot()
})

