import { OpenApiConfigurationsActionTypes } from '../actions/loadOpenApiConfiguration'
import initialState from '../store/initialState'
import { LOAD_OPEN_API_CONFIGURATION, LOAD_OPEN_API_CONFIGURATION_SUCCESS, LOAD_OPEN_API_CONFIGURATION_ERROR } from '../actions/actionsTypes'
import { OpenApiStore } from '../store/store';
import { Status } from '../store/Status';

export default (state: OpenApiStore = undefined, action: OpenApiConfigurationsActionTypes) => {
    if (state == undefined) return initialState.openApi
    switch(action.type){
        case LOAD_OPEN_API_CONFIGURATION: return Object.assign({}, state, { status: Status.Requested })
        case LOAD_OPEN_API_CONFIGURATION_SUCCESS: return Object.assign({}, state, { status: Status.Success, configuration: action.openApiConfiguration  })
        case LOAD_OPEN_API_CONFIGURATION_ERROR: return Object.assign({}, state, { status: Status.Error })
        default: return state
    }
}