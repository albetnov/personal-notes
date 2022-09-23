import React from 'react'
import PropTypes from 'prop-types'

export default function BorderIconButton ({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-lg border w-fit transition-all delay-100 hover:shadow hover:border-zinc-400 focus:outline-none active:opacity-80 dark:text-white dark:border-white dark:hover:border-slate-300"
    >
      {children}
    </button>
  )
}

BorderIconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}
