import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { Box, Typography } from '@material-ui/core'

import { IRootState } from '../../store/rootReducer'
import { getActiveExercise, IExercise } from '../../store/ducks/exercises'
import Timer from './Timer'

interface IActiveExercise {
  exercise?: IExercise
}

export const ActiveExercise: FunctionComponent<IActiveExercise> = ({ exercise }) => (
  <Box minWidth={'100%'}>
    {exercise
      ? <>
        <Typography
          align={'center'}
          variant={'h3'}
        >
          { exercise.title }
        </Typography>
        <Typography variant={'body1'}>{ exercise.desc }</Typography>
        <Timer />
      </>
      : <Typography>Every exercise completed, well done!</Typography>
    }
  </Box>
)

const mapStateToProps = (state: IRootState) => ({
  exercise: getActiveExercise(state)
})

export default connect(mapStateToProps)(ActiveExercise)
