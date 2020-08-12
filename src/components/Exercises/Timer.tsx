import React, { FunctionComponent, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import formatTime from 'pretty-ms'
import { withStyles } from '@material-ui/core/styles'
import { IconButton, Typography } from '@material-ui/core'
import { PlayArrow, Stop, Refresh } from '@material-ui/icons'

import { IRootState } from '../../store/rootReducer'
import { getActiveExercise, IExercise } from '../../store/ducks/exercises'

interface ITimer {
  classes: {
    timesUp: string
  }
  exercise: IExercise
}

const styles = ({
  timesUp: {
    background: 'red'
  }
})

export const Timer: FunctionComponent<ITimer> = ({ classes, exercise }) => {
  const prevExercise = usePrevious(exercise)
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
    if (prevExercise !== exercise) {
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
    <>
      <IconButton
        disabled={isOn || timeReached}
        onClick={startTimer}
      >
        <PlayArrow />
      </IconButton>
      <IconButton
        disabled={!isOn}
        onClick={stopTimer}
      >
        <Stop />
      </IconButton>
      <IconButton
        disabled={isOn || (time === 0)}
        onClick={resetTimer}
      >
        <Refresh />
      </IconButton>
      <Typography
        className={timeReached ? classes.timesUp : ''}
      >
        Time: { time === 0 ? '0:00' : formatTime(time, { colonNotation: true, secondsDecimalDigits: 0 })} / {formatTime(exercise.time, { colonNotation: true })}
      </Typography>
    </>
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
