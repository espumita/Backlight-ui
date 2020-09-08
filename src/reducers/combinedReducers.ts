import { Store } from '../store/store'
import { Action } from 'redux'
import openApiConfigurationReducers from '../reducers/OpenApiConfigurationReducers'
import { OpenApiConfigurationsActionTypes } from '../actions/loadOpenApiConfiguration'

const combinedReducers = (state: Store, action: Action) => {
    return {
        openApi: openApiConfigurationReducers(state.openApi, action as OpenApiConfigurationsActionTypes)
    }
}
export default combinedReducers