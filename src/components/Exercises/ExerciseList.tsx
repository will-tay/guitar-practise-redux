import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { List, ListItem, Typography } from '@material-ui/core'
import { Theme, createStyles, withStyles } from '@material-ui/core/styles'

import { IRootState } from '../../store/rootReducer'
import { getAllIds, getExercises, IListOfExercises } from '../../store/ducks/exercises'
import ExerciseItem from './ExerciseItem'

const styles = ({ palette }: Theme) => createStyles({
  background: {
    backgroundColor: palette.secondary.main
  }
})

interface IExerciseList {
  classes: {
    background: string
  }
  exercises?: IListOfExercises
  ids: Array<string>
}

export const ExerciseList: FunctionComponent<IExerciseList> = ({ classes, exercises, ids }) => (
  <div className={classes.background}>
    <Typography>Exercises</Typography>
    <List>
      { ids.map(exerciseKey => (
        <ListItem key={`exericse_${exercises[exerciseKey].id}`}>
          <ExerciseItem
            exercise={exercises[exerciseKey]}
          />
        </ListItem>
      ))}
    </List>
  </div>
)

const mapStateToProps = (state: IRootState) => ({
  exercises: getExercises(state),
  ids: getAllIds(state)
})

export default withStyles(styles)(
  connect(
    mapStateToProps
  )(ExerciseList)
)
