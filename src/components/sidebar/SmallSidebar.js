import React, { useContext, useState } from 'react'
import {
  FiArrowRightCircle,
  FiHome,
  FiArchive,
  FiPlusCircle,
  FiSettings,
  FiChevronUp,
  FiLogOut
} from 'react-icons/fi'
import LangContext from '../../store/LangContext'
import langString from '../../utilities/langString'
import SwitchLang from '../topbar/UI/SwitchLang'
import ToggleTheme from '../topbar/UI/ToggleTheme'
import Typography from '../UI/Typography'
import SmallList from './UI/SmallList'
import PropTypes from 'prop-types'

export default function SmallSidebar ({ userName, logout }) {
  const { lang } = useContext(LangContext)
  const [expand, setExpand] = useState(false)
  const [dropDown, setDropDown] = useState(false)

  const toggleDropDown = () => {
    if (!expand) {
      setExpand(true)
    }
    setTimeout(() => {
      setDropDown((prevValue) => !prevValue)
    })
  }

  const toggleExpand = () => {
    if (dropDown) {
      setDropDown(false)
    }

    setTimeout(() => {
      setExpand((prevValue) => !prevValue)
    })
  }

  return (
    <div
      className={`sm:hidden max-h-[95%] bg-zinc-700 dark:bg-zinc-600 h-full rounded-lg py-3 px-2 flex flex-col gap-5 overflow-y-auto items-center transition-all delay-100 animate__it ${
        expand ? 'w-44' : ''
      }`}
    >
      <div>
        <img
          src="https://source.unsplash.com/50x50?potrait"
          className="rounded-full mb-3 mx-auto"
          alt="profile"
        />
        <Typography className={`text-white ${!expand && 'hidden'}`}>{userName}</Typography>
      </div>
      <button
        className={`bg-white shadow-lg dark:shadow rounded-full p-3 absolute font-bold top-1/2 transition-all delay-100 ${
          expand ? 'rotate-180 left-40' : 'left-12'
        }`}
        onClick={toggleExpand}
      >
        <FiArrowRightCircle className="text-lg" />
      </button>
      <SmallList
        Icon={FiHome}
        isExpanded={expand}
        isActive={true}
        text={langString[lang].sidebar.home}
        to="/"
      />
      <SmallList
        Icon={FiArchive}
        isExpanded={expand}
        text={langString[lang].sidebar.archived}
        to="/notes/archived"
      />
      <SmallList
        Icon={FiPlusCircle}
        isExpanded={expand}
        text={langString[lang].sidebar.create}
        to="/note/create"
      />
      <div
        className={`transition-all delay-100 mt-3 w-full flex flex-col justify-center text-center ${
          dropDown
            ? 'bg-white dark:bg-zinc-500 dark:text-white p-3 rounded-lg'
            : 'text-white items-center'
        }`}
      >
        {expand && dropDown && langString[lang].sidebar.settings}
        {!dropDown
          ? (
          <button onClick={toggleDropDown}>
            <FiSettings className={`${expand ? 'text-white inline mr-2' : 'text-slate-300'}`} />
            {expand && langString[lang].sidebar.settings}
          </button>
            )
          : (
          <>
            <hr className="mt-2 mb-1 border-slate-900" />
            <div className="flex justify-center items-center flex-col gap-3">
              <SwitchLang className="w-10" />
              <hr className="w-full border-zinc-700" />
              <ToggleTheme />
              <hr className="w-full border-zinc-700" />
              <button onClick={logout}>
                <FiLogOut className="rotate-180" />
              </button>
              <button
                onClick={toggleDropDown}
                className="self-end p-2 rounded-full bg-zinc-700 text-white"
              >
                <FiChevronUp />
              </button>
            </div>
          </>
            )}
      </div>
    </div>
  )
}

SmallSidebar.propTypes = {
  userName: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
}
