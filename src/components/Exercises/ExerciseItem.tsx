import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { ListItemText } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { IExercise, getIsExerciseCompleted } from '../../store/ducks/exercises'
import { IRootState } from '../../store/rootReducer'

interface IExerciseItem {
  classes: {
    completed: string
  }
  exercise: IExercise
  isCompleted: boolean
}

const styles = ({
  completed: {
    textDecoration: 'line-through'
  }
})

export const ExerciseItem: FunctionComponent<IExerciseItem> = ({ classes, exercise, isCompleted }) => {
  return (
    <>
      { exercise &&
        <ListItemText className={isCompleted ? classes.completed : ''}>
          { exercise.title }
        </ListItemText>
      }
    </>
  )
}

const mapStateToProps = (state: IRootState, props: Partial<IExerciseItem>) => ({
  isCompleted: getIsExerciseCompleted(props.exercise.id)(state)
})

export default withStyles(styles)(
  connect(
    mapStateToProps
  )(ExerciseItem)
)
