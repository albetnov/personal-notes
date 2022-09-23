import React, { memo, useContext } from 'react'
import { FiLogOut, FiMenu } from 'react-icons/fi'
import AuthContext from '../../store/AuthContext'
import BorderIconButton from '../UI/BorderIconButton'
import Search from './UI/Search'
import SwitchLang from './UI/SwitchLang'
import ToggleTheme from './UI/ToggleTheme'
import PropTypes from 'prop-types'
import usePopOver from '../../hooks/usePopOver'

const Topbar = ({ onSearch, search }) => {
  const [showPop, togglePopOver] = usePopOver()
  const { logout } = useContext(AuthContext)

  const searchChangeHandler = (event) => {
    onSearch(event.target.value)
  }

  return (
    <div className="w-full shadow rounded-2xl py-3 px-7 flex items-center dark:bg-zinc-600 dark:shadow-lg">
      <Search onChange={searchChangeHandler} value={search} />
      <div className="ml-3 relative">
        <div className="hidden md:flex justify-around gap-3">
          <SwitchLang className="scale-150 sm:scale-50" />
          <ToggleTheme />
        </div>
        <div className="block md:hidden">
          <BorderIconButton onClick={togglePopOver}>
            <FiMenu />
          </BorderIconButton>
        </div>
        {showPop && (
          <div onClick={(event) => event.stopPropagation()} className="md:hidden absolute z-10 animate__fade top-10 bg-white rounded-lg dark:bg-zinc-500 shadow p-5 gap-5 flex justify-center items-center flex-col">
            <SwitchLang className="scale-150" />
            <hr className='w-full border-t-2 border-zinc-600 dark:border-slate-200' />
            <ToggleTheme />
            <hr className='w-full border-t-2 border-zinc-600 dark:border-slate-200' />
            <button onClick={logout}>
              <FiLogOut className="dark:text-slate-200" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

Topbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired
}

export default memo(Topbar)
