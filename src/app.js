import React from 'react'
import NoteRoutes from './components/NoteRoutes'
import Sidebar from './components/sidebar/Sidebar'
import AuthProvider from './store/AuthProvider'
import LangProvider from './store/LangProvider'
import ThemeProvider from './store/ThemeProvider'

function App () {
  return (
    <AuthProvider>
      <LangProvider>
        <ThemeProvider>
          <Sidebar />
          <main>
            <NoteRoutes />
          </main>
        </ThemeProvider>
      </LangProvider>
    </AuthProvider>
  )
}

export default App
