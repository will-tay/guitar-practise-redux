import { IListOfExercises } from './index'

export const listOfExercises: IListOfExercises = {
  1: {
    id: '1',
    title: 'String skipping',
    desc: 'skip some strings, lorum ipsum. skip some strings, lorum ipsum. skip some strings, lorum ipsum. skip some strings, lorum ipsum. skip some strings, lorum ipsum. skip some strings, lorum ipsum. skip some strings, lorum ipsum. skip some strings, lorum ipsum. skip some strings, lorum ipsum. skip some strings, lorum ipsum. skip some strings, lorum ipsum. '
  },
  2: {
    id: '2',
    title: 'Scales',
    desc: 'do some scales, lorum ipsum. do some scales, lorum ipsum. do some scales, lorum ipsum. do some scales, lorum ipsum. do some scales, lorum ipsum. do some scales, lorum ipsum. do some scales, lorum ipsum. do some scales, lorum ipsum. do some scales, lorum ipsum. do some scales, lorum ipsum. do some scales, lorum ipsum. '
  },
  3: {
    id: '3',
    title: 'Chord progressions',
    desc: 'progress some chords, lorum ipsum. progress some chords, lorum ipsum. progress some chords, lorum ipsum. progress some chords, lorum ipsum. progress some chords, lorum ipsum. progress some chords, lorum ipsum. progress some chords, lorum ipsum. progress some chords, lorum ipsum. progress some chords, lorum ipsum. progress some chords, lorum ipsum. progress some chords, lorum ipsum. '
  },
  4: {
    id: '4',
    title: 'Rhythm exercise',
    desc: 'exercise your rhythms, lorum ipsum. exercise your rhythms, lorum ipsum. exercise your rhythms, lorum ipsum. exercise your rhythms, lorum ipsum. exercise your rhythms, lorum ipsum. exercise your rhythms, lorum ipsum. exercise your rhythms, lorum ipsum. exercise your rhythms, lorum ipsum. exercise your rhythms, lorum ipsum. exercise your rhythms, lorum ipsum. exercise your rhythms, lorum ipsum. '
  },
  5: {
    id: '5',
    title: 'Improv',
    desc: 'improvise da tings, lorum ipsum. improvise da tings, lorum ipsum. improvise da tings, lorum ipsum. improvise da tings, lorum ipsum. improvise da tings, lorum ipsum. improvise da tings, lorum ipsum. improvise da tings, lorum ipsum. improvise da tings, lorum ipsum. improvise da tings, lorum ipsum. improvise da tings, lorum ipsum. improvise da tings, lorum ipsum. '
  },
  6: {
    id: '6',
    title: 'Play by ear',
    desc: 'play by ear then, lorum ipsum. play by ear then, lorum ipsum. play by ear then, lorum ipsum. play by ear then, lorum ipsum. play by ear then, lorum ipsum. play by ear then, lorum ipsum. play by ear then, lorum ipsum. play by ear then, lorum ipsum. play by ear then, lorum ipsum. play by ear then, lorum ipsum. play by ear then, lorum ipsum. '
  }
}

export const allIds = Object.keys(listOfExercises).map(key => key)
