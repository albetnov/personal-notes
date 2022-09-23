import React, { useCallback, useContext, useEffect, useState } from 'react'
import { FiChevronsDown } from 'react-icons/fi'
import { useSearchParams } from 'react-router-dom'
import useAlert from '../../hooks/useAlert'
import LangContext from '../../store/LangContext'
import { getActiveNotes, getArchivedNotes } from '../../utilities/api'
import langString from '../../utilities/langString'
import DashboardCardItem from '../NotesList/DashboardCardItem'
import Notes from '../NotesList/Notes'
import Topbar from '../topbar/Topbar'
import Alert from '../UI/Alert'
import Card from '../UI/Card'
import Container from '../UI/Container'
import SplashScreen from '../UI/SplashScreen'
import Typography from '../UI/Typography'

export default function NotesList () {
  const { lang } = useContext(LangContext)
  const [alert, setAlert, showAlert, closeAlert] = useAlert()
  const [showStats, setShowStats] = useState(false)
  const [loading, setLoading] = useState(false)
  const [counter, setCounter] = useState({
    all: 0,
    active: 0,
    archived: 0
  })
  const [notes, setNotes] = useState([])

  const [searchParams, setSearchParams] = useSearchParams()
  const [keyword, setKeyword] = useState(searchParams.get('title') || '')

  const toggleStats = () => {
    setShowStats((prevValue) => !prevValue)
  }

  const setKeywordHandler = (value) => {
    setKeyword(value)
    setSearchParams({ title: value })
  }

  const getCount = useCallback(async () => {
    try {
      setLoading(true)

      const { error, data } = await getActiveNotes()
      const { error: archivedError, data: archivedNotes } = await getArchivedNotes()

      if (error || archivedError) {
        throw new Error()
      }

      setCounter({
        all: archivedNotes.length + data.length,
        archived: archivedNotes.length,
        active: data.length
      })

      setNotes(data)
    } catch (err) {
      setAlert(LangContext[lang].error.serverErr)
    } finally {
      setLoading(false)
    }
  }, [lang, setAlert])

  useEffect(() => {
    getCount()
  }, [getCount])

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  )

  const countCard = (
    <>
      <div className="hidden md:flex md:flex-row md:gap-3 lg:gap-0 md:justify-around md:items-center">
        <DashboardCardItem counter={counter} />
      </div>
      <Card className="md:hidden">
        <div className="flex justify-between items-center">
          <Typography>{langString[lang].active.statistics}</Typography>
          <button onClick={toggleStats}>
            <FiChevronsDown
              className={`dark:text-white transition-all delay-100 ${showStats && 'rotate-180'}`}
            />
          </button>
        </div>
        <div
          className={`mt-3 flex flex-col gap-3 ${
            !showStats ? 'hidden' : 'transition-all animate__height'
          }`}
        >
          <DashboardCardItem counter={counter} />
        </div>
      </Card>
    </>
  )

  return (
    <Container>
      <Topbar onSearch={setKeywordHandler} search={keyword} />
      <div className="mt-10">
        <Alert ensurance={showAlert} message={alert} closeHandler={closeAlert} />
        {loading ? <SplashScreen /> : countCard}
        {!loading && <Notes notes={filteredNotes} refetch={getCount} />}
      </div>
    </Container>
  )
}
