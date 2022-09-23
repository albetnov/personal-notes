import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function List ({ children, to }) {
  const location = useLocation()
  let isActive = false

  if (location.pathname === to) {
    isActive = true
  }

  const classes = `rounded-lg p-3 dark:text-slate-200 ${
    isActive && 'bg-zinc-700 text-white font-semibold shadow-lg dark:bg-zinc-500'
  }`

  return (
    <li className={classes}>
      <Link
        to={to}
        className="underline__smooth"
      >
        {children}
      </Link>
    </li>
  )
}

List.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}
