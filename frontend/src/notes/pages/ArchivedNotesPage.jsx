import { useContext, useEffect } from "react"
import { NotesList } from "../components/NotesList"
import { NoteContext } from "../context"

export const ArchivedNotesPage = () => {

  const {allNotes, changePage} = useContext(NoteContext)
  
  useEffect(() => {
    changePage('archived')
  }, [])

  return (
    <div className="mt-3">
    <h1>ArchivedNotesPage</h1>
    <hr />
    <NotesList/>
    </div>
  )
}
