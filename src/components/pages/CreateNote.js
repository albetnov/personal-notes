import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Card from '../UI/Card'
import Container from '../UI/Container'
import Input from '../UI/Input'
import Typography from '../UI/Typography'
import useForm from '../../hooks/useForm'
import React, { useContext, useEffect, useState } from 'react'
import Button from '../UI/Button'
import { FiLoader, FiSend } from 'react-icons/fi'
import { addNote } from '../../utilities/api'
import useAlert from '../../hooks/useAlert'
import LangContext from '../../store/LangContext'
import langString from '../../utilities/langString'
import Alert from '../UI/Alert'

import './ckeditor.css'

export default function CreateNote () {
  const { lang } = useContext(LangContext)
  const [alert, setAlert, showAlert, closeAlert] = useAlert()
  const [successAlert, setSuccessAlert, showSuccessAlert, closeSuccessAlert] = useAlert()

  const {
    state: title,
    isValid: titleValid,
    onSubmit: titleSubmit,
    reset: resetTitle,
    register: registerTitle
  } = useForm()

  const {
    state: content,
    isValid: contentValid,
    onSubmit: contentSubmit,
    reset: resetContent,
    onChange: contentChange,
    onBlur: contentBlur,
    isError: contentError
  } = useForm()

  const [ckEditor, setCkEditor] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    console.log('Recalled')
    const editor = (
      <CKEditor
        id={'ck-editor-text'}
        editor={ClassicEditor}
        data={content}
        onChange={(event, editor) => contentChange({ target: { value: editor.getData() } })}
        onBlur={contentBlur}
      />
    )
    setCkEditor(editor)
  }, [content, contentBlur, contentChange])

  const createNoteHandler = async (event) => {
    event.preventDefault()

    if (!titleValid || !contentValid) {
      titleSubmit()
      contentSubmit()
      return
    }

    setIsLoading(true)
    const { error } = await addNote({ title, body: content })
    setIsLoading(false)

    if (error) {
      setAlert(langString[lang].error.serverErr)
      return
    }

    setSuccessAlert(langString[lang].create.success)
    resetTitle()
    resetContent()
  }

  const loadingButton = (
    <Button disabled className="dark:bg-zinc-700">
      <FiLoader className="inline mr-2 ml-1 animate-spin" />
      {langString[lang].loading}
    </Button>
  )

  const createButton = (
    <Button type="submit" className="mt-3 dark:bg-zinc-700 group">
      {langString[lang].create.action}
      <FiSend className="inline ml-2 mr-1 transition-all delay-100 group-hover:translate-x-2 group-hover:-translate-y-1" />
    </Button>
  )

  return (
    <Container className="pt-5">
      <Card className="shadow-md">
        <Typography variant="heading3" className="mt-3 mb-6 dark:text-slate-200">
          {langString[lang].create.title}
        </Typography>
        <Alert ensurance={showAlert} message={alert} closeHandler={closeAlert} />
        <Alert
          ensurance={showSuccessAlert}
          message={successAlert}
          closeHandler={closeSuccessAlert}
          classes={{ alert: 'bg-lime-200 text-lime-600', text: 'text-lime-600' }}
        />
        <form onSubmit={createNoteHandler}>
          <Input
            id="title"
            placeholder={langString[lang].create.inputTitle.placeholder}
            classes={{ extend: 'mb-3', inputExtend: 'dark:bg-zinc-700 dark:text-slate-200' }}
            {...registerTitle(langString[lang].create.inputTitle.error)}
          />
          <div>
            {ckEditor}
            {contentError && (
              <Typography className="text-rose-500 mt-2">
                {langString[lang].create.contentError}
              </Typography>
            )}
          </div>
          {isLoading ? loadingButton : createButton}
        </form>
      </Card>
    </Container>
  )
}
