import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ onClick, children, type, className = '', disabled }) => {
  const classes = `bg-zinc-700 py-3 px-2 text-slate-100 rounded-lg font-semibold transition-all delay-100 hover:shadow-lg active:opacity-80 ${
    className || 'dark:bg-zinc-600'
  }`

  return (
    <button className={classes} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default Button
