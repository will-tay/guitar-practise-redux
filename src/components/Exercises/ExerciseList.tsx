import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'

import { IRootState } from '../../store/rootReducer'
import { getAllIds, getExercises, IListOfExercises } from '../../store/ducks/exercises'

interface IExerciseList {
  exercises?: IListOfExercises
  ids: Array<string>
}

export const ExerciseList: FunctionComponent<IExerciseList> = ({ exercises, ids }) => (
  <div>
    { ids.map(exerciseKey => (
      <div key={`exericse_${exercises[exerciseKey].id}`}>
        {exercises[exerciseKey].title}
      </div>
    ))}
  </div>
)

const mapStateToProps = (state: IRootState) => ({
  exercises: getExercises(state),
  ids: getAllIds(state)
})

export default connect(mapStateToProps)(ExerciseList)
