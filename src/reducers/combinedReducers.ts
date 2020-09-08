import { Store } from '../store/store'
import { Action } from 'redux'
import openApiConfigurationReducers from '../reducers/OpenApiConfigurationReducers'
import { LoadOpenApiConfigurationAction } from '../actions/loadOpenApiConfiguration'

const combinedReducers = (state: Store, action: Action) => {
    return {
        openApi: openApiConfigurationReducers(state.openApi, action as Action)
    }
}
export default combinedReducers