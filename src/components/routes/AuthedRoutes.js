import React from 'react'
import { Route } from 'react-router-dom'
import ArchivedNotes from '../pages/ArchivedNotes'
import CreateNote from '../pages/CreateNote'
import DetailNote from '../pages/DetailNote'
import NotesList from '../pages/NotesList'
import NotFound from '../pages/NotFound'

const AuthedRoutes = (
  <>
    <Route path="/" element={<NotesList />} />
    <Route path="/notes/archived" element={<ArchivedNotes />} />
    <Route path="/note/create" element={<CreateNote />} />
    <Route path="/note/:id" element={<DetailNote />} />
    <Route path="*" element={<NotFound />} />
  </>
)

export default AuthedRoutes
