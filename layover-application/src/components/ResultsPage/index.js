import React from 'react'
import ActivitiesList from '../ActivitiesList'
import './ResultsPage.module.css'
import Sidebar from '../Sidebar'

//pass down list props
// render activities list,

const ResultsPage = ({ activitiesList, layoverData, formData }) => (
  <div className='resultsPage' data-testid='ResultsPage'>
    <Sidebar layoverData={layoverData} />
    <ActivitiesList activitiesList={activitiesList} />
  </div>
)

export default ResultsPage
