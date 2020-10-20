import React, { useEffect } from 'react'
import './dashboardStyle.css'
import { useSelector, useDispatch } from 'react-redux'
import { loadOpenApiConfiguration } from '../../actions/loadOpenApiConfiguration'
import { isApiConfiguredSelector } from '../../selectors/configSelectors'
import { entitySelector } from '../../selectors/entitySelector'
import { Entity } from '../../store/Entity'

const Dashboard = () => {
  const isApiConfigured = useSelector(isApiConfiguredSelector)
  const entities = useSelector(entitySelector)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isApiConfigured) dispatch(loadOpenApiConfiguration())
  })
  return (
    <div className="dashboard">
      <div className="dashboard-left-menu">
        {entitiesMenu(entities)}
      </div>
      <div className="dashboard-content">Content</div>
    </div>
  )
}

function entitiesMenu(entities : Entity[]) {
  return entities.map((entity, index) => entityMenuItem(entity, index))
}

function entityMenuItem(entity: Entity, index: Number) {
  return (
    <div className="dashboard-left-menu-item" key={`dashboard-left-menu-item-${index}`}>
      {entity.name}
    </div>
  )
}

export default Dashboard
