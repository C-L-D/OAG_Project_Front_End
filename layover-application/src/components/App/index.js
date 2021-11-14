import { useEffect, useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'
import Home from '../Home'
import ProgressBar from '../ProgressBar/ProgressBar'
import ResultsPage from '../ResultsPage'
import logo from '../../goalDiggersLogo.png'
import Login from '../Login'

const backendURL = 'https://goaldiggers-backend.herokuapp.com/'

function App() {
  //input box state
  const [formData, setformData] = useState({
    flight1Number: '',
    flight1Date: '',
    flight2Number: '',
    flight2Date: '',
  })

  const [activitiesList, setActivitiesList] = useState([])
  const [clickCount, setClickCount] = useState(0)
  const [layoverData, setlayoverData] = useState({})

  function handleFormChange(formField, state) {
    setformData({ ...formData, [formField]: state })
    console.log(formData)
  }

  useEffect(() => {
    async function getLayoverInfo(queryData) {
      console.log('Calling Layover Data')
      const { flight1Number, flight2Number, flight1Date, flight2Date } =
        queryData
      const response = await fetch(
        //need to update this bit
        `${backendURL}flights?flight1number=${flight1Number}&flight2number=${flight2Number}&flight1date=${flight1Date}&flight2date=${flight2Date}`
      )
      const data = await response.json()
      console.log('setting layover state')
      setlayoverData(data.payload)
      console.log(layoverData)
      return data
    }
    getLayoverInfo(formData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickCount])

  useEffect(() => {
    async function getActivitiesInfo(queryData) {
      console.log(queryData)
      let location = queryData[0]
      console.log('Calling Activities Data')
      const response = await fetch(
        `${backendURL}activities?location=${location}`
      )
      const data = await response.json()
      console.log('setting activities state')
      setActivitiesList(data.payload)
      console.log(activitiesList)
      return activitiesList
    }
    getActivitiesInfo(layoverData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layoverData])

  async function submitButtonOnClick() {
    console.log('Calling button submit')
    setClickCount(clickCount + 1)
    //call the async function to get the data
    // use data to make another request to the activities table.
    console.log('End of submit function')
    // navigate to next page
  }

  return (
    <div className='App'>
      <Router>
        <body>
          <nav className='nav'>
            <img src={logo} alt='logo' />
            <ul>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/results'>Results</NavLink>
              </li>
              <li>
                <NavLink to='/login'>Login</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/results'>
              <ResultsPage
                activitiesList={activitiesList}
                layoverData={layoverData}
              />
            </Route>
            <Route path='/'>
              <Home
                submitButtonOnClick={submitButtonOnClick}
                onFormChange={handleFormChange}
                formData={formData}
              />
              <ProgressBar />
            </Route>
          </Switch>
        </body>
      </Router>
    </div>
  )
}

export default App
