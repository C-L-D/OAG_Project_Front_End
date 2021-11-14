import React from 'react'
import './ActivitiesList.module.css'
import { v4 as uuidv4 } from 'uuid'
import ActivitiesListItem from '../ActivitiesListItem'
import plane from '../../components//App//purepng.com-airplaneairplanevehiclestransportjetplanetravelskyaircraft-981525069349twm8y.png'

// import uuid to pass key to mapped list items
// Component ActivitiesList will take in a list array.
// import the list item component
// Map over the list array and pass down acivityText and activitySupplier and key.

const ActivitiesList = ({ activitiesList }) => (
  <div className='activitiesList' data-testid='ActivitiesList'>
    <img className='plane' src={plane} alt='British Airways airplane' />
    <ul className='actlist'>
      {activitiesList.map((item) => {
        return (
          <div>
            <ActivitiesListItem
              key={uuidv4()}
              activityText={item.activity}
              activitySupplier={item.supplier}
            />
          </div>
        )
      })}
    </ul>
  </div>
)

export default ActivitiesList
