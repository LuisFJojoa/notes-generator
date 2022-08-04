import { useState } from "react"
import { BsPlus } from 'react-icons/bs'
import { useAxios } from "../../hooks/useAxios"
import { LoadingScreen, EmptyScreen, NotesList } from "../components/"

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
          <h1>My notes</h1>
        </div>

        <div className="col-6 d-flex align-items-center justify-content-end">
          <button type="button" onClick={() => onAddNote()} className="btn btn-outline-dark btn-lg d-flex flex-row">
            Add Note
            <BsPlus size={30} />
          </button>
        </div>
      </div>
      <hr />
      {
        isLoading
          ? <LoadingScreen title="Loading notes" />
          : <NotesList title={`No notes yet, ADD your first note here...`} modalState={modalState} setModal={setModalState} renderedNotes={renderedNotes} createNote={createNote} updateNote={updateNote} deleteNote={deleteNote}/>
             
      }

    </div>
  )
}
