import React, { useContext, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import LangContext from '../../../store/LangContext'
import langString from '../../../utilities/langString'
import PropTypes from 'prop-types'

export default function Search ({ onChange, value }) {
  const { lang } = useContext(LangContext)
  const [clicked, setClicked] = useState(false)

  return (
    <div
      className={`flex items-center bg-slate-100 border p-3 rounded-full w-full dark:bg-zinc-500 ${
        clicked ? 'border-zinc-400 dark:border-white' : 'border-white dark:border-slate-200'
      }`}
      onClick={() => setClicked(true)}
      onBlur={() => setClicked(false)}
    >
      <FiSearch className="dark:text-white" />
      <input
        placeholder={langString[lang].topBarSearch}
        onChange={onChange}
        value={value}
        className="bg-transparent focus:outline-none ml-3 w-full text-slate-700 dark:text-slate-100"
      />
    </div>
  )
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}
