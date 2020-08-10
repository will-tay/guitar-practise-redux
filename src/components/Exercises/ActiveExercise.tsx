import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'

import { IRootState } from '../../store/rootReducer'
import { getActiveExercise, IExercise } from '../../store/ducks/exercises'

interface IActiveExercise {
  exercise?: IExercise
  // id: string
}

export const ActiveExercise: FunctionComponent<IActiveExercise> = ({ exercise }) => (
  <div>
    {exercise &&
      <div>ACTIVE EXERCISE IS: { exercise.title }</div>
    }
  </div>
)

const mapStateToProps = (state: IRootState) => ({
  exercise: getActiveExercise(state)
})

export default connect(mapStateToProps)(ActiveExercise)
