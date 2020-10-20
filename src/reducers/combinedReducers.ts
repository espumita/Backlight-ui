import { Store } from '../store/store'
import { Action } from 'redux'
import openApiConfigurationReducers from '../reducers/OpenApiConfigurationReducers'
import selectCurrentEntityReducers from '../reducers/selectCurrentEntityReducers'
import { OpenApiConfigurationsActionTypes } from '../actions/loadOpenApiConfiguration'
import { SelectCurrentEntityTypes } from '../actions/selectCurrentEntity'

const combinedReducers = (state: Store, action: Action) => {
    return {
        openApi: openApiConfigurationReducers(state.openApi, action as OpenApiConfigurationsActionTypes),
        currentEntity: selectCurrentEntityReducers(state.currentEntity, action as SelectCurrentEntityTypes)
    }
}
export default combinedReducers