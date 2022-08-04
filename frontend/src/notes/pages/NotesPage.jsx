import { useState } from "react"
import { NotesList } from "../components/NotesList"
import { BsPlus } from 'react-icons/bs'
import { useAxios } from "../../hooks/useAxios"
import { LoadingScreen } from "../components/LoadingScreen"

export const NotesPage = () => {

  const [modalState, setModalState] = useState(false)
  const { deleteNote, createNote, updateNote, data: renderedNotes, isLoading, hasError } = useAxios('findByState', 'no-archived');

  const onAddNote = () => {
    setModalState(true)
  }

  return (
    <div className="mt-3">
      <div className="container d-flex p-0">
        <div className="col-6">
          <h1>NotesPage</h1>
        </div>

        <div className="col-6 d-flex align-items-center justify-content-end">
          <button type="button" onClick={() => onAddNote()} className="btn btn-outline-dark btn-lg d-flex flex-row pt-2">
            Add Note
            <BsPlus size={30} />
          </button>
        </div>
      </div>

      <hr />
      {
        isLoading
          ? <LoadingScreen />
          : <NotesList modalState={modalState} setModal={setModalState} renderedNotes={renderedNotes} createNote={createNote} updateNote={updateNote} deleteNote={deleteNote}/>
      }

    </div>
  )
}
