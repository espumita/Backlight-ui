import React, { useEffect } from 'react'
import './dashboardStyle.css'
import { useSelector, useDispatch } from 'react-redux'
import { Store } from '../../store/store'
import { createLoadOpenApiConfigurationAction } from '../../actions/loadOpenApiConfiguration'
import axios from 'axios'
import initialState from '../../store/initialState'

const Dashboard = () => {
  const { openApiConfiguration } = useSelector((state: Store) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    if (openApiConfiguration == initialState.openApiConfiguration) {
        loadOpenApiConfiguration(dispatch)
    }
  })
    return (
      <div className="dashboard">
      <div style={{paddingTop: '100px'}}>
          {JSON.stringify(openApiConfiguration)}
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
