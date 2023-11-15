import { Action } from 'redux'
import { LOAD_OPEN_API_CONFIGURATION_REQUEST, LOAD_OPEN_API_CONFIGURATION_SUCCESS, LOAD_OPEN_API_CONFIGURATION_ERROR } from './actionsTypes'
import type { OpenAPIObject } from "openapi3-ts/oas30";

export type OpenApiConfigurationsActionTypes = 
    LoadOpenApiConfigurationAction 
    | LoadOpenApiConfigurationSuccessAction 
    | LoadOpenApiConfigurationErrorAction

export interface LoadOpenApiConfigurationAction extends Action {
    type: typeof LOAD_OPEN_API_CONFIGURATION_REQUEST
}

export function loadOpenApiConfiguration() : LoadOpenApiConfigurationAction {
    return {
        type: LOAD_OPEN_API_CONFIGURATION_REQUEST
    }
}

export interface LoadOpenApiConfigurationSuccessAction extends Action {
    type: typeof LOAD_OPEN_API_CONFIGURATION_SUCCESS
    openApiConfiguration: OpenAPIObject
}

export function loadOpenApiConfigurationSuccess(configuration : OpenAPIObject) : LoadOpenApiConfigurationSuccessAction {
    return {
        type: LOAD_OPEN_API_CONFIGURATION_SUCCESS,
        openApiConfiguration: configuration
    }
}


export interface LoadOpenApiConfigurationErrorAction extends Action {
    type: typeof LOAD_OPEN_API_CONFIGURATION_ERROR
}

export function loadOpenApiConfigurationError() : LoadOpenApiConfigurationErrorAction {
    return {
        type: LOAD_OPEN_API_CONFIGURATION_ERROR
    }
}
