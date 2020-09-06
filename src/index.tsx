import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import configStore from './store/configStore'
import './styles/main.css'

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>
,
  document.getElementById('root')
)
