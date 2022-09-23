import React, { useContext, useState } from 'react'
import { FiSettings, FiLogOut } from 'react-icons/fi'
import List from './UI/List'
import BorderIconButton from '../UI/BorderIconButton'
import Typography from '../UI/Typography'

import SwitchLang from '../topbar/UI/SwitchLang'
import ToggleTheme from '../topbar/UI/ToggleTheme'
import { MdNotes } from 'react-icons/md'
import langString from '../../utilities/langString'
import LangContext from '../../store/LangContext'
import PropTypes from 'prop-types'

export default function LargeSidebar ({ userName, logout }) {
  const { lang } = useContext(LangContext)
  const [popOver, setPopOver] = useState(false)

  const togglePopOver = () => {
    setPopOver((prevValue) => !prevValue)
  }

  return (
    <div className="h-full hidden sm:flex flex-col justify-between pb-10">
      <div className="flex items-center gap-5 mx-auto">
        <MdNotes className="w-5 h-5 scale-150 text-zinc-700 dark:text-slate-200" />
        <Typography variant="heading4" className="font-sofia dark:text-slate-200">
          Notes
        </Typography>
      </div>
      <ul className="-mt-10 flex flex-col gap-3">
        <List to="/">{langString[lang].sidebar.home}</List>
        <List to="/notes/archived">{langString[lang].sidebar.archived}</List>
        <List to="/note/create">{langString[lang].sidebar.create}</List>
      </ul>
      <div>
        <img
          src="https://source.unsplash.com/100x100?potrait"
          alt="profile"
          className="rounded-full mx-auto my-5"
        />
        <Typography className="font-bold text-lg text-center dark:text-slate-200">
          {userName}
        </Typography>
        <Typography className="text-center text-slate-500 text-base mb-3 dark:text-slate-300">
          @albetnov
        </Typography>
        <div className="relative flex gap-3 justify-center">
          {popOver && (
            <div className="absolute flex flex-col rounded-full p-2 shadow-lg left-7 -top-24 animate__fade bg-white gap-6 items-center dark:bg-zinc-600">
              <SwitchLang className="w-7" />
              <ToggleTheme />
            </div>
          )}
          <BorderIconButton onClick={togglePopOver}>
            <FiSettings />
          </BorderIconButton>
          <BorderIconButton onClick={logout}>
            <FiLogOut />
          </BorderIconButton>
        </div>
      </div>
    </div>
  )
}

LargeSidebar.propTypes = {
  userName: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
}
