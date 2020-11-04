import React, { useEffect } from 'react'
import './dashboardStyle.css'
import { useSelector, useDispatch } from 'react-redux'
import { loadOpenApiConfiguration } from '../../actions/loadOpenApiConfiguration'
import { isApiConfiguredSelector } from '../../selectors/configSelectors'
import { currentEntityIdsSelector } from '../../selectors/currentEntitySelector'
import Editor from '../editor/Editor'
import LeftMenu from './left-menu/LeftMenu'

const Dashboard = () => {
  const isApiConfigured = useSelector(isApiConfiguredSelector)
  const currentEntityIds = useSelector(currentEntityIdsSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isApiConfigured) dispatch(loadOpenApiConfiguration())
  })

  return (
    <div className="dashboard">
      <LeftMenu/>
      <div className="dashboard-content">
        {currentEntityIdsItems(currentEntityIds , dispatch)}
      </div>
      <Editor />
    </div>
  )
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
