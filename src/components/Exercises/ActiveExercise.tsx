import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { IRootState } from '../../store/rootReducer'
import { getActiveExercise, IExercise } from '../../store/ducks/exercises'
import Timer from './Timer'

interface IActiveExercise {
  classes: {
    container: string
  }
  exercise?: IExercise
}

const styles = ({
  container: {
    minWidth: '100%'
  }
})

export const ActiveExercise: FunctionComponent<IActiveExercise> = ({ classes, exercise }) => (
  <div className={classes.container}>
    {exercise
      ? <>
        <Typography>{ exercise.title }</Typography>
        <Typography>{ exercise.desc }</Typography>
        <Timer />
      </>
      : <Typography>Every exercise completed, well done!</Typography>
    }
  </div>
)

const mapStateToProps = (state: IRootState) => ({
  exercise: getActiveExercise(state)
})

export default withStyles(styles)(connect(mapStateToProps)(ActiveExercise))
