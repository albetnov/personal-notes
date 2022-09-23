import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Navigate ({ to, children, outer = false, className }) {
  const classes =
    className ||
    'ml-1 text-sky-700 transition-all hover:border-b hover:border-sky-700 delay-100 dark:text-sky-500'

  if (outer) {
    return (
      <a href={to} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} onClick={(event) => event.stopPropagation()} className={classes}>
      {children}
    </Link>
  )
}

Navigate.propTypes = {
  to: PropTypes.string.isRequired,
  outer: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}
