import React from 'react'
import Input from '../Input'
import Button from '../Button'

const Form = ({ buttonOnClick, formData, onChange }) => (
  <div className='Form' data-testid='Form'>
    <Input
      id='flight1NumberInput'
      type={'text'}
      labelText={'Flight 1'}
      placeholderText={'Flight number:'}
      onChange={onChange}
      text={formData.flight1Number}
      formFieldKey='flight1Number'
    />
    <Input
      id='flight1DateInput'
      type={'date'}
      labelText={'Date Flight 1'}
      placeholderText={'Date'}
      onChange={onChange}
      text={formData.flight1Date}
      formFieldKey='flight1Date'
    />

    <Input
      id='flight2NumberInput'
      type={'text'}
      labelText={'Flight 2'}
      placeholderText={'Flight number:'}
      onChange={onChange}
      text={formData.flight2Number}
      formFieldKey='flight2Number'
    />
    <Input
      id='flight2DateInput'
      type={'date'}
      labelText={'Date Flight 2'}
      placeholderText={'Date'}
      onChange={onChange}
      text={formData.flight2Date}
      formFieldKey='flight2Date'
    />
    <Button onClick={buttonOnClick} buttonText='Submit' />
  </div>
)

Form.propTypes = {}

Form.defaultProps = {}

export default Form
