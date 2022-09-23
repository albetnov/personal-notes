import { createContext } from 'react'

const SidebarContext = createContext({
  width: '',
  setWidth: () => {}
})

export default SidebarContext
