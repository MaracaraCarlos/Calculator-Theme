/* eslint-disable no-unneeded-ternary */
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Header = () => {
  const {
    tema,
    handleThemeOne,
    handleThemeTwo,
    handleThemeThree
  } = useContext(ThemeContext)
  return (
    <header className={`header ${tema === 1 ? 'header_theme1' : ''} ${tema === 2 ? 'header_theme2' : ''} ${tema === 3 ? 'header_theme3' : ''}`}>
      <p className='header_title'>calc</p>
      <div className='theme'>
        <p className='theme_title'>THEME</p>
        <fieldset className='switch'>
          <label className='one' htmlFor='one'>
            <input
              type='radio'
              id='one'
              value='one'
              checked={tema === 1 ? true : false}
              onClick={handleThemeOne}
              onChange={e => {}}
            />
            <div className='layer' />
            <div className='button_radio'><span className='span' /></div>
          </label>
          <label className='two' htmlFor='two'>
            <input
              type='radio'
              id='two'
              value='two'
              checked={tema === 2 ? true : false}
              onClick={handleThemeTwo}
              onChange={e => {}}
            />
            <div className='button_radio'><span className='span' /></div>
          </label>
          <label className='three' htmlFor='three'>
            <input
              type='radio'
              id='three'
              value='three'
              checked={tema === 3 ? true : false}
              onClick={handleThemeThree}
              onChange={e => {}}
            />
            <div className='button_radio'><span className='span' /></div>
          </label>
        </fieldset>
      </div>
    </header>
  )
}

export default Header
