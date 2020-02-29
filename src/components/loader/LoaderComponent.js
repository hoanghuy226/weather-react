import React, {useContext} from 'react'
import './LoaderStyle.scss'
import {ThemeContext} from '../../context/ThemeContext'

const LoaderComponent = ({loaderText}) => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className='flex flex-col w-full justify-center items-center'>
      <div className='spinner'>
        <div className='double-bounce1'></div>
        <div className='double-bounce2'></div>
      </div>
      {loaderText && (
        <div
          className={`text-sm font-light text-${
            theme === 'light' ? 'dark' : 'light'
          }`}>
          {loaderText}
          <span className='text-2xl text-fade'>...</span>
        </div>
      )}
    </div>
  )
}

export default LoaderComponent