import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const DeleteBtn = ({ children, handleInput }) => {
  const { tema } = useContext(ThemeContext)
  return (
    <button
      id='delete'
      className={
        `${tema === 1 ? 'delete__btn-theme1' : ''}
        ${tema === 2 ? 'delete__btn-theme2' : ''}
        ${tema === 3 ? 'delete__btn-theme3' : ''}`
      }
      onClick={() => handleInput(children)}
    >
      {children}
    </button>
  )
}

export default DeleteBtn
