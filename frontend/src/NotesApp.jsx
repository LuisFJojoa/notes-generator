import React from 'react'
import { AuthProvider } from './auth/context'
import { AppRouter } from './router/AppRouter'

export const NotesApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  )
}
