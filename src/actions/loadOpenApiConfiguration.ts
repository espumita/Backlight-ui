import { Action } from 'redux'
import { LOAD_OPEN_API_CONFIGURATION, LOAD_OPEN_API_CONFIGURATION_SUCCESS, LOAD_OPEN_API_CONFIGURATION_ERROR } from './actionsTypes'
import type { OpenAPIObject } from "openapi3-ts";

export type OpenApiConfigurationsActionTypes = 
    LoadOpenApiConfigurationAction 
    | LoadOpenApiConfigurationSuccessAction 
    | LoadOpenApiConfigurationErrorAction


export interface LoadOpenApiConfigurationAction extends Action {
    type: typeof LOAD_OPEN_API_CONFIGURATION
}

export function createLoadOpenApiConfigurationAction() : LoadOpenApiConfigurationAction {
    return {
        type: LOAD_OPEN_API_CONFIGURATION
    }
}

export interface LoadOpenApiConfigurationSuccessAction extends Action {
    type: typeof LOAD_OPEN_API_CONFIGURATION_SUCCESS
    openApiConfiguration: OpenAPIObject
}

export function createLoadOpenApiConfigurationSuccessAction(configuration : OpenAPIObject) : LoadOpenApiConfigurationSuccessAction {
    return {
        type: LOAD_OPEN_API_CONFIGURATION_SUCCESS,
        openApiConfiguration: configuration
    }
}

export interface LoadOpenApiConfigurationErrorAction extends Action {
    type: typeof LOAD_OPEN_API_CONFIGURATION_ERROR
}

export function createLoadOpenApiConfigurationErrorAction() : LoadOpenApiConfigurationErrorAction {
    return {
        type: LOAD_OPEN_API_CONFIGURATION_ERROR
    }
}
