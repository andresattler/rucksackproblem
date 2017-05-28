import { createAction } from 'redux-actions'
// general
export const GENERATE_RANDOM_ITEMS = 'GENERATE_RANDOM_ITEMS'
export const REMOVE_ALL = 'REMOVE_ALL'
export const EDIT_ITEM = 'EDIT_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'
export const CHANGE_MAX_WEIGHT = 'CHANGE_MAX_WEIGHT'
export const MAX_WEIGHT_ERROR = 'MAX_WEIGHT_ERROR'
export const PACK_BACKPACK = 'PACK_BACKPACK'

// Edit dialog related
export const SELECT_ITEM = 'SELECT_ITEM'
export const TOGGLE_EDIT_DIALOG = 'TOGGLE_EDIT_DIALOG'
export const CHANGE_WEIGHT = 'CHANGE_WEIGHT'
export const CHANGE_VALUE = 'CHANGE_VALUE'
export const TYPE_ERROR = 'TYPE_ERROR'

// Generate dialog related
export const TOGGLE_GENERATE_DIALOG = 'TOGGLE_GENERATE_DIALOG'
export const CHANGE_NUMBER_OF_ITEMS = 'CHANGE_NUMBER_OF_ITEMS'
export const NUMBER_ERROR = 'NUMBER_ERROR'
// general
export const generateRandomItems = createAction(GENERATE_RANDOM_ITEMS)
export const removeAll = createAction(REMOVE_ALL)
export const editItem = createAction(EDIT_ITEM)
export const deleteItem = createAction(DELETE_ITEM)
export const changeMaxWeight = createAction(CHANGE_MAX_WEIGHT)
export const maxWeightError = createAction(MAX_WEIGHT_ERROR)
export const packBackpack = createAction(PACK_BACKPACK)

// Edit dialog related
export const selectItem = createAction(SELECT_ITEM)
export const toggleEditDialog = createAction(TOGGLE_EDIT_DIALOG)
export const changeWeight = createAction(CHANGE_WEIGHT)
export const changeValue = createAction(CHANGE_VALUE)
export const typeError = createAction(TYPE_ERROR)

// Generate dialoog related
export const toggleGenerateDialog = createAction(TOGGLE_GENERATE_DIALOG)
export const changeNumberOfItems = createAction(CHANGE_NUMBER_OF_ITEMS)
export const numberError = createAction(NUMBER_ERROR)
