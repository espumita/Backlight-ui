import { Store } from '../store/store'
import { Action } from 'redux'
import openApiConfigurationReducers from '../reducers/OpenApiConfigurationReducers'
import { LoadOpenApiConfigurationAction } from '../actions/loadOpenApiConfiguration'

const combinedReducers = (state: Store, action: Action) => {
    return {
        openApiConfiguration: openApiConfigurationReducers(state.openApiConfiguration, action as LoadOpenApiConfigurationAction)
    }
}
export default combinedReducers