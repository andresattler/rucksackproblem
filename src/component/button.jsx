// @flow
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

type Props = {
  label: string,
  handleClick: Function,
}

const Button = ({ label, handleClick }: Props) =>
// eslint-disable-next-line jsx-boolean-value
  <RaisedButton onClick={handleClick} label={label} primary />

export default Button
