import { useCallback, useState } from 'react'

export default function useForm (condition = null) {
  const [inputState, setInputState] = useState('')
  const [isTouched, setIsTouched] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const inputChangeHandler = useCallback(
    (event) => {
      setInputState(event.target.value)
      let rules = event.target.value.trim().length > 0

      if (condition) {
        rules = condition(event.target.value)
      }

      if (rules) {
        setIsValid(true)
      } else {
        setIsValid(false)
      }
    },
    [condition]
  )

  const inputBlurHandler = useCallback(() => {
    setIsTouched(true)
  }, [])

  const onSubmitHandler = useCallback(
    (reValidate = false) => {
      if (reValidate) {
        if (reValidate(inputState)) {
          setIsValid(true)
          return true
        }
        setIsValid(false)
        return false
      }
      setIsSubmitted(true)
    },
    [inputState]
  )

  const resetHandler = useCallback(() => {
    setInputState('')
    setIsTouched(false)
    setIsValid(false)
    setIsSubmitted(false)
  }, [])

  const isError = (!isValid && isTouched) || (!isValid && isSubmitted)

  const register = (errorMessage) => {
    return {
      value: inputState,
      onChange: inputChangeHandler,
      onBlur: inputBlurHandler,
      error: isError,
      errorMessage
    }
  }

  return {
    state: inputState,
    onChange: inputChangeHandler,
    onBlur: inputBlurHandler,
    isError,
    isValid,
    onSubmit: onSubmitHandler,
    register,
    reset: resetHandler
  }
}
