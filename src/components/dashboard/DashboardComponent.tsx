import React, { useEffect } from 'react'
import './dashboardStyle.css'
import { useSelector, useDispatch } from 'react-redux'
import { loadOpenApiConfiguration } from '../../actions/loadOpenApiConfiguration'
import { isApiConfiguredSelector, apiConfigurationSelector } from '../../selectors/configSelectors'
import { entitySelector } from '../../selectors/entitySelector'
import { Entity } from '../../selectors/Entity'

const Dashboard = () => {
  const isApiConfigured = useSelector(isApiConfiguredSelector)
  const apiConfiguration = useSelector(apiConfigurationSelector)
  const entities = useSelector(entitySelector)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isApiConfigured) dispatch(loadOpenApiConfiguration())
  })
  return (
    <div className="dashboard">
    <div style={{paddingTop: '100px'}}>
        {entitiesMenu(entities)}
    </div>
    </div>
  )
}

function entitiesMenu(entities : Entity[]){
  return entities.map(entity => entityMenuItem(entity))
}

function entityMenuItem(entity: Entity){
  return (
  <div>{entity.name}</div>
  )
}


export default Dashboard
