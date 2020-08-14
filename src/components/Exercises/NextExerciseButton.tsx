import React, { FunctionComponent } from 'react'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getAreExercisesComplete, nextExercise } from '../../store/ducks/exercises'
import { IRootState } from '../../store/rootReducer'

interface INextExerciseButton {
  isExercisesAllCompleted: boolean
  nextExercise: typeof nextExercise
}

export const NextExerciseButton: FunctionComponent<INextExerciseButton> = ({ isExercisesAllCompleted, nextExercise }) => (
  <Button
    color={'primary'}
    disabled={isExercisesAllCompleted}
    onClick={nextExercise}
    variant={'contained'}
  >
    NEXT
  </Button>
)

const mapStateToProps = (state: IRootState) => ({
  isExercisesAllCompleted: getAreExercisesComplete(state)
})

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  nextExercise
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NextExerciseButton)
