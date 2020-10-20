import React, { useEffect } from 'react'
import './dashboardStyle.css'
import { useSelector, useDispatch } from 'react-redux'
import { loadOpenApiConfiguration } from '../../actions/loadOpenApiConfiguration'
import { selectCurrentEntity } from '../../actions/selectCurrentEntity'
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
        {entitiesMenu(entities, currentEntity, dispatch)}
      </div>
      <div className="dashboard-content">{currentEntity.name}</div>
    </div>
  )
}

function entitiesMenu(entities: Entity[], currentEntity: Entity, dispatch: Function) {
  return entities.map((entity, index) => entityMenuItem(entity, currentEntity, index, dispatch))
}

function entityMenuItem(entity: Entity, currentEntity: Entity, index: Number, dispatch: Function) {
  return (
    <div 
      className={`dashboard-left-menu-item ${currentEntityClass(entity, currentEntity)}`} 
      key={`dashboard-left-menu-item-${index}`}
      onClick={() => dispatch(selectCurrentEntity(entity))}
    >
      {entity.shortName}
    </div>
  )
}

function currentEntityClass(entity: Entity, currentEntity: Entity) : string{
  return entity.name === currentEntity.name
    ? 'dashboard-left-menu-item-current'
    : ''
}

export default Dashboard
