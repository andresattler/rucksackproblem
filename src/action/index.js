import { createAction } from 'redux-actions'

export const GENERATE_RANDOM_ITEMS = 'GENERATE_RANDOM_ITEMS'
export const REMOVE_ALL = 'REMOVE_ALL'
export const EDIT_ITEM = 'EDIT_ITEM'
export const ADD_ITEM = 'ADD_ITEM'
export const PACK_BACKPACK = 'PACK_BACKPACK'

// Dialog related
export const SELECT_ITEM = 'SELECT_ITEM'
export const TOGGLE_EDIT_DIALOG = 'TOGGLE_EDIT_DIALOG'
export const CHANGE_WEIGHT = 'CHANGE_WEIGHT'
export const CHANGE_VALUE = 'CHANGE_VALUE'
export const TYPE_ERROR = 'TYPE_ERROR'

export const generateRandomItems = createAction(GENERATE_RANDOM_ITEMS)
export const removeAll = createAction(REMOVE_ALL)
export const editItem = createAction(EDIT_ITEM)
export const addItem = createAction(ADD_ITEM)
export const packBackpack = createAction(PACK_BACKPACK)

// Dialog related
export const selectItem = createAction(SELECT_ITEM)
export const toggleEditDialog = createAction(TOGGLE_EDIT_DIALOG)
export const changeWeight = createAction(CHANGE_WEIGHT)
export const changeValue = createAction(CHANGE_VALUE)
export const typeError = createAction(TYPE_ERROR)
