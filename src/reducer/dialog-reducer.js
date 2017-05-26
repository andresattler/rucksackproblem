// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import { TOGGLE_EDIT_DIALOG, SELECT_ITEM, CHANGE_WEIGHT, CHANGE_VALUE, TYPE_ERROR } from '../action'

const InitialState = Immutable.fromJS({
  showEditDialog: false,
  selectedItemIndex: -1,
  weight: null,
  value: null,
  weightError: '',
  valueError: '',
})

const dialogReducer = (state: Immut = InitialState, action: {type: string, payload: any}) => {
  switch (action.type) {
    case SELECT_ITEM:
      return state.set('selectedItemIndex', action.payload)
    case TOGGLE_EDIT_DIALOG:
      return state.set('showEditDialog', !state.get('showEditDialog'))
    case CHANGE_WEIGHT:
      return state.merge({ weight: action.payload, weightError: '' })
    case CHANGE_VALUE:
      return state.merge({ value: action.payload, valueError: '' })
    case TYPE_ERROR:
      return state.set(action.payload, 'not an integer')
    default:
      return state
  }
}

export default dialogReducer
