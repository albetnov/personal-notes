import React, { useContext } from 'react'
import LangContext from '../../store/LangContext'
import langString from '../../utilities/langString'
import Button from './Button'
import PropTypes from 'prop-types'
import { VscLoading } from 'react-icons/vsc'

export default function LoadingButton ({ className }) {
  const { lang } = useContext(LangContext)

  return (
    <Button disabled className={className}>
      <VscLoading className="inline mr-2 ml-1 animate-spin" />
      {langString[lang].loading}
    </Button>
  )
}

LoadingButton.propTypes = {
  className: PropTypes.string
}
