import { NotesList } from "../components/NotesList"

export const NotesPage = () => {
  return (
    <div className="mt-3">
      <h1>NotesPage</h1>
      <hr />
      <NotesList state='archived' />
    </div>
  )
}
