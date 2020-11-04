import React, { useEffect } from 'react'
import './dashboardStyle.css'
import { useSelector, useDispatch } from 'react-redux'
import { loadOpenApiConfiguration } from '../../actions/loadOpenApiConfiguration'
import { isApiConfiguredSelector } from '../../selectors/configSelectors'
import Editor from '../editor/Editor'
import LeftMenu from '../leftMenu/LeftMenu'
import EntityList from '../entityList/EntityList'

const Dashboard = () => {
  const isApiConfigured = useSelector(isApiConfiguredSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isApiConfigured) dispatch(loadOpenApiConfiguration())
  })

  return (
    <div className="dashboard">
      <LeftMenu/>
      <EntityList/>
      <Editor />
    </div>
  )
}

export default Dashboard
