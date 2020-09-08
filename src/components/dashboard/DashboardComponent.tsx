import React, { useEffect } from 'react'
import './dashboardStyle.css'
import { useSelector, useDispatch } from 'react-redux'
import { loadOpenApiConfiguration } from '../../actions/loadOpenApiConfiguration'
import { isApiConfiguredSelector, apiConfigurationSelector } from '../../selectors/configSelectors'

const Dashboard = () => {
  const isApiConfigured = useSelector(isApiConfiguredSelector)
  const apiConfiguration = useSelector(apiConfigurationSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isApiConfigured) dispatch(loadOpenApiConfiguration())
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
