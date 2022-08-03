import { useEffect, useState } from "react";


export const getNotesByState = (state, notes) => {

  const [renderedNotes, setRenderedNotes] = useState([])

  const validState = ['archived', 'no-archived'];
  if (!validState.includes(state)) {
    throw new Error(`${state} is not a valid state`)
  }

  return renderedNotes
}

