import React, { useContext } from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import { FiArrowRight } from 'react-icons/fi'
import useForm from '../../hooks/useForm'
import BaseAuth from '../auth/BaseAuth'
import { login } from '../../utilities/api'
import useAlert from '../../hooks/useAlert'
import Alert from '../UI/Alert'

import AuthContext from '../../store/AuthContext'
import LangContext from '../../store/LangContext'
import langString from '../../utilities/langString'

export default function Login () {
  const [alert, setAlert, showAlert, closeAlert] = useAlert()
  const ctx = useContext(AuthContext)
  const { lang } = useContext(LangContext)

  const {
    register: emailRegister,
    isValid: emailValid,
    onSubmit: emailSubmitHandler,
    reset: resetEmail,
    state: email
  } = useForm((value) => value.includes('@'))

  const {
    register: passwordRegister,
    isValid: passwordValid,
    onSubmit: passwordSubmitHandler,
    reset: resetPassword,
    state: password
  } = useForm((value) => value.trim().length > 8)

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    if (!emailValid || !passwordValid) {
      emailSubmitHandler()
      passwordSubmitHandler()
      return
    }

    const { error, data } = await login({ email, password })

    if (error) {
      if (data === 'Password is wrong' || data === 'Email not found') {
        setAlert(langString[lang].auth.login.invalidCred)
        return
      }
      setAlert(data ?? langString[lang].error.serverErr)
      return
    }

    const attempt = await ctx.login(data.accessToken)

    if (!attempt) {
      setAlert(langString[lang].error.serverErr)
      return
    }

    resetEmail()
    resetPassword()
  }

  return (
    <BaseAuth
      headingText={langString[lang].auth.login.title}
      linkText={langString[lang].auth.login.links.title}
      route="/register"
      routeName={langString[lang].auth.login.links.link}
    >
      <Alert ensurance={showAlert} message={alert} closeHandler={closeAlert} />
      <form onSubmit={onSubmitHandler} className="mt-5">
        <Input
          label={langString[lang].auth.login.email.label}
          placeholder={langString[lang].auth.login.email.placeholder}
          type="email"
          id="email"
          {...emailRegister(langString[lang].auth.login.email.error)}
        />
        <Input
          label={langString[lang].auth.login.password.label}
          placeholder={langString[lang].auth.login.password.placeholder}
          type="password"
          id="password"
          {...passwordRegister(langString[lang].auth.login.password.error)}
        />
        <Button className="mt-5 w-full group dark:bg-zinc-600" type="submit">
          {langString[lang].auth.login.action}
          <FiArrowRight className="inline ml-1 transition-transform delay-100 group-hover:translate-x-2" />
        </Button>
      </form>
    </BaseAuth>
  )
}
