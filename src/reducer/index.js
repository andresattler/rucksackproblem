// @flow
import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import { GENERATE_RANDOM_ITEMS, REMOVE_ALL, EDIT_ITEM, PACK_BACKPACK } from '../action'

import packItems from '../helper/pack-items'
import randomItems from '../helper/random-items'

const initialState = Immutable.fromJS({
  items: {},
  backpack: [],
})

const reducer = (state: Immut = initialState, action: {type: string, payload: any }) => {
  switch (action.type) {
    case GENERATE_RANDOM_ITEMS:
      return state.set('items', randomItems(10))
    case REMOVE_ALL:
      return state.merge({ items: {}, backpack: [] })
    case EDIT_ITEM: {
      const items = state.get('items')
      const index = action.payload.index
      const newItems = {
        ...items,
        [index]: {
          weight: action.payload.weight,
          value: action.payload.value,
        },
      }
      return state.set('items', newItems)
    }
    case PACK_BACKPACK:
      return state.set('backpack', packItems(state.get('items'), 15))
    default:
      return state
  }
}

export default reducer
