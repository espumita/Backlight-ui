import React from 'react'
import './entityList.css'
import { useSelector, useDispatch } from 'react-redux'
import { currentEntityIdsSelector } from '../../selectors/currentEntitySelector'
import { animationFrameScheduler } from 'rxjs'

const EntityList = () => {
  const currentEntityIds = useSelector(currentEntityIdsSelector)
  const dispatch = useDispatch()

  return (
      <div className="entity-list">
        {currentEntityIdsItems(currentEntityIds , dispatch)}
      </div>
  )
}

function currentEntityIdsItems(entitiesIds: string[], dispatch: Function) {
  return entitiesIds.map((id, index) => entityIdItem(id, index, dispatch))
}

function entityIdItem(entityId: string, index: Number, dispatch: Function) {
  return (
    <div 
      className={`entity-list-entity-id-item`} 
      key={`entity-list-entity-id-item-${index}`}
      onClick={() =>{ console.log("Hi from entityIdItem")}}
    >
      {entityPreview(entityId)}
    </div>
  )
}

function entityPreview(entityId: string){
  const list = ["id","name","date","second"]
  return list.map(x => a(x, entityId))
}

function a(x: string, entityId: string){
  return(
    <div className={`entity-list-entity-id-item-property`}>
      <div className={`entity-list-entity-id-item-property-name`}>{x}</div>
      <div>: {x === "id" ? entityId : ""}</div>
    </div>
  )
}

export default EntityList
