import React, { FunctionComponent } from 'react'
import { Grid } from '@material-ui/core'
import { createStyles, Theme, withStyles } from '@material-ui/core/styles'

import { ActiveExercise, ExerciseList, NextExerciseButton, ResetExercisesButton } from './Exercises'

interface IMainView {
  classes: {
    appBackground: string
    container: string
  }
}

const styles = ({ palette }: Theme) => createStyles({
  appBackground: {
    background: palette.background.default,
    height: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto'
  }
})

const MainView: FunctionComponent<IMainView> = ({ classes }) => (
  <div className={classes.appBackground}>
    <div className={classes.container}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={3}
        >
          <ExerciseList />
        </Grid>
        <Grid
          item
          md={9}
          xs={12}
        >
          <ActiveExercise />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <NextExerciseButton />
          <ResetExercisesButton />
        </Grid>
      </Grid>
    </div>
  </div>
)

export default withStyles(styles)(MainView)
