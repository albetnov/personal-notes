import React, { useContext, useLayoutEffect, useRef } from 'react'
import AuthContext from '../../store/AuthContext'
import SidebarContext from '../../store/SidebarContext'
import LargeSidebar from './LargeSidebar'
import SmallSidebar from './SmallSidebar'

export default function Sidebar () {
  const { isLoggedIn, userName, logout } = useContext(AuthContext)
  const { setWidth } = useContext(SidebarContext)
  const sidebarRef = useRef()

  useLayoutEffect(() => {
    if (isLoggedIn) {
      setWidth(sidebarRef.current.clientWidth)
    }
  }, [sidebarRef, setWidth, isLoggedIn])

  if (isLoggedIn) {
    return (
      <header className="w-full max-w-fit">
        <nav ref={sidebarRef} className="text-zinc-700 z-10 fixed w-fit px-3 h-screen sm:py-5 sm:px-10">
          <SmallSidebar userName={userName} logout={logout} />
          <LargeSidebar userName={userName} logout={logout} />
        </nav>
      </header>
    )
  } else {
    return <></>
  }
}
