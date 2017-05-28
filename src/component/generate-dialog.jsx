// @flow
import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

type Props = {
  open: boolean,
  numberOfItems: number,
  error: string,
  handleToggle: Function,
  handleSubmit: Function,
  handleChange: Function,
  numberError: Function,
}

const GenerateDialog =
({ open, numberOfItems,
   error, handleToggle,
   handleSubmit, handleChange,
   numberError }: Props) => {
  const actions = [
    <FlatButton
      label="Abbort"
      onTouchTap={handleToggle}
    />,
    <FlatButton
      label="OK"
      onTouchTap={() => !error && handleSubmit(numberOfItems)}
    />,
  ]
  return (
    <Dialog
      style={{ textAlign: 'center' }}
      actions={actions}
      open={open}
      onRequestClose={handleToggle}
    >
      <TextField
        floatingLabelText="Number of items:"
        defaultValue="10"
        errorText={error}
        onKeyPress={e => e.charCode === 13 && !error && handleSubmit(numberOfItems)}
        onChange={(e) => {
          if (!isNaN(e.target.value) && Number.isInteger(parseFloat(e.target.value))) {
            return handleChange(parseInt(e.target.value, 10))
          }
          return numberError()
        }}
      />
    </Dialog>
  )
}
export default GenerateDialog
