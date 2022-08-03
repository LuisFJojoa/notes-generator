import { useContext, useEffect, useState } from "react"
import { NotesList } from "../components/NotesList"
import { NoteContext } from "../context"
import { BsPlus } from 'react-icons/bs'

export const NotesPage = () => {

  const { changePage, allNotes } = useContext(NoteContext)
  const [modalState, setModalState] = useState(false)

  useEffect(() => {
    changePage('no-archived')
  }, [])

  const onAddNote = () => {
    console.log('...');
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
            <BsPlus size={30}/>
          </button>
        </div>
      </div>

      <hr />
      <NotesList modalState={modalState} />
    </div>
  )
}
