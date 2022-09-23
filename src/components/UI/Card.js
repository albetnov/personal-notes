import React from 'react'
import PropTypes from 'prop-types'

export default function Card ({ className = '', children, onClick }) {
  const classes = `rounded-md border shadow py-3 px-5 dark:bg-zinc-600 dark:shadow-lg ${
    className || 'border-zinc-300'
  }`
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}
