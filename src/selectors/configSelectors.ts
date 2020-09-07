import initialState from '../store/initialState'
import { createSelector } from 'reselect'
import { OpenAPIObject } from 'openapi3-ts'
import { Store } from '../store/store'


export const isApiConfiguredSelector = createSelector<Store, OpenAPIObject, boolean>(
    (state: Store) => state.openApiConfiguration,
    (openApiConfiguration: OpenAPIObject) => openApiConfiguration != initialState.openApiConfiguration
)

export function apiConfigurationSelector(state: Store) : OpenAPIObject {
    return state.openApiConfiguration 
}