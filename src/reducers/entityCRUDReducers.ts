import { GetEntityTypes } from '../actions/entityCRUD'
import initialState from '../store/initialState'
import { GET_ENTITY_REQUEST, GET_ENTITY_SUCCESS, GET_ENTITY_ERROR } from '../actions/actionsTypes'
import { Status } from '../store/Status';
import { CurrentEntityValueStore } from '../store/store';

export default (state: CurrentEntityValueStore = undefined, action: GetEntityTypes) => {
    if (state == undefined) return initialState.currentEntityValue
    switch(action.type) {
        case GET_ENTITY_REQUEST: return Object.assign({}, state, { status: Status.Requested })
        case GET_ENTITY_SUCCESS: {
            return Object.assign({}, state, { status: Status.Success }, { value: action.data })
        }
        case GET_ENTITY_ERROR: return Object.assign({}, state, { status: Status.Error })
        default: return state
    }
}