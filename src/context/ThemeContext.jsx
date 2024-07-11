/* eslint-disable import/no-duplicates */
import { useState } from 'react'
import { createContext } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider ({ children }) {
  const [tema, setTema] = useState(1)

  const handleThemeOne = () => {
    setTema(1)
  }
  const handleThemeTwo = () => {
    setTema(2)
  }
  const handleThemeThree = () => {
    setTema(3)
  }
  return (
    <ThemeContext.Provider value={{
      tema,
      handleThemeOne,
      handleThemeTwo,
      handleThemeThree
    }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
