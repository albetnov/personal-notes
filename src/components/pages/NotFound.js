import React, { useContext } from 'react'
import LangContext from '../../store/LangContext'
import langString from '../../utilities/langString'
import Typography from '../UI/Typography'

export default function NotFound () {
  const { lang } = useContext(LangContext)

  return (
    <div className="flex justify-center items-center flex-col gap-3 h-screen">
      <Typography variant="heading1">404</Typography>
      <Typography variant="heading3" className="text-2xl dark:text-slate-200">
        {langString[lang].notFound}
      </Typography>
    </div>
  )
}
