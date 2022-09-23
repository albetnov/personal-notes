import React from 'react'
import SwitchLang from '../topbar/UI/SwitchLang'
import ToggleTheme from '../topbar/UI/ToggleTheme'
import Navigate from '../UI/Navigate'
import Typography from '../UI/Typography'
import PropTypes from 'prop-types'

export default function BaseAuth ({ children, headingText, linkText, route, routeName }) {
  return (
    <div className="sm:flex sm:flex-wrap w-screen">
      <div className="w-0 sm:w-1/2 hidden sm:block">
        <img
          src="https://source.unsplash.com/1920x1080?travel"
          className="h-screen object-cover"
          alt="Travel"
        />
      </div>
      <div className="h-[90vh] sm:h-screen sm:w-1/2 flex justify-center items-center">
        <div className="mx-auto -mt-16 p-3 w-3/4">
          <Typography className="text-center dark:text-slate-100" variant="heading3">
            {headingText}
          </Typography>
          {children}
          <Typography className="text-center mt-3 dark:text-slate-200">
            {linkText} <Navigate to={route}>{routeName}</Navigate>
          </Typography>
        </div>
        <div className="absolute right-10 bottom-5 p-3 bg-zinc-700 rounded-full flex gap-5 items-center dark:bg-zinc-600">
          <SwitchLang className="w-7" />
          <ToggleTheme className="text-white" />
        </div>
      </div>
    </div>
  )
}

BaseAuth.propTypes = {
  headingText: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}
