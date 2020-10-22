import { Action } from 'redux'
import { GET_ALL_ENTITY, GET_ALL_ENTITY_SUCCESS, GET_ALL_ENTITY_ERROR } from './actionsTypes'
import { Entity } from '../store/Entity'

export type GetAllEntityTypes = 
    GetAllEntityAction 
    | GetAllEntitynSuccessAction 
    | GetAllEntityErrorAction

export interface GetAllEntityAction extends Action {
    type: typeof GET_ALL_ENTITY,
    entity: Entity
}

export function getAllEntity(entity: Entity) : GetAllEntityAction {
    return {
        type: GET_ALL_ENTITY,
        entity: entity
    }
}

export interface GetAllEntitynSuccessAction extends Action {
    type: typeof GET_ALL_ENTITY_SUCCESS
    entityName: string,
    entitiesIds: string[]
}

export function getAllEntitySuccess(entityName: string, entitiesIds: string[]) : GetAllEntitynSuccessAction {
    return {
        type: GET_ALL_ENTITY_SUCCESS,
        entityName: entityName,
        entitiesIds: entitiesIds
    }
}

export interface GetAllEntityErrorAction extends Action {
    type: typeof GET_ALL_ENTITY_ERROR
}

export function getAllEntityError() : GetAllEntityErrorAction {
    return {
        type: GET_ALL_ENTITY_ERROR
    }
}
