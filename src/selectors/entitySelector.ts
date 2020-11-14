import { createSelector } from 'reselect'
import { OpenAPIObject, PathsObject, PathItemObject } from 'openapi3-ts'
import { Store } from '../store/store'
import { Entity } from '../store/Entity'
import { Provider } from './Provider'

export const entitySelector = createSelector<Store, OpenAPIObject, Entity[]>(
    (state: Store) => state.openApi.configuration,
    (openApiConfiguration: OpenAPIObject) => entitiesFrom(openApiConfiguration.paths)
)

export function entitiesFrom(paths: PathsObject): Entity[] {
    const pathNames = Object.keys(paths)
    if (pathNames.length == 0) return []
    const entities =  pathNames.map(pathName => entityFrom(pathName, paths[pathName]))
    const entitiesWithCreate = entitiesWithCreateFrom(entities)
    const entitiesWithOtherProviders = entitiesWithOtherProvidersFrom(entities)
    return merge(entitiesWithCreate, entitiesWithOtherProviders)
                .sort(shortAlphabetically())
}

function entitiesWithCreateFrom(entities : Entity[]) : Entity[] {
    return entities.filter(entity => entity.providers.includes(Provider.Create))
}

function entitiesWithOtherProvidersFrom(entities : Entity[]) : Entity[] {
    return entities.filter(entities => !entities.providers.includes(Provider.Create))
}

function merge(entitiesWithCreate : Entity[], entitiesWithOtherProviders : Entity[]) : Entity[] {
    const singleConfiguration : Entity[] = []
    const multipleConfiguration : Entity[] = []
    const entitiesWithCreateNames = entitiesWithCreate.map(x => x.name)
    entitiesWithOtherProviders.forEach((entity: Entity) => {
        const isConfigured = entitiesWithCreateNames.includes(entity.name)
        if (isConfigured) multipleConfiguration.push({...entity, providers: [Provider.Create].concat(entity.providers) })
        else singleConfiguration.push(entity)
    })
    const multipleConfigurationNames = multipleConfiguration.map(x => x.name)
    entitiesWithCreate.forEach((entity: Entity) => {
        const isConfigured = multipleConfigurationNames.includes(entity.name)
        if(!isConfigured) singleConfiguration.push(entity)
    })
    return multipleConfiguration.concat(singleConfiguration)
}

function entityFrom(pathName: string, pathItem: PathItemObject) : Entity {
    const entityName = entityNameFrom(pathName)
    const entityShortName = entityShortNameFrom(entityName)
    return {
       name: entityName,
       shortName: entityShortName,
       providers: providersFrom(pathItem)
    }
}

function entityNameFrom(pathName: string) : string {
    const replacedPath = pathName.replace('/entity/{id}', '')
    const pathSplited = replacedPath.split('/')
    return pathSplited[pathSplited.length -1]
}

function entityShortNameFrom(entityName: string) : string {
    const nameSplited = entityName.split('.')
    return nameSplited[nameSplited.length -1]
}

function providersFrom(pathItem: PathItemObject) : Provider[]{
    const providers : Provider[] = [] 
    if (pathItem.put) providers.push(Provider.Create)
    if (pathItem.get) providers.push(Provider.Read)
    if (pathItem.post) providers.push(Provider.Update)
    if (pathItem.delete) providers.push(Provider.Delete)
    return providers
}

function shortAlphabetically(): (a: Entity, b: Entity) => number {
    return function (a, b) {
        var textA = a.name.toUpperCase()
        var textB = b.name.toUpperCase()
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
    }
}
