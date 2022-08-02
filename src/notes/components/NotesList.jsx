import { useContext, useEffect, useMemo } from "react";
import { NoteContext } from "../context";
import { NoteItem } from "./NoteItem";

export const NotesList = () => {

  const {renderedNotes} = useContext(NoteContext)
  // console.log(result);

  return (
    <div className="row rows-cols-1 row-cols-md-2 g-3">
      {
        renderedNotes?.map((note) => (
          <NoteItem
            key={note.id}
            {...note}
          />
        ))
      }
    </div>
  )
}
