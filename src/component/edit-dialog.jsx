// @flow
import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

type Props = {
  open: boolean,
  initialValue: number,
  initialWeight: number,
  weight: number,
  value: number,
  index: number,
  weightError: string,
  valueError: string,
  handleToggle: Function,
  changeValue: Function,
  changeWeight: Function,
  handleSubmitt: Function,
  typeError: Function,
}

const EditDialog = ({
  open,
  initialValue,
  initialWeight,
  weight,
  value,
  index,
  weightError,
  valueError,
  handleToggle,
  changeValue,
  changeWeight,
  handleSubmitt,
  typeError }: Props) => {
  const actions = [
    <FlatButton
      label="Abbort"
      primary
      keyboardFocused
      onTouchTap={handleToggle}
    />,
    <FlatButton
      label="Ok"
      primary
      keyboardFocused
      onTouchTap={() => handleSubmitt({
        index,
        value,
        weight,
      })}
    />,
  ]
  return (
    <Dialog
      actions={actions}
      title="Test"
      open={open}
      onRequestClose={handleToggle}
    >
      <TextField
        floatingLabelText="Value:"
        defaultValue={initialValue || ''}
        errorText={valueError}
        onChange={(e) => {
          if (!isNaN(e.target.value) && Number.isInteger(parseFloat(e.target.value))) {
            return changeValue(parseInt(e.target.value, 10))
          }
          return typeError('valueError')
        }}
      />
      <TextField
        floatingLabelText="Weight:"
        defaultValue={initialWeight || ''}
        errorText={weightError}
        onChange={(e) => {
          if (!isNaN(e.target.value) && Number.isInteger(parseFloat(e.target.value))) {
            return changeWeight(parseInt(e.target.value, 10))
          }
          return typeError('weightError')
        }}
      />
    </Dialog>
  )
}
export default EditDialog
