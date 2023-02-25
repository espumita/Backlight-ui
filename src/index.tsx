import React from 'react'
import ReactDOM from 'react-dom/client'
import TopBar from './components/topBar/TopBarComponent'
import Dashboard from './components/dashboard/DashboardComponent'
import { Provider } from 'react-redux'
import configStore from './store/configStore'
import './styles/main.css'

const store = configStore();

const rootContainer = document.getElementById('backlight-ui')!
const root = ReactDOM.createRoot(rootContainer);
root.render(
    <Provider store={store}>
      <TopBar/>
      <Dashboard/>
    </Provider>
)
