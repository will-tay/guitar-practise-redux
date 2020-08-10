import { createReducer } from '@reduxjs/toolkit'
import { allIds, listOfExercises } from './data'

export interface IExercisesState {
  byId: IListOfExercises
  allIds: Array<string>
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

const initialState = {
  byId: listOfExercises,
  allIds,
  activeExercise: '1'
}

const reducer = createReducer(initialState, {
})

export * from './selectors'
export default reducer
