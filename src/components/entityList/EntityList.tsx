import React from 'react'
import './entityList.css'
import { useSelector, useDispatch } from 'react-redux'
import { currentEntityIdsSelector, currentEntitySelector, currentEntityPropsValyesWithSelector } from '../../selectors/currentEntitySelector'
import { PropValue } from '../../selectors/PropValue'
import { getEntity } from '../../actions/entityCRUD'
import { Entity } from '../../store/Entity'

const EntityList = () => {
  const currentEntityIds = useSelector(currentEntityIdsSelector)
  const currentEntity = useSelector(currentEntitySelector)
  //TODO this should be for all, and store should have all values
  const currentEntityPropsValues = useSelector(currentEntityPropsValyesWithSelector)

  const dispatch = useDispatch()

  return (
    <div className="entity-list">
      {entityItems(currentEntityIds, currentEntity, currentEntityPropsValues,  dispatch)}
    </div>
  )
}

function entityItems(entitiesIds: string[], currentEntity: Entity, currentEntityPropsValues: PropValue[], dispatch: Function) {
  return entitiesIds.map((id, index) => entity(id, currentEntity, index, currentEntityPropsValues, dispatch))
}

function entity(entityId: string, entity: Entity, index: Number, currentEntityPropsValues: PropValue[], dispatch: Function) {
  return (
    <div 
      className={`entity-list-entity-id-item`} 
      key={`entity-list-entity-id-item-${index}`}
      onClick={() =>{ dispatch(getEntity(entity, entityId))}}
    >
      {entityPreview(entityId, currentEntityPropsValues)}
    </div>
  )
}

function entityPreview(entityId: string, currentEntityPropsValues: PropValue[]){
  const entityProperties = currentEntityPropsValues
      .map(prop => prop).slice(0, 6)
  return entityProperties.map((prop, index) => entityProperty(prop, entityId, index))
}

function entityProperty(prop: PropValue, entityId: string, index: Number){
  return(
    <div 
      className={`entity-list-entity-id-item-property`}
      key={`entity-list-entity-id-item-property-${index}`}>
        {entityPropertyName(prop.propName)}
        {entityPropertyValue(prop, entityId)}
    </div>
  )
}

function entityPropertyName(propertyName: string){
  return(
    <div className={`entity-list-entity-id-item-property-name`}>{propertyName}</div>
  )
}

function entityPropertyValue(prop: PropValue, entityId: string){
  //const randomString = Math.random().toString(36)
  //const value = prop.propName === "id" ? entityId : randomString
  return(
    <div>{`: ${prop.propValue}`}</div>
  )
}

export default EntityList
