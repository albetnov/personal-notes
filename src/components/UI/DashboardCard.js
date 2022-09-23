import React from 'react'
import Card from './Card'
import Typography from './Typography'
import PropTypes from 'prop-types'

export default function DashboardCard ({ icon, title, content }) {
  return (
    <Card>
      <div className="flex items-center">
        {icon}
        <Typography variant="heading5" className="inline ml-3 dark:text-slate-200">
          {title}
        </Typography>
      </div>
      <Typography variant="heading4" className="text-center mt-5 dark:text-slate-200">
        {content}
      </Typography>
    </Card>
  )
}

DashboardCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.number.isRequired
}
