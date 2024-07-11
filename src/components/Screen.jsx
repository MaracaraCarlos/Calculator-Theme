import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Screen = ({ input, output }) => {
  const { tema } = useContext(ThemeContext)

  return (
    <div
      id='scren'
      className={`input_container ${tema === 1 ? 'screen__theme1' : ''} ${tema === 2 ? 'screen__theme2' : ''} ${tema === 3 ? 'screen__theme3' : ''}`}
    >
      <span className='result'>{output}</span>
      <span id='display' className='input'>{input}</span>
    </div>
  )
}

export default Screen
