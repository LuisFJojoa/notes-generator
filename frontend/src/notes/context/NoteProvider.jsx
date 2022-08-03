import { useReducer } from "react"
import { Notes } from "../data/Notes"
import { getNotesByState } from "../helpers/getNotesByState"
import { types } from "../types/types"
import { NoteContext, NoteReducer } from "./"

const initialValue = {
  allNotes: Notes,
  renderedNotes: [],
  page: ''
}

export const NoteProvider = ({ children }) => {

  const initializer = () => {
  }

  const [state, dispatch] = useReducer(NoteReducer, initialValue, initializer)


  const addNote = (note) => {
    const action = { type: types.addNote, payload: note}
    dispatch(action)
  }

  const removeNote = (id) => {
    const action = { type: types.removeNote, payload: id}
    dispatch(action)
  }

  const editNote = (note) => {
    const action = { type: types.editNote, payload: note}
    dispatch(action)
  }

  const changeNoteState = (payload) => {
    const action = { type: types.changeNoteState, payload: payload}
    dispatch(action)
  }

  const changePage = (page) => {
    const allNotes = initialValue.allNotes;
    const notes = getNotesByState(page, initialValue.allNotes)
    const payload = {
      allNotes: allNotes,
      renderedNotes: notes,
      page: page
    }
    const action = { type: types.changePage, payload: payload}
    dispatch(action)
  }


  return (
    <NoteContext.Provider value={{
      ...state,
      addNote,
      removeNote,
      editNote,
      changeNoteState,
      changePage,
      dispatch
    }}>
      {children}
    </NoteContext.Provider>
  )
}
