import { createReducer, createAction, ActionCreatorWithoutPayload } from '@reduxjs/toolkit'
import { allIds, listOfExercises } from './data'

export interface IExercisesState {
  byId: IListOfExercises
  allIds: Array<string>
  completedIds: Array<string>
  availableIds: Array<string>
  activeExercise: string
}

export interface IExercise {
  id: string
  title: string
  desc: string
}

export interface IListOfExercises {
  [key: string]: IExercise
}

export const nextExercise: ActionCreatorWithoutPayload = createAction('nextExercise')
export const resetExercises: ActionCreatorWithoutPayload = createAction('resetExercises')

const initialState: IExercisesState = {
  byId: listOfExercises,
  allIds,
  availableIds: allIds,
  activeExercise: '1',
  completedIds: []
}

const reducer = createReducer(initialState, {
  [nextExercise.type]: (state) => {
    const availableIds = state.availableIds.filter(id => id !== state.activeExercise)
    state.completedIds = [...state.completedIds, state.activeExercise]
    state.activeExercise = availableIds[Math.floor(Math.random() * availableIds.length)]
    state.availableIds = availableIds
  },
  [resetExercises.type]: (state) => {
    const availableIds = state.allIds
    state.completedIds = []
    state.activeExercise = availableIds[Math.floor(Math.random() * availableIds.length)]
    state.availableIds = availableIds
  }
})

export * from './selectors'
export default reducer
