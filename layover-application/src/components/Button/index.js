import React from 'react'

const Button = ({ buttonText, onClick }) => (
  <div className='buttonComponent' data-testid='Button'>
    <button
      className='buttonObject'
      onClick={() => {
        onClick()
      }}
    >
      {buttonText}
    </button>
  </div>
)

export default Button
