import { useMemo } from "react";
import { getNotesByState } from "../helpers";
import { NoteItem } from "./NoteItem";

export const NotesList = ({state='no-archived'}) => {

  //state => boolean to know if a note is archived or not
  const notes = useMemo( ()=> getNotesByState(state), [state]);
 
  return (
    <div className="row rows-cols-1 row-cols-md-2 g-3">
      { 
      notes.map((note)=>(
        <NoteItem
        key={notes.id}
        {...note}
        />
      ))
      }
    </div>
  )
}
