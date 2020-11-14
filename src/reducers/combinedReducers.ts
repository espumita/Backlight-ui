import { Store } from '../store/store'
import { Action } from 'redux'
import openApiConfigurationReducers from '../reducers/openApiConfigurationReducers'
import selectCurrentEntityReducers from '../reducers/selectCurrentEntityReducers'
import { OpenApiConfigurationsActionTypes } from '../actions/loadOpenApiConfiguration'
import { SelectCurrentEntityTypes } from '../actions/selectCurrentEntity'
import { GetAllEntityTypes } from '../actions/getAllEnity'
import { GetEntityTypes } from '../actions/entityCRUD'
import getAllEntityIdsReducers from '../reducers/getAllEntityIdsReducers'
import entityCRUDReducers from '../reducers/entityCRUDReducers'

const combinedReducers = (state: Store, action: Action) => {
    return {
        openApi: openApiConfigurationReducers(state.openApi, action as OpenApiConfigurationsActionTypes),
        currentEntity: selectCurrentEntityReducers(state.currentEntity, action as SelectCurrentEntityTypes),
        currentEntityValue: entityCRUDReducers(state.currentEntityValue, action as GetEntityTypes),
        entitiesIds: getAllEntityIdsReducers(state.entitiesIds, action as GetAllEntityTypes)
    }
}
export default combinedReducers