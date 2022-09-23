import React, { useContext } from 'react'
import AuthContext from '../../store/AuthContext'
import LargeSidebar from './LargeSidebar'
import SmallSidebar from './SmallSidebar'

export default function Sidebar () {
  const { isLoggedIn, userName, logout } = useContext(AuthContext)

  if (isLoggedIn) {
    return (
      <header className="w-full max-w-fit">
        <nav className="text-zinc-700 z-10 fixed w-fit px-3 h-screen sm:py-5 sm:px-10">
          <SmallSidebar userName={userName} logout={logout} />
          <LargeSidebar userName={userName} logout={logout} />
        </nav>
      </header>
    )
  } else {
    return <></>
  }
}
