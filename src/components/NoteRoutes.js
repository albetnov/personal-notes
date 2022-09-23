import React, { useContext } from 'react'
import { Routes } from 'react-router-dom'
import AuthContext from '../store/AuthContext'
import authedRoutes from './routes/AuthedRoutes'
import authRoutes from './routes/AuthRoutes'
import SplashScreen from './UI/SplashScreen'

export default function NoteRoutes () {
  const { isLoggedIn, initializing } = useContext(AuthContext)

  if (initializing) {
    return <SplashScreen />
  }

  return <Routes>{isLoggedIn ? authedRoutes : authRoutes}</Routes>
}
