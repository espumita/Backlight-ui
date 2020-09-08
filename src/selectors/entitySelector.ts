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
    return pathNames.map(pathName => entityFrom(pathName))
}

function entityFrom(pathName: string) : Entity {
    const pathSplited = pathName.split('.')
    const entityName = pathSplited[pathSplited.length -1]
    return {
       name: entityName
    }
}
