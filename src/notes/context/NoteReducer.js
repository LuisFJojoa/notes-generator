
import { types } from '../types/types'


export const NoteReducer = (state = [], action) => {

  switch (action.type) {
    case types.addNote:
      return [...state, action.payload]

    case types.removeNote:
      console.log(state);
      console.log(action);
      return {
        ...state,
        allNotes: state.allNotes.filter(note => note.id != action.payload)
    }

    case types.editNote:
      return state.map(note => {
        const { payload } = action
        if (note.id === payload.id) {
          return {
            ...note,
            title: payload.title,
            content: payload.content,
            lastEdited: payload.lasEdited
          }
        }
      })

    case types.changeNoteState:
      return {
        ...state,
        allNotes: state.allNotes.map(note =>
          note.id === action.payload.id
            ? { ...note, state: action.payload.state }
            : note
        )
      }

    case types.changePage:
      return action.payload


    default:
      return state;
  }
}