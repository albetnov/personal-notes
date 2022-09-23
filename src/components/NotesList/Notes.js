import React, { useContext, useState } from 'react'
import Card from '../UI/Card'
import Typography from '../UI/Typography'
import parser from 'html-react-parser'
import { useNavigate } from 'react-router-dom'
import Alert from '../UI/Alert'
import { FiArchive, FiTrash } from 'react-icons/fi'
import LangContext from '../../store/LangContext'
import langString from '../../utilities/langString'
import { archiveNote, deleteNote, unarchiveNote } from '../../utilities/api'
import useAlert from '../../hooks/useAlert'
import { AiOutlineUndo } from 'react-icons/ai'
import PropTypes from 'prop-types'

export default function Notes ({ notes, refetch }) {
  const { lang } = useContext(LangContext)
  const [error, setError, showError, closeError] = useAlert()

  const navigate = useNavigate()

  const openDetails = (id) => {
    return navigate(`/note/${id}`)
  }

  const [showAlert, setShowAlert] = useState(true)

  const toggleAlert = () => {
    setShowAlert((prevValue) => !prevValue)
  }

  const archiveNoteHandler = async (id) => {
    const { error } = await archiveNote(id)

    if (error) {
      setError(langString[lang].error.serverErr)
      return
    }
    refetch()
  }

  const unArchiveNoteHandler = async (id) => {
    const { error } = await unarchiveNote(id)

    if (error) {
      setError(langString[lang].error.serverErr)
      return
    }
    refetch()
  }

  const deleteNoteHandler = async (event, id) => {
    event.stopPropagation()
    const { error } = await deleteNote(id)

    if (error) {
      setError(langString[lang].error.serverErr)
      return
    }
    refetch()
  }

  const BaseButton = ({ icon, onClick }) => {
    return (
      <button
        className="p-2 rounded bg-sky-200 transition-all delay-100 hover:shadow"
        onClick={onClick}
      >
        {icon}
      </button>
    )
  }

  BaseButton.propTypes = {
    icon: PropTypes.element.isRequired,
    onClick: PropTypes.func.isRequired
  }

  const ArchiveButton = ({ id }) => (
    <BaseButton
      icon={<FiArchive className="text-sky-600" />}
      onClick={(event) => {
        event.stopPropagation()
        archiveNoteHandler(id)
      }}
    />
  )

  ArchiveButton.propTypes = {
    id: PropTypes.string.isRequired
  }

  const UnArchiveButton = ({ id }) => (
    <BaseButton
      icon={<AiOutlineUndo className="text-sky-600" />}
      onClick={(event) => {
        event.stopPropagation()
        unArchiveNoteHandler(id)
      }}
      id={id}
    />
  )

  UnArchiveButton.propTypes = {
    id: PropTypes.string.isRequired
  }

  return (
    <Card className="mt-10 lg:max-w-5xl mx-auto">
      <Alert ensurance={showError} message={error} closeHandler={closeError} />
      <div className="flex flex-wrap gap-6 items-start justify-center">
        {Object.keys(notes).length > 0
          ? (
              notes.map((item) => {
                return (
              <Card
                className="w-full md:w-1/3 lg:w-1/2 md:max-w-md border-t-4 border-t-zinc-700 transition-all delay-100 hover:cursor-pointer hover:shadow-lg dark:border-t-slate-200"
                key={item.id}
                onClick={() => openDetails(item.id)}
              >
                <Typography className="font-semibold text-center dark:text-slate-200">
                  {item.title}
                </Typography>
                <hr className="mx-auto w-3/4 my-2" />
                <div className="dark:text-slate-200">
                  {parser(
                    item.body.length > 200 ? item.body.substring(0, 200).concat('...') : item.body
                  )}
                </div>
                <div className="flex gap-3 mt-3 mb-1">
                  {item.archived
                    ? (
                    <UnArchiveButton id={item.id} />
                      )
                    : (
                    <ArchiveButton id={item.id} />
                      )}
                  <button
                    className="p-2 rounded bg-rose-200 transition-all delay-100 hover:shadow"
                    onClick={(event) => deleteNoteHandler(event, item.id)}
                  >
                    <FiTrash className="text-rose-600" />
                  </button>
                </div>
              </Card>
                )
              })
            )
          : (
          <Alert
            ensurance={showAlert}
            message={langString[lang].noData}
            closeHandler={toggleAlert}
          />
            )}
      </div>
    </Card>
  )
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  refetch: PropTypes.func.isRequired
}
