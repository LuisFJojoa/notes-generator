import { Notes } from '../data/Notes'

export const getNotesByState = (state) => {

  const validState = ['archived', 'no-archived'];
  if (!validState.includes(state)) {
    throw new Error( `${state} is not a valid state`)
  }

  return Notes.filter(note => note.state === state)
}