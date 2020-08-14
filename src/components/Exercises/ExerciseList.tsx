import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { Box, List, ListItem, Paper, Typography } from '@material-ui/core'

import { IRootState } from '../../store/rootReducer'
import { getAllIds, getExercises, IListOfExercises } from '../../store/ducks/exercises'
import ExerciseItem from './ExerciseItem'

interface IExerciseList {
  exercises?: IListOfExercises
  ids: Array<string>
}

export const ExerciseList: FunctionComponent<IExerciseList> = ({ exercises, ids }) => (
  <Box
    component={Paper}
    p={'1rem'}
  >
    <Typography>Exercise List</Typography>
    <List>
      { ids.map(exerciseKey => (
        <ListItem key={`exericse_${exercises[exerciseKey].id}`}>
          <ExerciseItem
            exercise={exercises[exerciseKey]}
          />
        </ListItem>
      ))}
    </List>
  </Box>
)

const mapStateToProps = (state: IRootState) => ({
  exercises: getExercises(state),
  ids: getAllIds(state)
})

export default connect(mapStateToProps)(ExerciseList)
