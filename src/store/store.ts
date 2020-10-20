import type { OpenAPIObject } from 'openapi3-ts'
import { Status } from './Status'
import { Entity } from './Entity'


export interface Store {
    openApi: OpenApiStore,
    currentEntity: Entity
}

export interface OpenApiStore {
    configuration: OpenAPIObject,
    status: Status
}

