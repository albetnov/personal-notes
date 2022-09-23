import React from 'react'
import Typography from './Typography'
import { FiX } from 'react-icons/fi'
import PropTypes from 'prop-types'

export default function Alert ({
  ensurance,
  message,
  classes = { alert: '', text: '' },
  closeHandler
}) {
  const alertClass = `font-semibold rounded-lg my-3 p-3 flex items-center justify-between ${
    classes.alert ? classes.alert : 'bg-rose-300 text-red-600'
  }`
  const textClass = classes.text ? classes.text : 'text-red-500'
  if (!ensurance) {
    return <></>
  }

  return (
    <div className={alertClass}>
      <Typography className={textClass}>{message}</Typography>
      <FiX onClick={closeHandler} className="hover:cursor-pointer" />
    </div>
  )
}

Alert.propTypes = {
  ensurance: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  classes: PropTypes.object,
  closeHandler: PropTypes.func.isRequired
}
