import React from 'react'
import ReactDOM from 'react-dom'
import TopBar from './components/topBar/TopBarComponent'
import Dashboard from './components/dashboard/DashboardComponent'
import { Provider } from 'react-redux'
import configStore from './store/configStore'
import './styles/main.css'

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
      <TopBar/>
      <Dashboard/>
  </Provider>
,
  document.getElementById('root')
)
