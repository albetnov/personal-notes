import React from 'react'
import PropTypes from 'prop-types'

export default function DashboardCardIconHolder ({ className, children }) {
  return <div className={`p-3 rounded-lg ${className}`}>{children}</div>
}

DashboardCardIconHolder.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}
