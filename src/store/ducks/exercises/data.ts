import { IListOfExercises } from './index'

export const listOfExercises: IListOfExercises = {
  1: {
    id: '1',
    title: 'Playing Melodies',
    desc: 'Imagine simple song melodies and try and play them in different parts of the neck instantly. The aim is to develop the relationship between your musical mind and your hands.',
    time: 10000
  },
  2: {
    id: '2',
    title: 'Bar Breaks',
    desc: 'Play with a click that stops on alternating bars and you have to maintain the groove and tempo.',
    time: 300000
  },
  3: {
    id: '3',
    title: 'Quality Notes',
    desc: 'Spend 5 minutes really focussing in on the quality of the notes you play. Just muck about and play anything at all - but with real care about the sound, the tone, the clarity of the notes and also explore finger placement, where you pick and the way the dynamics affect the note.',
    time: 300000
  },
  4: {
    id: '4',
    title: 'Bending In Tune',
    desc: 'Just like it says - working on making sure that all your bends are in tune.',
    time: 300000
  },
  5: {
    id: '5',
    title: 'Bend Exploration',
    desc: 'Just explore the idea and see what you can find that\'s new or exciting.',
    time: 300000
  },
  6: {
    id: '6',
    title: 'Vibrato',
    desc: 'Just work on different types of vibrato - whatever grabs your fancy on the day!',
    time: 300000
  },
  7: {
    id: '7',
    title: 'Neck Vibrato',
    desc: 'Pushing and Pulling the neck to get vibrato effect on chords. Just explore it.',
    time: 300000
  },
  8: {
    id: '8',
    title: 'Single String Picking',
    desc: 'What it says on the tin - usually with a metronome, think about keeping your hand and arm relaxed and exploring different techniques you encounter.',
    time: 300000
  },
  9: {
    id: '9',
    title: 'Economy Picking',
    desc: 'Explore short phases that use it that are working their way into your improvised playing.',
    time: 300000
  },
  10: {
    id: '10',
    title: 'Volume Swells',
    desc: 'Using the volume to get a violin effect, play a note with the volume on 0 and then wind it up so you hear the note but without the pick attack!',
    time: 300000
  },
  11: {
    id: '11',
    title: 'Thumb Over Chords',
    desc: 'Exploring using the extra digit - Just exploring the idea and seeing what you can come up with!',
    time: 300000
  },
  12: {
    id: '12',
    title: 'Finger Tapping Exploration',
    desc: 'Explore different finger tapping techniques.',
    time: 300000
  },
  13: {
    id: '13',
    title: 'Octaves',
    desc: 'Play arpeggios.',
    time: 300000
  },
  14: {
    id: '14',
    title: 'String Skipping',
    desc: 'Practise some string skipping.',
    time: 300000
  },
  15: {
    id: '15',
    title: 'Dynamic Accents',
    desc: 'Work on playing scale patterns while making accents every x beats, great for pick control, and concentration! And helpful doing funny numbers like 7\'s or something.',
    time: 300000
  },
  16: {
    id: '16',
    title: 'Hybrid Picking',
    desc: 'Try out some hybrid picking!',
    time: 300000
  }
}

export const allIds = Object.keys(listOfExercises).map(key => key)
