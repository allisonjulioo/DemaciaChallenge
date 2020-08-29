import { createReducer, on } from '@ngrx/store'
import { editTeam } from '../actions/teams.action'
import { INITIAL_ID } from '../state/teams.state'
import { ActionTypes } from '../state/teams.state'



export const editTeams = (state = INITIAL_ID, action: any) => {
  switch (action.type) {
    case ActionTypes.setId:
      return { ...state, teamId: state.id + 1 }
    default:
      break;
  }
}