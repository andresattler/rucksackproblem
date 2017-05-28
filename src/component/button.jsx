// @flow
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

type Props = {
  label: string,
  handleClick: Function,
  index: number,
}

const Button = ({ label, handleClick, index }: Props) =>
// eslint-disable-next-line jsx-boolean-value
  <RaisedButton onClick={() => handleClick(index)} label={label} primary />

export default Button
