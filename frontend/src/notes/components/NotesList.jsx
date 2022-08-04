import { useState } from "react";

import { SaveNote, DeleteNote, NoteItem } from "./";

export const NotesList = ({modalState=false, setModal, renderedNotes, createNote, updateNote, deleteNote}) => {

  const [deleteModalState, setDeleteModalState] = useState(false)
  const [renderedNote, setRenderedNote] = useState({})
  
  const onDeleteModal = (note) => {
    setRenderedNote(note)
    setDeleteModalState(true)
  }
  const onCreateEditModal = (note) => {
    setRenderedNote(note);
    setModal(true);
  }

  const onCloseModal= () => {
    setModal(false);
    setRenderedNote({});
  }

  const onCreateNote= (note) => {
    createNote(note)
    setModal(false)
  }

  const onUpdateNote= (note, flag) => {
    updateNote(note, flag)
    setModal(false)
  }

  const onDeleteNote = (note) => {
    deleteNote(note)
    setDeleteModalState(false)
  }
  return (
    <div className="row rows-cols-sm-1 row-cols-md-2 g-3">
      {
        renderedNotes?.map((note) => (
          <NoteItem
            key={note.id}
            {...note}
            onCreateEditModal={() => onCreateEditModal(note)}
            onDeleteModal={() => onDeleteModal(note)}
            onUpdateNote={updateNote}
          />
        ))
      }
      {
        <>
          <SaveNote
            modalTitle="Create/Edit Note"
            onClose={onCloseModal}
            show={modalState}
            renderedNote={renderedNote}
            onCreateNote={onCreateNote}
            onUpdateNote={onUpdateNote}>
          </SaveNote>

          <DeleteNote
            modalTitle="¿Are you sure to delete this note?"
            onClose={() => setDeleteModalState(false)}
            show={deleteModalState}
            noteToDelete={renderedNote}
            onDeleteNote={onDeleteNote}>
          </DeleteNote></>
      }
    </div>
  )
}
