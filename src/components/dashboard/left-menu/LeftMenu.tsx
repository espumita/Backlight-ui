import React from 'react'
import './leftMenu.css'
import { useSelector, useDispatch } from 'react-redux'
import { Entity } from '../../../store/Entity'
import { entitySelector } from '../../../selectors/entitySelector'
import { currentEntitySelector } from '../../../selectors/currentEntitySelector'
import { selectCurrentEntity } from '../../../actions/selectCurrentEntity'

const LeftMenu = () => {
    const entities = useSelector(entitySelector)
    const currentEntity = useSelector(currentEntitySelector)
    const dispatch = useDispatch()
  
    return (
        <div className="left-menu">
            {entitiesMenu(entities, currentEntity, dispatch)}
        </div>
    )
  }
  
  function entitiesMenu(entities: Entity[], currentEntity: Entity, dispatch: Function) {
    return entities.map((entity, index) => entityMenuItem(entity, currentEntity, index, dispatch))
  }
  
  function entityMenuItem(entity: Entity, currentEntity: Entity, index: Number, dispatch: Function) {
    return (
      <div 
        className={`left-menu-item ${currentEntityClass(entity, currentEntity)}`} 
        key={`left-menu-item-${index}`}
        onClick={() => dispatch(selectCurrentEntity(entity))}
      >
        {entity.shortName}
      </div>
    )
  }
  
  function currentEntityClass(entity: Entity, currentEntity: Entity) : string {
    return entity.name === currentEntity.name
      ? 'left-menu-item-current'
      : ''
  }
  
  export default LeftMenu
  