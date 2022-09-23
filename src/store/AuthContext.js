import { createContext } from 'react'

const AuthContext = createContext({
  userName: '',
  isLoggedIn: false,
  initializing: true,
  login: (accessToken) => {},
  logout: () => {}
})

export default AuthContext
