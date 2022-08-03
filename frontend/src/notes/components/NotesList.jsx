import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { NoteContext } from "../context";
import { SaveNote } from "./SaveNote";
import { DeleteNote } from "./DeleteNote";
import { NoteItem } from "./NoteItem";

export const NotesList = ({modalState=false, setModal}) => {


  const { renderedNotes } = useContext(NoteContext)
  const [deleteModalState, setDeleteModalState] = useState(false)
  const [renderedNote, setRenderedNote] = useState({})
  
  const onDeleteModal = (id) => {
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
  // console.log(result);
  return (
    <div className="row rows-cols-1 row-cols-md-2 g-3">
      {
        renderedNotes?.map((note) => (
          <NoteItem
            key={note.id}
            {...note}
            onCreateEditModal={() => onCreateEditModal(note)}
            onDeleteModal={() => onDeleteModal(note.id)}
          />
        ))
      }
      {
        <>
          <SaveNote
            modalTitle="Create/Edit Note"
            onClose={onCloseModal}
            show={modalState}
            renderedNote={renderedNote}>
          </SaveNote>

          <DeleteNote
            modalTitle="¿Are you sure to delete this note?"
            onClose={() => setDeleteModalState(false)}
            show={deleteModalState}
            noteId={renderedNote.id}>
          </DeleteNote></>
      }
    </div>
  )
}
