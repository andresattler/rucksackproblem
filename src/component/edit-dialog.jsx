// @flow
import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

type Props = {
  open: boolean,
  value: number,
  weight: number,
  handleToggle: Function,
  handleSubmitt: Function,
}

const EditDialog = ({ open, value, weight, handleToggle, handleSubmitt }: Props) => {
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
      onTouchTap={handleSubmitt}
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
        defaultValue={value || ''}
      />
      <TextField
        floatingLabelText="Weight:"
        defaultValue={weight || ''}
      />
    </Dialog>
  )
}
export default EditDialog
