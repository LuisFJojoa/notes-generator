

export const getNotesByState = (state, notes) => {

  const validState = ['archived', 'no-archived'];
  if (!validState.includes(state)) {
    throw new Error( `${state} is not a valid state`)
  }

  return notes.filter(note => note.state === state)
}