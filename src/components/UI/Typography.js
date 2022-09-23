import React from 'react'
import PropTypes from 'prop-types'
export default function Typography ({ className = '', children, variant }) {
  const baseColor = 'text-zinc-700 dark:text-slate-100'

  switch (variant) {
    case 'heading1':
      return <h1 className={`text-6xl font-bold ${className || baseColor}`}>{children}</h1>
    case 'heading2':
      return <h2 className={`text-4xl font-bold ${className || baseColor}`}>{children}</h2>
    case 'heading3':
      return <h3 className={`text-3xl font-bold ${className || baseColor}`}>{children}</h3>
    case 'heading4':
      return <h4 className={`text-2xl font-bold ${className || baseColor}`}>{children}</h4>
    case 'heading5':
      return <h5 className={`text-xl font-semibold  ${className || baseColor}`}>{children}</h5>
    default:
      return <p className={`text-base ${className || baseColor}`}>{children}</p>
  }
}

Typography.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}
