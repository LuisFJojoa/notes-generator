import { useAxios } from "../../hooks/useAxios";
import { LoadingScreen } from "../components/LoadingScreen";
import { NotesList } from "../components/NotesList"

export const ArchivedNotesPage = () => {

  const { deleteNote,updateNote, data: renderedNotes, isLoading, hasError } = useAxios('findByState', 'archived');


  return (
    <div className="mt-3">
      <h1>ArchivedNotesPage</h1>
      <hr />
      {
        isLoading
          ? <LoadingScreen />
          : <NotesList renderedNotes={renderedNotes} onDeleteNote={deleteNote} updateNote={updateNote} />
      }
    </div>
  )
}
