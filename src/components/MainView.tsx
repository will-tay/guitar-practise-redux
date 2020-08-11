import React, { FunctionComponent } from 'react'
import { AppBar, IconButton, Toolbar, Typography, Grid } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { createStyles, Theme, withStyles } from '@material-ui/core/styles'

import { ActiveExercise, ExerciseList, NextExerciseButton, ResetExercisesButton } from './Exercises'

interface IMainView {
  classes: {
    appBackground: string
    container: string
    menuButton: string
    title: string
  }
}

const styles = ({ palette, spacing }: Theme) => createStyles({
  appBackground: {
    background: palette.background.default,
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: '1400px',
    margin: '0 auto'
  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: spacing(2)
  },
  title: {
    flexGrow: 1
  }
})

const MainView: FunctionComponent<IMainView> = ({ classes }) => (
  <>
    <AppBar position='static'>
      <Toolbar>
        <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
          <Menu />
        </IconButton>
        <Typography variant='h6' className={classes.title}>
          Guitar Malpractise
        </Typography>
      </Toolbar>
    </AppBar>
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
  </>
)

export default withStyles(styles)(MainView)
