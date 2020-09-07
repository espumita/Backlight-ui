import React, { useEffect } from 'react'
import './dashboardStyle.css'
import { useSelector, useDispatch } from 'react-redux'
import { createLoadOpenApiConfigurationAction } from '../../actions/loadOpenApiConfiguration'
import { isApiConfiguredSelector, apiConfigurationSelector } from '../../selectors/configSelectors'
import openApiClient from '../../clients/openApiClient'

const Dashboard = () => {
  const isApiConfigured = useSelector(isApiConfiguredSelector)
  const apiConfiguration = useSelector(apiConfigurationSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isApiConfigured) openApiClient.loadOpenApiConfiguration(dispatch, createLoadOpenApiConfigurationAction)
  })
  return (
    <div className="dashboard">
    <div style={{paddingTop: '100px'}}>
        {JSON.stringify(apiConfiguration)}
    </div>
    </div>
  )
}

export default Dashboard
