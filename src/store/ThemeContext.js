import { createContext } from 'react'

const ThemeContext = createContext({
  mode: '',
  toggleMode: () => {}
})

export default ThemeContext
