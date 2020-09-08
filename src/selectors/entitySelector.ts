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
                .sort(shortAlphabetically())
}

function entityFrom(pathName: string) : Entity {
    const entityName = entityNameFrom(pathName)
    return {
       name: entityName
    }
}

function entityNameFrom(pathName: string) : string {
    const pathSplited = pathName.split('.')
    const lastPathPart = pathSplited[pathSplited.length -1]
    return lastPathPart.split('/')[0]
}

function shortAlphabetically(): (a: Entity, b: Entity) => number {
    return function (a, b) {
        var textA = a.name.toUpperCase()
        var textB = b.name.toUpperCase()
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
    }
}
