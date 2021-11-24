import React from 'react'
import styled from '@mui/material/styles/styled'

import MuiSelect, { SelectProps as MuiSelectProps } from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import MuiFormControl from '@mui/material/FormControl'

interface ISelect extends MuiSelectProps {
  id: string
  label?: string
  options?: { text: string; option: string }[]
}
const FormControl = styled(MuiFormControl)`
  color: #fff;
  border-radius: 30px;
  width: 180px;
`

export const Select: React.FC<ISelect> = ({ label, id, children, options, ...props }) => {
  return (
    // @ts-ignore
    <FormControl fullWidth hiddenLabel>
      {label && (
        <InputLabel id={`input_${id}`} shrink={false}>
          {label}
        </InputLabel>
      )}
      <MuiSelect id={id} {...props}>
        {options && options.map(({ text, option }: { text: string; option: string }) => <MenuItem value={option}>{text}</MenuItem>)}
        {children && children}
      </MuiSelect>
    </FormControl>
  )
}

export default Select
