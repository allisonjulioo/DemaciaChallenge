import { createReducer, on } from '@ngrx/store'
import { openModal, closeModal } from '../actions/modal.action'
import { INITIAL_STATE } from '../state/modal.state'


export const modal = createReducer(
  INITIAL_STATE,
  on(openModal, state => ({
    ...state,
    opened: true
  })),
  on(closeModal, state => ({
    ...state,
    opened: false
  }))
)