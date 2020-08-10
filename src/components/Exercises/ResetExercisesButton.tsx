import React, { FunctionComponent } from 'react'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getAreExercisesInProgress, resetExercises } from '../../store/ducks/exercises'
import { IRootState } from '../../store/rootReducer'

interface IResetExercisesButton {
  resetExercises: typeof resetExercises
  isExerciseInProgress: boolean
}

export const ResetExercisesButton: FunctionComponent<IResetExercisesButton> = ({ isExerciseInProgress, resetExercises }) => {
  const handleClick = () => resetExercises()
  return (
    <Button
      color={'primary'}
      disabled={!isExerciseInProgress}
      onClick={handleClick}
      variant={'contained'}
    >
      RESET
    </Button>
  )
}

const mapStateToProps = (state: IRootState) => ({
  isExerciseInProgress: getAreExercisesInProgress(state)
})

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  resetExercises
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ResetExercisesButton)
