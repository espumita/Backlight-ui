import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Store } from './store/store'
import { createLoadOpenApiConfigurationAction } from './actions/loadOpenApiConfiguration'
import axios from 'axios'
import initialState from './store/initialState'

function App() {
  const { openApiConfiguration } = useSelector((state: Store) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    if (openApiConfiguration == initialState.openApiConfiguration) {
        loadOpenApiConfiguration(dispatch)
    }
  });
  return (
    <div>
     {JSON.stringify(openApiConfiguration)}
    </div>
  );
}

function loadOpenApiConfiguration(dispatch : Function){
  axios.get('https://localhost:44349/back/openapi.json')
  .then(result => {
    dispatch(createLoadOpenApiConfigurationAction(result.data))
  })
  .catch(error => {
    console.error(error)
   // dispatch(createLoadOpenApiConfigurationAction(undefined))
  })
}

export default App;
