// @flow
import React from 'react'
import TextField from 'material-ui/TextField'

type Props = {
  maxWeightErrorText: string,
  handleChange: Function,
  maxWeightError: Function,
}

const MaxWeightTextField = ({ maxWeightErrorText, handleChange, maxWeightError }: Props) =>
  <TextField
    floatingLabelText="Max Weight:"
    defaultValue="15"
    errorText={maxWeightErrorText}
    onChange={(e) => {
      if (!isNaN(e.target.value) && Number.isInteger(parseFloat(e.target.value))) {
        return handleChange(parseInt(e.target.value, 10))
      }
      return maxWeightError()
    }}
  />

export default MaxWeightTextField
