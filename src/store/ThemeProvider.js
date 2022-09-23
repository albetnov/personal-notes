import React, { useEffect, useReducer } from 'react'
import ThemeContext from './ThemeContext'
import PropTypes from 'prop-types'

const getInitial = () => {
  if (!('themeMode' in localStorage)) {
    const fromSystem = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (fromSystem) {
      return localStorage.setItem('themeMode', 'dark')
    }
    return localStorage.setItem('themeMode', 'light')
  }
  return localStorage.getItem('themeMode')
}

const modeReducer = (state, action) => {
  switch (action.type) {
    case 'ON_TOGGLE': {
      const newMode = state === 'light' ? 'dark' : 'light'
      localStorage.setItem('themeMode', newMode)
      return newMode
    }
    case 'ON_REPLACE': {
      const newMode = action.mode === 'light' ? 'dark' : 'light'
      localStorage.setItem('themeMode', newMode)
      return newMode
    }
    default:
      return getInitial()
  }
}

export default function ThemeProvider ({ children }) {
  const [mode, dispatchMode] = useReducer(modeReducer, 'light')

  const toggleMode = () => {
    dispatchMode({ type: 'ON_TOGGLE' })
  }

  useEffect(() => {
    dispatchMode({ action: 'ON_REPLACE', mode: getInitial() })
    if (mode === 'dark') {
      document.body.classList.add('dark:bg-zinc-700')
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [mode])

  const themeContext = {
    mode,
    toggleMode
  }

  return <ThemeContext.Provider value={themeContext}>{children}</ThemeContext.Provider>
}

ThemeProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}
