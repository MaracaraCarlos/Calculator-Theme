import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { setId } from '../helpers/helper'

const Button = ({ children, handleInput }) => {
  const { tema } = useContext(ThemeContext)
  return (
    <button
      id={`${setId(children)}`}
      className={
        `${tema === 1 ? 'btns__theme1' : ''}
        ${tema === 2 ? 'btns__theme2' : ''}
        ${tema === 3 ? 'btns__theme3' : ''}`.trimEnd()
      }
      onClick={() => handleInput(children)}
    >
      {children}
    </button>
  )
}

export default Button
