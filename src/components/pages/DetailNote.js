import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../../utilities/api'
import Card from '../UI/Card'
import Container from '../UI/Container'
import SplashScreen from '../UI/SplashScreen'
import Typography from '../UI/Typography'
import parser from 'html-react-parser'
import { FiArchive, FiTrash } from 'react-icons/fi'
import useAlert from '../../hooks/useAlert'
import Alert from '../UI/Alert'
import LangContext from '../../store/LangContext'
import langString from '../../utilities/langString'
import { AiOutlineUndo } from 'react-icons/ai'
import PropTypes from 'prop-types'

export default function DetailNote () {
  const { lang } = useContext(LangContext)

  const { id } = useParams()
  const navigate = useNavigate()

  const [note, setNote] = useState({})
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert, showAlert, closeAlert] = useAlert()

  useEffect(() => {
    const fetchNote = async () => {
      setIsLoading(true)
      const { error, data } = await getNote(id)
      setIsLoading(false)

      if (error) {
        setIsError(true)
        return
      }

      setNote(data)
    }

    fetchNote()
  }, [id])

  const archiveNoteHandler = async () => {
    setIsLoading(true)
    const { error } = await archiveNote(note.id)
    setIsLoading(false)

    if (error) {
      setAlert(langString[lang].error.serverErr)
      return
    }

    return navigate('/')
  }

  const unArchiveNoteHandler = async () => {
    setIsLoading(true)
    const { error } = await unarchiveNote(note.id)
    setIsLoading(false)

    if (error) {
      setAlert(langString[lang].error.serverErr)
      return
    }

    return navigate('/')
  }

  const deleteNoteHandler = async () => {
    setIsLoading(true)
    const { error } = await deleteNote(note.id)
    setIsLoading(false)

    if (error) {
      setAlert(langString[lang].error.serverErr)
      return
    }

    return navigate('/')
  }

  const BaseButton = ({ handler, icon }) => (
    <button
      onClick={handler}
      className="rounded-full p-2 bg-white dark:bg-slate-300 text-zinc-700 transition-all delay-100 hover:text-sky-400 hover:ring hover:ring-zinc-500"
    >
      {icon}
    </button>
  )

  BaseButton.propTypes = {
    handler: PropTypes.func.isRequired,
    icon: PropTypes.element.isRequired
  }

  const ArchiveButton = () => <BaseButton handler={archiveNoteHandler} icon={<FiArchive />} />

  const UnArchiveButton = () => (
    <BaseButton handler={unArchiveNoteHandler} icon={<AiOutlineUndo />} />
  )

  const contentScreen = (
    <div className="pt-10">
      <Card className="shadow-md">
        <Alert ensurance={showAlert} message={alert} closeHandler={closeAlert} />
        <Typography variant="heading2">{note.title}</Typography>
        <Card className="mt-3 dark:text-slate-200">{note.body && parser(note.body)}</Card>
        <div className="flex items-center justify-around gap-3 rounded-full bg-zinc-700 p-2 w-fit mt-5 mb-1">
          {note.archived ? <UnArchiveButton /> : <ArchiveButton />}
          <button
            onClick={deleteNoteHandler}
            className="rounded-full dark:bg-slate-300 p-2 bg-white text-zinc-700 transition-all delay-100 hover:text-rose-400 hover:ring hover:ring-zinc-500"
          >
            <FiTrash />
          </button>
        </div>
      </Card>
    </div>
  )

  const errorScreen = (
    <div className="h-[95vh] w-full flex flex-col gap-3 items-center justify-center">
      <Typography variant="heading3">Ups...</Typography>
      <Typography>Something went wrong...</Typography>
    </div>
  )

  const errorFallback = isError ? errorScreen : contentScreen

  const content = isLoading ? <SplashScreen /> : errorFallback

  return <Container>{content}</Container>
}
