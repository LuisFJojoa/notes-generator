import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/"
import { NotesPage, ArchivedNotesPage, NotFoundPage } from "../pages"

export const NotesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to="/my-notes" />} />
            <Route path="my-notes" element={<NotesPage />} />
            <Route path="archived-notes" element={<ArchivedNotesPage />} />
            <Route path="*" element={<NotFoundPage />} />
            {/* <Route path="search" element={<SearchPage/>} />
          <Route path="hero/:id" element={<HeroPage />} /> */}
          </Routes>
      </div>
    </>
  )
}