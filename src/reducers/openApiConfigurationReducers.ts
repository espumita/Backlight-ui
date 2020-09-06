import { LoadOpenApiConfigurationAction } from '../actions/loadOpenApiConfiguration'
import initialState from '../store/initialState'
import type { OpenAPIObject } from "openapi3-ts";
import { LOAD_OPEN_API_CONFIGURATION } from '../actions/actionsTypes'

export default (state: OpenAPIObject = undefined, action: LoadOpenApiConfigurationAction) => {
    if (state == undefined) return initialState.openApiConfiguration
    switch(action.type){
        case LOAD_OPEN_API_CONFIGURATION: return Object.assign(action.openApiConfiguration)
        default: return state
    }
}