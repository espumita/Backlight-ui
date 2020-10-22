import { GetAllEntityTypes } from '../actions/getAllEnity'
import initialState from '../store/initialState'
import { GET_ALL_ENTITY, GET_ALL_ENTITY_SUCCESS, GET_ALL_ENTITY_ERROR } from '../actions/actionsTypes'
import { EntityIdsStore } from '../store/store';
import { Status } from '../store/Status';

export default (state: EntityIdsStore = undefined, action: GetAllEntityTypes) => {
    if (state == undefined) return initialState.entitiesIds
    switch(action.type){
        case GET_ALL_ENTITY: return Object.assign({}, state, { status: Status.Requested })
        case GET_ALL_ENTITY_SUCCESS: {
            const dictionary = new Map(state.dictionary)
            dictionary.set(action.entityName, action.entitiesIds)
            return Object.assign({}, state, { status: Status.Success, dictionary })
        }
        case GET_ALL_ENTITY_ERROR: return Object.assign({}, state, { status: Status.Error })
        default: return state
    }
}