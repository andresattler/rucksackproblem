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
  handleSubmit: Function,
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
  handleSubmit,
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
      onTouchTap={() => handleSubmit({
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
        onKeyPress={e => e.charCode === 13 && !valueError && !weightError && handleSubmit({
          index,
          value,
          weight,
        })}
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
        onKeyPress={e => e.charCode === 13 && !valueError && !weightError && handleSubmit({
          index,
          value,
          weight,
        })}
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
