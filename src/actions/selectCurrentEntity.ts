import { Action } from 'redux'
import { SELECT_CURRENT_ENTITY } from './actionsTypes'
import { Entity } from '../store/Entity'

export type SelectCurrentEntityTypes = 
    SelectCurrentEntityAction 

export interface SelectCurrentEntityAction extends Action {
    type: typeof SELECT_CURRENT_ENTITY,
    entity: Entity
}

export function selectCurrentEntity(entity: Entity) : SelectCurrentEntityAction {
    return {
        type: SELECT_CURRENT_ENTITY,
        entity: entity
    }
}
