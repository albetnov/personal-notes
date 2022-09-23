import React from 'react'
import { Route } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'

const authRoutes = (
  <>
    <Route path="*" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </>
)

export default authRoutes
