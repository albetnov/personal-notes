import { useEffect, useState } from 'react'

const useAlert = () => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('')
    }, 2500)

    return () => {
      clearTimeout(timer)
    }
  }, [message])

  const closeAlertHandler = () => {
    setMessage('')
  }

  const ensurance = !!(message && message.trim().length > 0)

  return [message, setMessage, ensurance, closeAlertHandler]
}

export default useAlert
