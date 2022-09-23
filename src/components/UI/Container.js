import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import SidebarContext from '../../store/SidebarContext'

export default function Container ({ children, className = '' }) {
  const { width } = useContext(SidebarContext)

  const classes = `container max-w-6xl xl:max-w-[85%] mx-auto my-3 pr-3 ${className}`

  return <div className={classes} style={{ marginLeft: `${width}px`, width: `calc(100% - ${width}px)` }}>{children}</div>
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}
