import React, { useReducer } from 'react'
import LangContext from './LangContext'
import PropTypes from 'prop-types'

const defaultLang = localStorage.getItem('lang') ?? 'en'

const langReducer = (state, action) => {
  switch (action.type) {
    case 'ON_TOGGLE': {
      const newLang = state === 'en' ? 'id' : 'en'
      localStorage.setItem('lang', newLang)
      return newLang
    }
    default:
      return defaultLang
  }
}

export default function LangProvider ({ children }) {
  const [lang, dispatchLang] = useReducer(langReducer, defaultLang)

  const toggleLang = (event) => {
    event.stopPropagation()
    dispatchLang({ type: 'ON_TOGGLE' })
  }

  const langContext = {
    lang,
    toggleLang
  }

  return <LangContext.Provider value={langContext}>{children}</LangContext.Provider>
}

LangProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}
