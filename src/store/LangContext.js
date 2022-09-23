import { createContext } from 'react'

const LangContext = createContext({
  lang: '',
  toggleLang: () => {}
})

export default LangContext
