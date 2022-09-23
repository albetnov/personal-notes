import React, { useCallback, useContext, useEffect, useState } from 'react'
import useAlert from '../../hooks/useAlert'
import useTopBar from '../../hooks/useTopBar'
import LangContext from '../../store/LangContext'
import { getArchivedNotes } from '../../utilities/api'
import langString from '../../utilities/langString'
import Notes from '../NotesList/Notes'
import Topbar from '../topbar/Topbar'
import Alert from '../UI/Alert'
import Container from '../UI/Container'
import SplashScreen from '../UI/SplashScreen'

export default function ArchivedNotes () {
  const { lang } = useContext(LangContext)

  const [notes, setNotes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert, showAlert, closeAlert] = useAlert()
  const { search, setKeywordHandler } = useTopBar()

  const fetchNotes = useCallback(async () => {
    setIsLoading(true)
    const { error, data } = await getArchivedNotes()
    setIsLoading(false)

    if (error) {
      setAlert(langString[lang].error.serverErr)
      return
    }

    setNotes(data)
  }, [lang, setAlert])

  useEffect(() => {
    fetchNotes()
  }, [fetchNotes])

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Container>
      {showAlert && <Alert ensurance={showAlert} message={alert} closeHandler={closeAlert} />}
      {!showAlert && isLoading
        ? (
        <SplashScreen />
          )
        : (
        <>
          <Topbar onSearch={setKeywordHandler} search={search} />
          <Notes notes={filteredNotes} refetch={fetchNotes} />
        </>
          )}
    </Container>
  )
}
