import React from 'react'
import App from './App'
import { ThemeProvider } from './context/ThemeContext'

const Prime = () => {
  return (
    <>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </>
  )
}

export default Prime
