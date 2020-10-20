import { SelectCurrentEntityTypes } from '../actions/selectCurrentEntity'
import initialState from '../store/initialState'
import { SELECT_CURRENT_ENTITY } from '../actions/actionsTypes'
import { Entity } from '../store/Entity';
import { Status } from '../store/Status';

export default (state: Entity = undefined, action: SelectCurrentEntityTypes) => {
    if (state == undefined) return initialState.currentEntity
    switch(action.type){
        case SELECT_CURRENT_ENTITY: return Object.assign({}, action.entity)
        default: return state
    }
}