import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ClearButton = ({ children, handleInput }) => {
  const { tema } = useContext(ThemeContext)
  return (
    <button
      id='clear'
      className={
        `${tema === 1 ? 'clear__btn-theme1' : ''}
        ${tema === 2 ? 'clear__btn-theme2' : ''}
        ${tema === 3 ? 'clear__btn-theme3' : ''}`
      }
      onClick={() => handleInput(children)}
    >
      {children}
    </button>
  )
}

export default ClearButton
