import React, { useContext } from 'react'
import { FiBook, FiBookmark, FiBookOpen } from 'react-icons/fi'
import LangContext from '../../store/LangContext'
import langString from '../../utilities/langString'
import DashboardCard from '../UI/DashboardCard'
import DashboardCardIconHolder from '../UI/DashboardCardIconHolder'
import PropTypes from 'prop-types'

export default function DashboardCardItem ({ counter }) {
  const { lang } = useContext(LangContext)

  return (
    <>
      <DashboardCard
        icon={
          <DashboardCardIconHolder className="bg-sky-200">
            <FiBookOpen className="text-xl text-sky-600" />
          </DashboardCardIconHolder>
        }
        title={langString[lang].active.all}
        content={counter.all}
      />
      <DashboardCard
        icon={
          <DashboardCardIconHolder className="bg-amber-200">
            <FiBookmark className="text-xl text-amber-600" />
          </DashboardCardIconHolder>
        }
        title={langString[lang].active.active}
        content={counter.active}
      />
      <DashboardCard
        icon={
          <DashboardCardIconHolder className="bg-lime-200">
            <FiBook className="text-xl text-lime-600" />
          </DashboardCardIconHolder>
        }
        title={langString[lang].active.archived}
        content={counter.archived}
      />
    </>
  )
}

DashboardCardItem.propTypes = {
  counter: PropTypes.object.isRequired
}
