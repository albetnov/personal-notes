import { useState } from 'react'

export default function usePopOver () {
  const [popOver, setPopOver] = useState(false)

  const closePopOver = () => {
    setPopOver(false)
  }

  const togglePopOver = (event) => {
    event.stopPropagation()
    setPopOver((prevValue) => {
      if (!prevValue) {
        window.addEventListener('click', closePopOver, {
          once: true
        })
      }

      return !prevValue
    })
  }

  return [popOver, togglePopOver]
}
