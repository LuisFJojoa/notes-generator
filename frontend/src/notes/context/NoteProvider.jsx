import { useReducer } from "react"
import { useAxios } from "../../hooks/useAxios"
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

  // { id: 1, title: 'Some old note 1', content: 'Information here updated please...', state: 'archived', categories: "['category-1']" }

  // const { data, isLoading, hasError } = useAxios('update', { id: 3, title: 'New Data testing 3 because yes...', content: 'Information here updated please por favor...', state: 'no-archived', categories: ['category-1','category-2'].join() }, false);

  // const response = !!data && data.length > 0 && data[0];

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
    // const allNotes = initialValue.allNotes;
    // const notes = getNotesByState(page, initialValue.allNotes)
    // const payload = {
    //   allNotes: allNotes,
    //   renderedNotes: notes,
    //   page: page
    // }
    // const action = { type: types.changePage, payload: payload}
    // dispatch(action)
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
