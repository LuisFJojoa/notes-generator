import { useContext, useEffect } from "react"
import { NotesList } from "../components/NotesList"
import { NoteContext } from "../context"

export const NotesPage = () => {

  const { changePage, allNotes} = useContext(NoteContext)
  
  useEffect(() => {
    changePage('no-archived')
  }, [])
  
  return (
    <div className="mt-3">
      <h1>NotesPage</h1>
      <hr />
      <NotesList />
    </div>
  )
}
