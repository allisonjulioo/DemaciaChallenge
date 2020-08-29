import { createAction } from '@ngrx/store'
import { ActionTypes } from '../state/modal.state'

export const openModal = createAction(
  ActionTypes.OpenModal
)

export const closeModal = createAction(
  ActionTypes.CloseModal
)
