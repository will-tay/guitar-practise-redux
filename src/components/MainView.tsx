import React, { FunctionComponent } from 'react'
import { ActiveExercise, ExerciseList } from './Exercises'

const MainView: FunctionComponent = () => (
  <div>
    <ExerciseList />
    <ActiveExercise />
    Hi Im an App.
  </div>
)

export default MainView
