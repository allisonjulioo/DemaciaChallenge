import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../state/teams.state'

export const editTeam = createAction(
  ActionTypes.setId,
  props<{ payload: any }>()
) 