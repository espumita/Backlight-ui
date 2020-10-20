import React, { useEffect } from 'react'
import './dashboardStyle.css'
import { useSelector, useDispatch } from 'react-redux'
import { loadOpenApiConfiguration } from '../../actions/loadOpenApiConfiguration'
import { selectCurrentEntity } from '../../actions/selectCurrentEntity'
import { isApiConfiguredSelector } from '../../selectors/configSelectors'
import { entitySelector } from '../../selectors/entitySelector'
import { currentEntityClientSelector } from '../../selectors/currentEntitySelector'
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
  
  //This should be executed in an Epic and Action should been throw from component
  const currentEntityClient = useSelector(currentEntityClientSelector)
  
  return (
    <div className="dashboard">
      <div className="dashboard-left-menu">
        {entitiesMenu(entities, currentEntity, dispatch)}
      </div>
      <div className="dashboard-content">
        <div>{currentEntity.name}</div>
          <button onClick={() => {
            const result = currentEntityClient.getAll()
            console.log(result)
          }}>Get ALL</button>

          <button onClick={() => {
            currentEntityClient.get("2")
                               .then(x => console.log("Get Result",x))
          }}>Get</button>
      </div>
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
