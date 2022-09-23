import React from 'react'
import { useLocation } from 'react-router-dom'
import Navigate from '../../UI/Navigate'
import PropTypes from 'prop-types'

export default function SmallList ({ isExpanded, Icon, text, to }) {
  const location = useLocation()

  let isActive = false
  if (location.pathname === to) {
    isActive = true
  }

  const isExpandedContent = (
    <>
      <Icon className="inline mr-2" />
      {text}
    </>
  )

  const content = <Icon className={`${isActive ? 'text-white' : 'text-slate-300'}`} />

  const classes = isExpanded
    ? `p-3 ${isActive ? 'bg-white dark:bg-slate-100 text-zinc-700' : 'text-white'} rounded-lg`
    : 'p-3'

  return (
    <Navigate className={classes} to={to}>
      {isExpanded ? isExpandedContent : content}
    </Navigate>
  )
}

SmallList.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}
