import React, { useContext } from 'react'
import { FiUserPlus } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import useAlert from '../../hooks/useAlert'
import useForm from '../../hooks/useForm'
import LangContext from '../../store/LangContext'
import { register } from '../../utilities/api'
import langString from '../../utilities/langString'
import BaseAuth from '../auth/BaseAuth'
import Alert from '../UI/Alert'
import Button from '../UI/Button'
import Input from '../UI/Input'

export default function Register () {
  const { lang } = useContext(LangContext)
  const [alert, setAlert, showAlert, closeAlert] = useAlert()
  const navigate = useNavigate()

  const {
    register: emailRegister,
    isValid: emailValid,
    reset: emailReset,
    onSubmit: emailSubmit,
    state: email
  } = useForm((value) => value.includes('@'))

  const {
    register: nameRegister,
    isValid: nameValid,
    reset: nameReset,
    onSubmit: nameSubmit,
    state: name
  } = useForm()

  const {
    register: passwordRegister,
    isValid: passwordValid,
    reset: passwordReset,
    onSubmit: passwordSubmit,
    state: password
  } = useForm((value) => value.trim().length > 8)

  const {
    register: passwordConfirmRegister,
    reset: passwordConfirmReset,
    onSubmit: passwordConfirmSubmit
  } = useForm((value) => value === password)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    const latest = passwordConfirmSubmit((value) => value === password)

    if (!emailValid || !nameValid || !passwordValid || !latest) {
      emailSubmit()
      nameSubmit()
      passwordSubmit()
      passwordConfirmSubmit()
      return
    }

    const { error } = await register({ name, email, password })

    if (error) {
      setAlert(langString[lang].error.serverErr)
      return
    }

    emailReset()
    nameReset()
    passwordReset()
    passwordConfirmReset()

    navigate('/')
  }

  return (
    <BaseAuth
      headingText={langString[lang].auth.register.title}
      linkText={langString[lang].auth.register.links.title}
      route="/"
      routeName={langString[lang].auth.register.links.link}
    >
      <Alert ensurance={showAlert} message={alert} closeHandler={closeAlert} />
      <form onSubmit={onSubmitHandler} className="mt-5">
        <Input
          label={langString[lang].auth.register.name.label}
          type="text"
          id="name"
          placeholder={langString[lang].auth.register.name.placeholder}
          {...nameRegister(langString[lang].auth.register.name.error)}
        />
        <Input
          label={langString[lang].auth.register.email.label}
          type="email"
          id="email"
          placeholder={langString[lang].auth.register.email.placeholder}
          {...emailRegister(langString[lang].auth.register.email.error)}
        />
        <Input
          label={langString[lang].auth.register.password.label}
          type="password"
          id="password"
          placeholder={langString[lang].auth.register.password.placeholder}
          {...passwordRegister(langString[lang].auth.register.password.error)}
        />
        <Input
          label={langString[lang].auth.register.confirmPassword.label}
          type="password"
          id="confirmPassword"
          placeholder={langString[lang].auth.register.confirmPassword.placeholder}
          {...passwordConfirmRegister(langString[lang].auth.register.confirmPassword.error)}
        />
        <Button className="mt-5 w-full group dark:bg-zinc-600" type="submit">
          {langString[lang].auth.register.action}
          <FiUserPlus className="inline ml-1 transition-transform delay-100 group-hover:scale-110" />
        </Button>
      </form>
    </BaseAuth>
  )
}
