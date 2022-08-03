import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/"
import { NotesRoutes } from "../notes/routes/NotesRoutes"
import { PrivateRoute } from "./"
import { PublicRoute } from "./"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />

        <Route path="/*" element={
          <PrivateRoute>
            <NotesRoutes />
          </PrivateRoute>
        } />

      </Routes>
    </>
  )
}
