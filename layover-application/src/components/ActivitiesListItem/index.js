import React from 'react'
import './ActivitiesListItem.module.css'

const ActivitiesListItem = ({ activityText, activitySupplier }) => (
  <div className='activitiesListItem' data-testid='ActivitiesListItem'>
    <p className='planeP'>
      <li style={{ fontWeight: 'bold' }}>
        {activityText}
        <p style={{ fontWeight: 'normal' }}>{activitySupplier}</p>
      </li>
    </p>
  </div>
)

export default ActivitiesListItem
