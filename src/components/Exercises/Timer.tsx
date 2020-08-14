import React, { FunctionComponent, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import formatTime from 'pretty-ms'
import { withStyles } from '@material-ui/core/styles'
import { Box, Button, ButtonGroup, LinearProgress, Typography } from '@material-ui/core'
import { PlayArrow, Stop, Refresh } from '@material-ui/icons'

import { IRootState } from '../../store/rootReducer'
import { getActiveExercise, IExercise } from '../../store/ducks/exercises'

interface ITimer {
  classes: {
    [key: string]: string
  }
  exercise: IExercise
}

const styles = ({
  timesUp: {
    background: 'red'
  },
  transitionOverride: {
    transition: 'transform 1s linear'
  },
  progressBar: {
    width: '100%'
  }
})

export const Timer: FunctionComponent<ITimer> = ({ classes, exercise }) => {
  const prevExerciseId = usePrevious(exercise.id)
  const [time, setTime] = useState(0)
  const [isOn, setIsOn] = useState(false)
  const [start, setStart] = useState(0)
  const [timeReached, setTimeReached] = useState(false)
  useEffect(() => {
    if (isOn) {
      const timer = setInterval(() => {
        setTime((Date.now() - start))
      }, 1000)
      return () => {
        clearInterval(timer)
      }
    }
  }, [isOn])
  useEffect(() => {
    if (time > exercise.time) {
      setTimeReached(true)
      stopTimer()
    }
  }, [time])
  useEffect(() => {
    if (prevExerciseId !== exercise.id) {
      stopTimer()
      resetTimer()
    }
  }, [exercise])
  const startTimer = () => {
    setIsOn(true)
    setTime(time)
    setStart((Date.now() - time))
  }
  const stopTimer = () => setIsOn(false)
  const resetTimer = () => {
    setStart(0)
    setTime(0)
    setTimeReached(false)
  }
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <LinearProgress
        classes={{
          bar1Determinate: classes.transitionOverride
        }}
        className={classes.progressBar}
        variant={'determinate'}
        value={(time / exercise.time * 100)}
      />
      <Typography
        className={timeReached ? classes.timesUp : ''}
      >
        Time: { time === 0 ? '0:00' : formatTime(time, { colonNotation: true, secondsDecimalDigits: 0 })} / {formatTime(exercise.time, { colonNotation: true })}
      </Typography>
      <ButtonGroup variant='contained' color='primary' aria-label='contained primary button group'>
        <Button
          disabled={isOn || timeReached}
          onClick={startTimer}
        >
          <PlayArrow />
        </Button>
        <Button
          disabled={!isOn}
          onClick={stopTimer}
        >
          <Stop />
        </Button>
        <Button
          disabled={isOn || (time === 0)}
          onClick={resetTimer}
        >
          <Refresh />
        </Button>
      </ButtonGroup>
    </Box>
  )
}

function usePrevious(value: any) {
  const ref = React.useRef()
  React.useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

const mapStateToProps = (state: IRootState) => ({
  exercise: getActiveExercise(state)
})

export default withStyles(styles)(connect(mapStateToProps)(Timer))
