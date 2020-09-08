import { LoadOpenApiConfigurationAction, LoadOpenApiConfigurationErrorAction, LoadOpenApiConfigurationSuccessAction } from '../actions/loadOpenApiConfiguration'
import initialState from '../store/initialState'
import type { OpenAPIObject } from "openapi3-ts";
import { LOAD_OPEN_API_CONFIGURATION_SUCCESS } from '../actions/actionsTypes'

export default (state: OpenAPIObject = undefined, action: LoadOpenApiConfigurationAction | LoadOpenApiConfigurationSuccessAction | LoadOpenApiConfigurationErrorAction) => {
    if (state == undefined) return initialState.openApiConfiguration
    switch(action.type){
        case LOAD_OPEN_API_CONFIGURATION_SUCCESS: return Object.assign(action.openApiConfiguration)
        default: return state
    }
}