import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const EqualBtn = ({ children, handleInput }) => {
  const { tema } = useContext(ThemeContext)
  return (
    <button
      id='equals'
      className={
        `${tema === 1 ? 'equal__btn-theme1' : ''}
        ${tema === 2 ? 'equal__btn-theme2' : ''}
        ${tema === 3 ? 'equal__btn-theme3' : ''}`
      }
      onClick={() => handleInput(children)}
    >
      {children}
    </button>
  )
}

export default EqualBtn
