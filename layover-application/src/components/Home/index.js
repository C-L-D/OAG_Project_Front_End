import React from 'react'
import Form from '../Form'

const Home = ({ submitButtonOnClick, formData, onFormChange }) => (
  <div className='homepage' data-testid='Home'>
    <Form
      buttonOnClick={submitButtonOnClick}
      formData={formData}
      onChange={onFormChange}
    />
  </div>
)

export default Home
