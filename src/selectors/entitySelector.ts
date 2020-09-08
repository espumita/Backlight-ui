import { createSelector } from 'reselect'
import { OpenAPIObject } from 'openapi3-ts'
import { Store } from '../store/store'
import { Entity } from './Entity'

export const entitySelector = createSelector<Store, OpenAPIObject, Entity[]>(
    (state: Store) => state.openApi.configuration,
    (openApiConfiguration: OpenAPIObject) => []
)

