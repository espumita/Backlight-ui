import { createSelector } from 'reselect'
import { EntityIdsStore, Store } from '../store/store'
import { Entity } from '../store/Entity'
import { OpenAPIObject } from 'openapi3-ts'
import { Provider } from './Provider'
import entityClient from '../clients/entityClient'


//TODO ADD TEST TO THIS SELECTORS
export const currentEntitySelector = createSelector<Store, Store, Entity>(
    (state: Store) => state,
    (state: Store) => state.currentEntity
)

export const currentEntityIdsSelector = createSelector<Store, Entity, EntityIdsStore, string[]>(
    (state: Store) => state.currentEntity,
    (state: Store) => state.entitiesIds,
    (currentEntity: Entity, entitiesIds: EntityIdsStore) => {
        return entitiesIds.dictionary.has(currentEntity.name)
               ? entitiesIds.dictionary.get(currentEntity.name)
               : []
    }
)


//Residual code to DELETE

export interface EntityClient {
    getAll(): string[]
    get(entityId: string): Promise<any>
}

export const currentEntityClientSelector = createSelector<Store, OpenAPIObject, Entity, EntityClient>(
    (state: Store) => state.openApi.configuration,
    (state: Store) => state.currentEntity,
    (openApiConfiguration: OpenAPIObject, currentEntity: Entity) => clientForEntity(openApiConfiguration, currentEntity)
)

function clientForEntity(configuration: OpenAPIObject, entity: Entity) : EntityClient {
    const openApiConfiguration = configuration
    const currentEntity = entity

    function getAll() : string[] {
        return [
            "2"
        ]
    }

    function get(entityId: string) {
        if (entity.providers.includes(Provider.Read)){
            const pathName = `/api/type/${currentEntity.name}/entity`
            const pathNameWitId = `${pathName}/{id}`
            var path = openApiConfiguration.paths[pathNameWitId]["get"]
            //return path
            return entityClient.get(undefined,entityId)
        } else {
            throw new Error("NO GET CONFIGURED FOR CURRENT ENTITY");
        }
    }

    return {
        getAll,
        get
    }
}