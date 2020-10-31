import React, { useEffect } from 'react'
import './dashboardStyle.css'
import { useSelector, useDispatch } from 'react-redux'
import { loadOpenApiConfiguration } from '../../actions/loadOpenApiConfiguration'
import { selectCurrentEntity } from '../../actions/selectCurrentEntity'
import { isApiConfiguredSelector } from '../../selectors/configSelectors'
import { entitySelector } from '../../selectors/entitySelector'
import { currentEntitySelector, currentEntityIdsSelector } from '../../selectors/currentEntitySelector'
import { Entity } from '../../store/Entity'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/javascript/javascript'

const Dashboard = () => {
  const isApiConfigured = useSelector(isApiConfiguredSelector)
  const entities = useSelector(entitySelector)
  const currentEntity = useSelector(currentEntitySelector)
  const currentEntityIds = useSelector(currentEntityIdsSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isApiConfigured) dispatch(loadOpenApiConfiguration())
  })
  
  const entityTest = {"Name":"EntityName"}

  return (
    <div className="dashboard">
      <div className="dashboard-left-menu">
        {entitiesMenu(entities, currentEntity, dispatch)}
      </div>
      <div className="dashboard-content">
        {currentEntityIdsItems(currentEntityIds , dispatch)}
      </div>
      <div className="dashboard-right-editor">
        <CodeMirror
            value={JSON.stringify(entityTest, null, 2)}
            options={{
              mode: {name: "javascript", json: true},
              theme: 'dracula',
              lineNumbers: true
            }}
            onChange={(editor, data, value) => {
            }}
          />
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

function currentEntityClass(entity: Entity, currentEntity: Entity) : string {
  return entity.name === currentEntity.name
    ? 'dashboard-left-menu-item-current'
    : ''
}

function currentEntityIdsItems(entitiesIds: string[], dispatch: Function) {
  return entitiesIds.map((id, index) => entityIdItem(id, index, dispatch))
}

function entityIdItem(entityId: string, index: Number, dispatch: Function) {
  return (
    <div 
      className={`dashboard-content-entity-id-item`} 
      key={`dashboard-content-entity-id-item-${index}`}
      onClick={() =>{ console.log("Hi from entityIdItem")}}
    >
      {entityId}
    </div>
  )
}

export default Dashboard
