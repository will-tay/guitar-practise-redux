import React, { FunctionComponent } from 'react'
import { ActiveExercise, ExerciseList, NextExerciseButton } from './Exercises'

const MainView: FunctionComponent = () => (
  <>
    <ExerciseList />
    <ActiveExercise />
    <NextExerciseButton />
  </>
)

export default MainView
