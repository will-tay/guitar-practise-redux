import { createSelector } from '@reduxjs/toolkit'

import { IRootState } from '../../rootReducer'
import KEYS from '../../storeKeys'

const exercisesSelector = (state: IRootState) => state[KEYS.EXERCISES]

export const getExercises = createSelector(
  exercisesSelector,
  (state) => state.byId
)

export const getAllIds = createSelector(
  exercisesSelector,
  (state) => state.allIds
)

export const getActiveExerciseId = createSelector(
  exercisesSelector,
  (state) => state.activeExercise
)

export const getExerciseById = (id: string) => createSelector(
  exercisesSelector,
  (state) => state.byId[id]
)

export const getActiveExercise = createSelector(
  getExercises,
  getActiveExerciseId,
  (exercises, key) => exercises[key]
)

export const getIsExerciseCompleted = (id: string) => createSelector(
  exercisesSelector,
  (state) => (state.completedIds.indexOf(id) !== -1)
)

export const getAreExercisesComplete = createSelector(
  exercisesSelector,
  (state) => (state.availableIds.length === 0)
)
