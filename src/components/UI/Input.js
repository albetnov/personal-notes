import React, { forwardRef } from 'react'
import Typography from './Typography'
import PropTypes from 'prop-types'

const Input = forwardRef(
  (
    {
      label,
      classes = { label: '', input: '', inputError: '', extend: '', inputExtend: '' },
      id,
      placeholder,
      type = 'text',
      onChange,
      value,
      error,
      errorMessage,
      onBlur
    },
    ref
  ) => {
    const labelClass = classes.label
      ? classes.label
      : `block text-zinc-700 dark:text-slate-200 mb-2 ${classes.extend}`
    const inputClass = classes.input
      ? classes.input
      : `rounded-lg bg-slate-100 py-3 px-2 w-full border border-white dark:border-transparent  focus:outline-none focus:border-zinc-500 dark:focus:border-slate-200 text-zinc-700 ${
          classes.extend
        } ${classes.inputExtend ? classes.inputExtend : 'dark:bg-zinc-600 dark:text-slate-300'}`

    const inputClassError = classes.inputError
      ? classes.inputError
      : `rounded-lg bg-slate-100 py-3 px-2 w-full border border-rose-500 focus:outline-none dark:border-rose-300 dark:text-rose-500 focus:border-rose-400 text-rose-600 ${
          classes.extend
        } ${classes.inputExtend ? classes.inputExtend : 'dark:bg-zinc-600'}`

    const errorMessageClass = classes.errorMessage
      ? classes.errorMessage
      : `text-rose-500 mt-1 ${classes.extend}`

    return (
      <>
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          id={id}
          placeholder={placeholder}
          className={error ? inputClassError : inputClass}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
        {error && <Typography className={errorMessageClass}>{errorMessage}</Typography>}
      </>
    )
  }
)

Input.displayName = 'Input'

Input.propTypes = {
  label: PropTypes.string,
  classes: PropTypes.object,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  onBlur: PropTypes.func
}

export default Input
