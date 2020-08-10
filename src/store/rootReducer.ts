import { combineReducers } from '@reduxjs/toolkit'

import exercisesReducer, { IExercisesState } from './ducks/exercises'
// import assetGroupsReducer, { ILocationsState } from './ducks/locations'
import KEYS from './storeKeys'

export interface IRootState {
  [KEYS.EXERCISES]: IExercisesState
//   [KEYS.LOCATIONS]: IAssetGroupsState
}

const rootReducer = combineReducers({
  [KEYS.EXERCISES]: exercisesReducer
  // [KEYS.LOCATIONS]: assetGroupsReducer,
})

export default rootReducer
