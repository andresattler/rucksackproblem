// @flow
import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import { GENERATE_RANDOM_ITEMS, REMOVE_ALL, EDIT_ITEM, CHANGE_MAX_WEIGHT, MAX_WEIGHT_ERROR, PACK_BACKPACK } from '../action'

import packItems from '../helper/pack-items'
import randomItems from '../helper/random-items'

const initialState = Immutable.fromJS({
  items: {},
  backpack: [],
  maxWeight: 15,
  maxWeightErrorText: '',
})


const reducer = (state: Immut = initialState, action: {type: string, payload: any }) => {
  switch (action.type) {
    case GENERATE_RANDOM_ITEMS:
      return state.set('items', randomItems(action.payload))
    case REMOVE_ALL:
      return state.merge({ items: {}, backpack: [] })
    case EDIT_ITEM: {
      const prevItems = state.get('items')
      const items = prevItems.size === 0 ? {} : prevItems
      const index = action.payload.index
      const newItems = {
        ...items,
        [index]: {
          weight: action.payload.weight,
          value: action.payload.value,
          valuePerWeight: action.payload.value / action.payload.weight,
        },
      }
      return state.set('items', newItems)
    }
    case CHANGE_MAX_WEIGHT:
      return state.merge({ maxWeight: action.payload, maxWeightErrorText: '' })
    case MAX_WEIGHT_ERROR:
      return state.set('maxWeightErrorText', 'not an integer')
    case PACK_BACKPACK:
      return state.set('backpack', packItems(state.get('items'), state.get('maxWeight')))
    default:
      return state
  }
}

export default reducer
