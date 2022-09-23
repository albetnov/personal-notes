import React, { useContext } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import ThemeContext from '../../../store/ThemeContext'
import PropTypes from 'prop-types'

export default function ToggleTheme ({ className }) {
  const { mode, toggleMode } = useContext(ThemeContext)

  const classes = `scale-150 ${className || 'text-zinc-600 dark:text-slate-200'}`

  return (
    <button onClick={toggleMode}>
      {mode === 'light' ? <FiMoon className={classes} /> : <FiSun className={classes} />}
    </button>
  )
}

ToggleTheme.propTypes = {
  className: PropTypes.string
}
