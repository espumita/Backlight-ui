import { createSelector } from 'reselect'
import { Store } from '../store/store'
import { Entity } from '../store/Entity'
import { OpenAPIObject } from 'openapi3-ts'

export const currentEntitySelector = createSelector<Store, Store, Entity>(
    (state: Store) => state,
    (state: Store) => state.currentEntity
)


export const currentEntityClientSelector = createSelector<Store, OpenAPIObject, Entity, object>(
    (state: Store) => state.openApi.configuration,
    (state: Store) => state.currentEntity,
    (openApiConfiguration: OpenAPIObject, currentEntity: Entity) => clientForEntity(openApiConfiguration, currentEntity)
)

function clientForEntity(openApiConfiguration: OpenAPIObject, currentEntity: Entity) : object {

    function getAll() : string[] {
        return [
            "2"
        ]
    }

    function get(entityId: string) {
        
    }


    return {
        getAll,
        get       
    }
}