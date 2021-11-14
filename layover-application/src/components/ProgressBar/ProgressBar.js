import React from 'react'
import './ProgressBar.module.css'

const ProgressBar = () => (
  <main className='main'>
    <div className='container'>
      <div className='progress-container'>
        <div className='progress'></div>
        <div className='circle active'>1</div>
        <div className='circle'>2</div>
      </div>

      {/* <button className='btn' id='prev' disabled>
        Prev
      </button>
      <button className='btn' id='next'>
        Next
      </button> */}
    </div>
  </main>
)

ProgressBar.propTypes = {}

ProgressBar.defaultProps = {}

export default ProgressBar

// 3 div circles and 2 div bars.
//
//
