import { Store } from '../store/store'
import { Action } from 'redux'
import openApiConfigurationReducers from '../reducers/openApiConfigurationReducers'
import selectCurrentEntityReducers from '../reducers/selectCurrentEntityReducers'
import { OpenApiConfigurationsActionTypes } from '../actions/loadOpenApiConfiguration'
import { SelectCurrentEntityTypes } from '../actions/selectCurrentEntity'
import { GetAllEntityTypes } from '../actions/getAllEnity'
import getAllEntityIdsReducers from '../reducers/getAllEntityIdsReducers'

const combinedReducers = (state: Store, action: Action) => {
    return {
        openApi: openApiConfigurationReducers(state.openApi, action as OpenApiConfigurationsActionTypes),
        currentEntity: selectCurrentEntityReducers(state.currentEntity, action as SelectCurrentEntityTypes),
        entitiesIds: getAllEntityIdsReducers(state.entitiesIds, action as GetAllEntityTypes)
    }
}
export default combinedReducers