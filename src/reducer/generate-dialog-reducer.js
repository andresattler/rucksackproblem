// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import { TOGGLE_GENERATE_DIALOG, CHANGE_NUMBER_OF_ITEMS, NUMBER_ERROR } from '../action'

const InitialState = Immutable.fromJS({
  showGenerateDialog: false,
  numberOfItems: 10,
  error: '',
})

const generateDialogReducer =
(state: Immut = InitialState, action: {type: string, payload: any}) => {
  switch (action.type) {
    case TOGGLE_GENERATE_DIALOG:
      return state.set('showGenerateDialog', !state.get('showGenerateDialog'))
    case CHANGE_NUMBER_OF_ITEMS:
      return state.merge({ numberOfItems: action.payload, error: '' })
    case NUMBER_ERROR:
      return state.set('error', 'not an integer')
    default:
      return state
  }
}

export default generateDialogReducer
