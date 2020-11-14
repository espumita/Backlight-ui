import React from 'react'
import './entityList.css'
import { useSelector, useDispatch } from 'react-redux'
import { currentEntityIdsSelector, currentEntitySelector } from '../../selectors/currentEntitySelector'
import { getEntity } from '../../actions/entityCRUD'
import { Entity } from '../../store/Entity'

const EntityList = () => {
  const currentEntityIds = useSelector(currentEntityIdsSelector)
  const currentEntity = useSelector(currentEntitySelector)
  const dispatch = useDispatch()

  return (
    <div className="entity-list">
      {entityItems(currentEntityIds, currentEntity, dispatch)}
    </div>
  )
}

function entityItems(entitiesIds: string[], currentEntity: Entity, dispatch: Function) {
  return entitiesIds.map((id, index) => entity(id, currentEntity, index, dispatch))
}

function entity(entityId: string, entity: Entity, index: Number, dispatch: Function) {
  return (
    <div 
      className={`entity-list-entity-id-item`} 
      key={`entity-list-entity-id-item-${index}`}
      onClick={() =>{ dispatch(getEntity(entity,entityId))}}
    >
      {entityPreview(entityId)}
    </div>
  )
}

function entityPreview(entityId: string){
  const entityProperties = ["id","name","date","second","age","status"]
  return entityProperties.map((property, index) => entityProperty(property, entityId, index))
}

function entityProperty(propertyName: string, entityId: string, index: Number){
  return(
    <div 
      className={`entity-list-entity-id-item-property`}
      key={`entity-list-entity-id-item-property-${index}`}>
        {entityPropertyName(propertyName)}
        {entityPropertyValue(propertyName, entityId)}
    </div>
  )
}

function entityPropertyName(propertyName: string){
  return(
    <div className={`entity-list-entity-id-item-property-name`}>{propertyName}</div>
  )
}

function entityPropertyValue(propertyName: string, entityId: string){
  const randomString = Math.random().toString(36)
  const value = propertyName === "id" ? entityId : randomString
  return(
    <div>{`: ${value}`}</div>
  )
}

export default EntityList
