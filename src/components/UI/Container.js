import React from 'react'
import PropTypes from 'prop-types'

export default function Container ({ children, className = '' }) {
  const classes = `container max-w-6xl xl:max-w-[85%] mx-auto my-3 pr-3 pl-24 sm:pl-48 md:pl-44 xl:pl-36 ${className}`

  return <div className={classes}>{children}</div>
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}
