import React, { useEffect } from 'react'
import './dashboardStyle.css'
import { useSelector, useDispatch } from 'react-redux'
import { createLoadOpenApiConfigurationAction } from '../../actions/loadOpenApiConfiguration'
import axios from 'axios'
import { isApiConfiguredSelector, apiConfigurationSelector } from '../../selectors/configSelectors'


const Dashboard = () => {
  const isApiConfigured = useSelector(isApiConfiguredSelector)
  const apiConfiguration = useSelector(apiConfigurationSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isApiConfigured) loadOpenApiConfiguration(dispatch)
  })
  return (
    <div className="dashboard">
    <div style={{paddingTop: '100px'}}>
        {JSON.stringify(apiConfiguration)}
    </div>
    </div>
  )
}

function loadOpenApiConfiguration(dispatch : Function){
  axios.get('https://localhost:44349/back/openapi.json')
  .then(result => {
    dispatch(createLoadOpenApiConfigurationAction(result.data))
  })
  .catch(error => {
    console.error(error)
    // dispatch(createLoadOpenApiConfigurationAction(undefined))
  })
}

export default Dashboard
