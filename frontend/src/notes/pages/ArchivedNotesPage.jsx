import { useAxios } from "../../hooks/useAxios";
import { LoadingScreen, NotesList, EmptyScreen } from "../components/";

export const ArchivedNotesPage = () => {

  const { deleteNote,updateNote, data: renderedNotes, isLoading, hasError } = useAxios('findByState', 'archived');
  
  return (
    <div className="mt-3">
      <div className="container d-flex p-0">
        <div className="col-6">
          <h1>Archived notes</h1>
        </div>
      </div>
      <hr />
      {
        isLoading
          ? <LoadingScreen title="Loading archived notes... wait a minute" />
          : <NotesList title="No notes archived yet..." renderedNotes={renderedNotes} deleteNote={deleteNote} updateNote={updateNote} />
      }
    </div>
  )
}
