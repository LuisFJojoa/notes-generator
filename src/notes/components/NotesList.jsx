import { useContext, useEffect, useMemo, useState } from "react";
import { NoteContext } from "../context";
import { ModalForm } from "./ModalForm";
import { NoteItem } from "./NoteItem";

export const NotesList = () => {

  const { renderedNotes } = useContext(NoteContext)
  const [show, setShow] = useState(false);
  // console.log(result);
  return (
    <div className="row rows-cols-1 row-cols-md-2 g-3">
      {
        renderedNotes?.map((note) => (
          <NoteItem
            key={note.id}
            {...note}
            onShow={()=> setShow(true)}

          />
        ))
      }
      <ModalForm title="Create/Edit Note" onClose={() => setShow(false)} show={show}>
        <p>This is modal body</p>
      </ModalForm>
    </div>
  )
}
