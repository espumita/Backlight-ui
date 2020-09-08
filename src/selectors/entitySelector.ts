import { createSelector } from 'reselect'
import { OpenAPIObject, PathsObject } from 'openapi3-ts'
import { Store } from '../store/store'
import { Entity } from './Entity'

export const entitySelector = createSelector<Store, OpenAPIObject, Entity[]>(
    (state: Store) => state.openApi.configuration,
    (openApiConfiguration: OpenAPIObject) => entitiesFrom(openApiConfiguration.paths)
)


function entitiesFrom(paths: PathsObject): Entity[]{
    const pathNames = Object.keys(paths)
    if (pathNames.length == 0) return []
    return Object.keys(paths).map(x => { return { name: x }})
}
