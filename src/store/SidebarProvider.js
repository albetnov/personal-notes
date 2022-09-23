import React, { useState } from 'react'
import SidebarContext from './SidebarContext'
import PropTypes from 'prop-types'

export default function SidebarProvider ({ children }) {
  const [width, setWidth] = useState('')

  return <SidebarContext.Provider value={{ width, setWidth }}>{children}</SidebarContext.Provider>
}

SidebarProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}
