import type { OpenAPIObject } from 'openapi3-ts'
import { Status } from './Status'
import { Entity } from './Entity'


export interface Store {
    openApi: OpenApiStore,
    currentEntity: Entity,
    entitiesIds: EntityIdsStore
}

export interface OpenApiStore {
    configuration: OpenAPIObject,
    status: Status
}

export interface EntityIdsStore {
    dictionary: Map<string, string[]>
    status: Status
}

