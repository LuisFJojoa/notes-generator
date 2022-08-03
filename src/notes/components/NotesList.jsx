import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { NoteContext } from "../context";
import { ModalForm } from "./ModalForm";
import { NoteItem } from "./NoteItem";

export const NotesList = ({modalState=false}) => {

  const { renderedNotes } = useContext(NoteContext)
  const [show, setShow] = useState(modalState)
  const [renderedNote, setRenderedNote] = useState({})

  const onShow = (note) => {
    console.log("Note edited: " + note.id);
    setRenderedNote(note);
    setShow(true)
  }
  // console.log(result);
  return (
    <div className="row rows-cols-1 row-cols-md-2 g-3">
      {
        renderedNotes?.map((note) => (
          <NoteItem
            key={note.id}
            {...note}
            onShow={()=> onShow(note)}

          />
        ))
      }
      
      <ModalForm modalTitle="Create/Edit Note" onClose={() => setShow(false)} show={show} renderedNote={renderedNote}>
        <p>This is modal body</p>
      </ModalForm>
    </div>
  )
}
