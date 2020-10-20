import React, { useEffect } from 'react'
import './dashboardStyle.css'
import { useSelector, useDispatch } from 'react-redux'
import { loadOpenApiConfiguration } from '../../actions/loadOpenApiConfiguration'
import { isApiConfiguredSelector } from '../../selectors/configSelectors'
import { entitySelector } from '../../selectors/entitySelector'
import { currentEntitySelector } from '../../selectors/currentEntitySelector'
import { Entity } from '../../store/Entity'

const Dashboard = () => {
  const isApiConfigured = useSelector(isApiConfiguredSelector)
  const entities = useSelector(entitySelector)
  const currentEntity = useSelector(currentEntitySelector)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isApiConfigured) dispatch(loadOpenApiConfiguration())
  })
  return (
    <div className="dashboard">
      <div className="dashboard-left-menu">
        {entitiesMenu(entities, currentEntity)}
      </div>
      <div className="dashboard-content">{currentEntity.name}</div>
    </div>
  )
}

function entitiesMenu(entities: Entity[], currentEntity: Entity) {
  return entities.map((entity, index) => entityMenuItem(entity, currentEntity, index))
}

function entityMenuItem(entity: Entity, currentEntity: Entity, index: Number) {
  return (
    <div className={`dashboard-left-menu-item ${currentEntityClass(entity, currentEntity)}`} key={`dashboard-left-menu-item-${index}`}>
      {entity.name}
    </div>
  )
}

function currentEntityClass(entity: Entity, currentEntity: Entity) : string{
  return entity.name === currentEntity.name
    ? 'dashboard-left-menu-item-current'
    : ''
}

export default Dashboard
