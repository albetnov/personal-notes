import React, { useContext } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import LangContext from '../../store/LangContext'
import langString from '../../utilities/langString'
import Typography from './Typography'

export default function SplashScreen () {
  const { lang } = useContext(LangContext)

  return (
    <div className="w-full h-[95vh] flex flex-col gap-3 items-center justify-center">
      <AiOutlineLoading3Quarters className="text-6xl animate-spin dark:text-white" />
      <Typography variant="heading2" className="text-center animate-pulse dark:text-slate-200">
        {langString[lang].loading}
      </Typography>
    </div>
  )
}
