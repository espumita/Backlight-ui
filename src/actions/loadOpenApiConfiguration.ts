import { Action } from 'redux'
import { LOAD_OPEN_API_CONFIGURATION } from './actionsTypes'
import type { OpenAPIObject } from "openapi3-ts";

export interface LoadOpenApiConfigurationAction extends Action {
    type: typeof LOAD_OPEN_API_CONFIGURATION
    openApiConfiguration: OpenAPIObject
}

export function createLoadOpenApiConfigurationAction(configuration : OpenAPIObject) : LoadOpenApiConfigurationAction {
    return {
        type: LOAD_OPEN_API_CONFIGURATION,
        openApiConfiguration: configuration
    }
}
