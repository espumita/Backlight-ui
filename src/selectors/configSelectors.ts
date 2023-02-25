import initialState from '../store/initialState'
import { createSelector } from 'reselect'
import { OpenAPIObject } from 'openapi3-ts'
import { Store } from '../store/store'

export const isApiConfiguredSelector = createSelector(
    (state: Store) => state.openApi.configuration,
    (openApiConfiguration: OpenAPIObject) => openApiConfiguration != initialState.openApi.configuration
)
