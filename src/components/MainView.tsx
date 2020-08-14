import React, { FunctionComponent } from 'react'
import { AppBar, Box, Container, IconButton, Toolbar, Typography, Grid } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

import { ActiveExercise, ExerciseList, NextExerciseButton, ResetExercisesButton } from './Exercises'

const MainView: FunctionComponent = () => (
  <>
    <AppBar position='static'>
      <Container>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='menu'>
            <Menu />
          </IconButton>
          <Typography variant='h6'>
            Guitar Malpractise
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      boxSizing={'border-box'}
      bgcolor={'background.default'}
    >
      <Container>
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
            <Box
              display={'flex'}
              flexDirection={'column'}
              height={'100%'}
            >
              <ActiveExercise />
              <Box mt={'auto'}>
                <NextExerciseButton />
                <ResetExercisesButton />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
)

export default MainView
